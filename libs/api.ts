///////////////////// APLICANDO O CONCEITO DRY NA API //////////////

import prisma from "./prisma";

export default {
  getAllUsers: async (page: number) => {
    // Items per page
    let take = 3;

    // offset of items
    let skip = 0;
    if (page) {
      skip = (page - 1) * take;
    }


    const users = await prisma.user.findMany({
      skip: skip, //Pula os primeiros itens
      take: take, // Pega os itens seguintes
      where: {
        active: true
      },
      select: {
        id: true,
        name: true,
        email: true
      },
      orderBy: [
        { id: 'asc' }
      ]
    });
    return users;
  },
  addUsers: async (name: string, email: string) => {
    return await prisma.user.create({
      data: { name, email }
    });
  }

}