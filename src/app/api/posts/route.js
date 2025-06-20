import {NextResponse} from 'next/server';
import {prisma} from "@/app/libs/prisma";

export async function GET() {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
}

export async function POST(request) {
    const datos = await request.json();
    const nuevoPost = await prisma.post.create({
        data:{
            titulo: datos.titulo,
            contenido: datos.contenido,
        }
    });
    return NextResponse.json(nuevoPost);
}
