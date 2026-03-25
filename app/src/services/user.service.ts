import {prisma} from '../database/client';

class ServiceUser{
    constructor(){}
    
    create = async (name: string) => {

        // Validação para nome vazio
        if (!name) throw new Error("Coloque um nome.");

        const existsUser = await prisma.user.findUnique({
            where: {name: name},
        });
        
        if (existsUser) throw new Error("Nome já existe.")
        
        const newUser = prisma.user.create({
            data: {name: name}
        });

        return newUser;
    }

    get = async (id: string) => {
      
        if (!id) throw new Error("ID não informado.");

        const user = await prisma.user.findUnique({
            where: { id: id },
        });

        if (!user) throw new Error("Esse user não existe.");

        return user;
    };

    
    put = async (id: string, data: { name: string }) => {
        if (!id) throw new Error("ID não informado.");
        if (!data || !data.name) throw new Error("Dados não informados.");

        const user = await prisma.user.findUnique({
            where: { id: id }
        });

        if (!user) throw new Error("Esse user não existe.");

        return await prisma.user.update({
            where: { id: id},
            data
        });
  
    };

    delete = async (id: string) => {
        if (!id) throw new Error("ID não informado.");

        const user = await prisma.user.findUnique({
            where: { id: id }
        });

        if (!user) throw new Error("Esse user não existe.");

        return await prisma.user.delete({
            where: { id: id }
        });
    }

};


export default ServiceUser;