import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({ message: "Everything is healthy 👁️" });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ message: "Unhealthy state" }, { status: 500 });
  }
};