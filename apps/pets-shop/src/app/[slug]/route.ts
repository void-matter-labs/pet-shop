import { readFile } from "fs/promises";
import Handlebars from "handlebars";
import { NextResponse } from "next/server";
import { join } from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const cwdProcess = process.cwd()

  const template = await readFile(join(cwdProcess, "src/templates/pet.hbs"), "utf-8")

  if(slug === 'paul'){
    return NextResponse.rewrite('http://localhost:3000/api/paul')
  }

  return new NextResponse(Handlebars.compile(template)({ slug }), {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
