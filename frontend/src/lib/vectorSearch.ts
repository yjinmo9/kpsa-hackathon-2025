import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAI } from "openai";
import { extractTechKeywords, CompanyInfo } from "./openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY! });
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
const index = pinecone.Index("medicinecheck");

export interface SearchResult {
  type: string;
  data?: any;
  metadata?: any;
}

function shouldEnhanceAbouttech(abouttech: any): boolean {
  if (!abouttech) return true;
  if (Array.isArray(abouttech) && abouttech.length === 0) return true;
  if (Array.isArray(abouttech) && abouttech.every(item => item === 'r')) return true;
  if (typeof abouttech === 'string' && (abouttech === '' || abouttech === 'r')) return true;
  return false;
}

async function enhanceAbouttech(metadata: Record<string, any>): Promise<string[]> {
  const companyInfo: CompanyInfo = {
    company: metadata.company || "N/A",
    industry: metadata.industry || "N/A", 
    pipeline: metadata.pipeline || "N/A",
    products: metadata.products || "N/A",
    advantage: metadata.advantage || "N/A",
    summary: metadata.summary || "N/A",
  };

  console.log("🔧 Enhancing abouttech for company:", companyInfo.company);
  
  try {
    const techKeywords = await extractTechKeywords(companyInfo);
    console.log("✅ Extracted tech keywords:", techKeywords);
    return techKeywords;
  } catch (error) {
    console.error("❌ Failed to enhance abouttech:", error);
    return ['Biotechnology', 'Drug Development', 'Healthcare'];
  }
}

export async function performVectorSearch(query: string): Promise<SearchResult> {
  console.log("🔍 Received query:", query);

  try {
    // 1. 임베딩 생성
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: query,
    });

    const queryEmbedding = embedding.data[0].embedding;
    console.log("✅ Created embedding. Vector length:", queryEmbedding.length);

    // 2. Pinecone 유사도 검색
    const results = await index.query({
      vector: queryEmbedding,
      topK: 3,
      includeMetadata: true,
    });

    console.log("🔎 Pinecone query results:", JSON.stringify(results, null, 2));

    const match = results.matches?.[0];
    if (!match) {
      console.warn("No match found for query:", query);
      throw new Error("No match found");
    }

    const metadata = match.metadata as Record<string, any>;
    console.log("Matched metadata:", metadata);

    const rag_type = metadata.rag_type || "unknown";
    console.log("RAG Type:", rag_type);

    if (rag_type === "company") {
      let abouttech = metadata.abouttech || [];
      
      // Check if abouttech needs enhancement
      if (shouldEnhanceAbouttech(abouttech)) {
        console.log("🚀 Enhancing empty/insufficient abouttech...");
        abouttech = await enhanceAbouttech(metadata);
      }

      return {
        type: "abouttech",
        data: {
          company: metadata.company || "N/A",
          industry: metadata.industry || "N/A",
          pipeline: metadata.pipeline || "N/A",
          products: metadata.products || "N/A",
          tech_codes: metadata.tech_codes || "N/A",
          advantage: metadata.advantage || "N/A",
          summary: metadata.summary || "N/A",
          abouttech: abouttech,
        },
      };
    }

    return { type: rag_type, metadata };
  } catch (error: any) {
    console.error("❌ Error in vector search:", error);
    throw error;
  }
} 