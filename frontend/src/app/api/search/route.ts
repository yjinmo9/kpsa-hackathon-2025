import { NextRequest, NextResponse } from "next/server";
import { performVectorSearch } from "@/lib/vectorSearch";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const query = body.query;

  if (!query) {
    console.warn("❌ Missing query");
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  try {
    const result = await performVectorSearch(query);
    console.log("Final API response:", result);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("❌ Error in /api/search:", error);
    
    if (error.message === "No match found") {
      return NextResponse.json({ error: "No match found" }, { status: 404 });
    }
    
    return NextResponse.json(
      { error: "Internal Server Error", detail: error.message },
      { status: 500 }
    );
  }
}


