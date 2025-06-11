import {NextResponse} from 'next/server';
import {prisma} from "@/app/libs/prisma";

export async function GET() {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
}

export function PUT() {
    return NextResponse.json({
        MESSAGE: "PUT/api/posts",

    });
}

export function DELETE() {
    return NextResponse.json({
        MESSAGE: "DELETE/api/posts",

    });
}