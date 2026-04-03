import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(req, context) {
  try {
    const db = await connectDB();
    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid ID" },
        { status: 400 }
      );
    }

    const project = await db
      .collection("projects")
      .findOne({ _id: new ObjectId(id) });

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching project" },
      { status: 500 }
    );
  }
}

export async function PUT(req, context) {
  try {
    const db = await connectDB();
    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid ID" },
        { status: 400 }
      );
    }

    const body = await req.json();

    const updatedProject = {
      title: body.title,
      category: body.category,
      date: body.date,
      role: body.role,
      thumbnail: body.thumbnail,
      short_desc: body.short_desc,
      full_desc: body.full_desc,

      tags: body.tags || [],
      stack: body.stack || [],
      features: body.features || [],
      images: body.images || [],
      documents: body.documents || [],

      github: body.github || "",
      video: body.video || "",

      updatedAt: new Date(),
    };

    const result = await db.collection("projects").updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedProject }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Project updated",
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error updating project" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  try {
    const db = await connectDB();
    const { id } = await context.params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid ID" },
        { status: 400 }
      );
    }

    const result = await db.collection("projects").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Project deleted",
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error deleting project" },
      { status: 500 }
    );
  }
}