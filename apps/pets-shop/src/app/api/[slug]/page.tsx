import { redirect,  } from "next/navigation"
import { NextResponse } from "next/server"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import Handlebars from "handlebars"

export default async function Page({params}:{params: Promise<{slug:string}>}) {
  const { slug } = await params


  return (
    <div>
      <p>Page</p>
      <h1>{slug}</h1>
    </div>
  )
}
