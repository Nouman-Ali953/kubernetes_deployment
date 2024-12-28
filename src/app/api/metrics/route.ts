import { NextRequest, NextResponse } from "next/server";
import client from "prom-client";

const defaultMetrices = client.collectDefaultMetrics

defaultMetrices({ register: client.register})
export const GET = async (req: NextRequest) => {
  try {
    // Set up Prometheus metrics or retrieve existing metrics
    const metrics = await client.register.metrics();

    // Return metrics with the correct Content-Type
    return new Response(metrics, {
      headers: {
        "Content-Type": client.register.contentType,
      },
    });
  } catch (error) {
    console.error("Error generating metrics:", error);
    return NextResponse.json({ error: "Failed to retrieve metrics" }, { status: 500 });
  }
};
