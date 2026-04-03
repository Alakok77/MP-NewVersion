import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const db = await connectDB();

    const newProject = {
      title: body.title,
      category: body.category,
      date: body.date,
      role: body.role,
      thumbnail: body.thumbnail,
      short_desc: body.short_desc,
      full_desc: body.full_desc,
      tags: body.tag?.split(",").map(t => t.trim()) || [],
      stack: body.stack?.split(",").map(s => s.trim()) || [],
      features: body.feature?.split(",").map(f => f.trim()) || [],
      images: body.img?.split(",").map(i => i.trim()) || [],
      documents: body.doc?.split(",").map(d => d.trim()) || [],
      github: body.github || "",
      video: body.video || "",
      createdAt: new Date(),
    };

    const result = await db.collection("projects").insertOne(newProject);

    return NextResponse.json({
      message: "Project created",
      id: result.insertedId,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error saving project" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await connectDB();

    const projects = await db
      .collection("projects")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(projects);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching projects" },
      { status: 500 }
    );
  }
}