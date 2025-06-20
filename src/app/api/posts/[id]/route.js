import {NextResponse} from 'next/server';


export async function GET({params}) {
    const {id} = await params;
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    return NextResponse.json(posts);
}

export async function PUT( request, {params}) {
    const {id} = await params;
    const datos = await request.json();
    const postAct =  await prisma.post.update({
        where: {
            id: parseInt(id),
        },
        data: {
            titulo: datos.titulo,
            contenido: datos.contenido,
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