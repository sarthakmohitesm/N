import { NextRequest, NextResponse } from "next/server";
import mongodb from "@/app/lib/mongodb";
import User from "@/app/lib/model/user";


export const POST = async (req: Request) => {

    await mongodb();

    const data = await req.json();

    const user = new User({
        name: data.name,
        number: data.number,
        email: data.email,
    });

    await user.save();

    return NextResponse.json({
        message: "user added successfully    ",
        user,
    });
    ;
}