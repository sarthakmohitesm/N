import connectDB from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();

    return NextResponse.json({
        message: "MongoDB Connected Successfully",
    });
}



// import { NextResponse } from 'next/server';
// import mongodb from '@/app/lib/mongodb';

// export async function GET() {
//   try {
//     await mongodb();
//     return NextResponse.json({ message: "✅ Database connected successfully!" });
//   } catch (error) {
//     return NextResponse.json({ message: "❌ Database connection failed", error }, { status: 500 });
//   }
// }
