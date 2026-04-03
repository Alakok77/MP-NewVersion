import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectDB();

    const stats = await db.collection("projects").aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    const result = {
        "Web/App": 0,
        "Game": 0,
        "Infra": 0,
        total: 0
    };

    stats.forEach(s => {
        result[s._id] = s.count;
        result.total += s.count;
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching stats" },
      { status: 500 }
    );
  }
}