import {NextResponse} from 'next/server';
import {prisma} from "@/app/libs/prisma";

export async function GET(request, { params }) {
    const { id } = await params;
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    return NextResponse.json(post);
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
