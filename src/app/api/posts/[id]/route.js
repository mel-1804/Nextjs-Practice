import {NextResponse} from 'next/server';


export function GET() {
    const posts = prisma.post.findMany();
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