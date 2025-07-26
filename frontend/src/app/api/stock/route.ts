import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  return NextResponse.json({ 
    company: "알테오젠",
    technology: ["PEGylation", "개량신약", "이중표적 항체"]
   });
}


