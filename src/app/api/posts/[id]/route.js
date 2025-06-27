import {NextResponse} from 'next/server';
import { prisma } from "@/app/libs/prisma";


export async function GET(request, {params}) {
    const {id} = await params;
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    return NextResponse.json(post);
}

export async function PUT( request, {params}) {
    const {id} = await params;
    const datos = await request.json();
    const postAct =  await prisma.post.update({
        where: {
            id: parseInt(id),
        },
        data: {
            ...datos
        }
    });
    return NextResponse.json(postAct);
}

export async function DELETE({params}) {
    const {id} = await params;
    try{
        const postDel = await prisma.post.delete({
            where: {
                id: parseInt(id),
            },
        });
        return NextResponse.json(postDel);
    }
    catch(error){
        return NextResponse.json({message: "Error " + error});
    }
}