import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password } = await req.json();

  const db = await connectDB();
  const user = await db.collection("users").findOne({ username });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  const res = NextResponse.json({ message: "Login success" });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return res;
}