// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";

// const handler: NextApiHandler = (req, res) => {
//   res.json(Users);
// }

// export default handler;

////////////// Lidando com métodos diferentes ////////////

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";

// const handlerGet: NextApiHandler = async (req, res) => {
//   res.json(Users);
// }

// const handlerPost: NextApiHandler = async (req, res) => {
//   res.json({ status: true });
// }


// const handler: NextApiHandler = (req, res) => {

//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;
//     case 'POST':
//       handlerPost(req, res);
//       break;

//   }

// }

// export default handler;

///////////////// RECEBENDO DADOS DA API ////////////////////

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";

// const handlerGet: NextApiHandler = async (req, res) => {
//   // const { search, age } = req.query;

//   // console.log(req.query)

//   res.json(Users);
// }

// const handlerPost: NextApiHandler = async (req, res) => {
//   // const { search, age } = req.query;
//   // console.log(req.query)
//   // console.log(req.body);
//   // const { resultado, exemplo } = req.body; //Quando recebo os dados atraves do corpo da requisicao

//   // console.log("Resultado", resultado);
//   // console.log("Exemplo", exemplo)
//   // console.log("SEr", search)

//   const { name, age } = req.body;

//   res.json({ status: true, user: { name, age } });


//   // res.json({ status: true });
// }


// const handler: NextApiHandler = (req, res) => {

//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;
//     case 'POST':
//       handlerPost(req, res);
//       break;

//   }

// }

// export default handler;

///////////////////// Status de retorno da API /////////////////


// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";

// Getting all users
// const handlerGet: NextApiHandler = async (req, res) => {
//   const { search, age } = req.query;

//   // console.log(req.query)

//   res.status(200).json(Users);
// }

// Inserting new user
// const handlerPost: NextApiHandler = async (req, res) => {
//   // const { search, age } = req.query;
//   // console.log(req.query)
//   // console.log(req.body);
//   // const { resultado, exemplo } = req.body; //Quando recebo os dados atraves do corpo da requisicao

//   // console.log("Resultado", resultado);
//   // console.log("Exemplo", exemplo)
//   // console.log("SEr", search)

//   const { name, age } = req.body;

//   res.status(201).json({ status: true, user: { name, age } });


//   // res.json({ status: true });
// }


// const handler: NextApiHandler = (req, res) => {

//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;
//     case 'POST':
//       handlerPost(req, res);
//       break;

//   }

// }

// export default handler;

//////////////// PRISMA CLIENT: INSERINDO DADOS ///////////////

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";
// import prisma from "../../../libs/prisma";

// // Getting all users
// const handlerGet: NextApiHandler = async (req, res) => {
//   const { search, age } = req.query;
//   res.status(200).json(Users);
// }

// // Inserting new user
// const handlerPost: NextApiHandler = async (req, res) => {
//   const { name, email } = req.body;

//   const newUser = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//     }
//   });

//   res.status(201).json({ status: true, user: newUser });

// }


// const handler: NextApiHandler = (req, res) => {

//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;
//     case 'POST':
//       handlerPost(req, res);
//       break;

//   }

// }

// export default handler;

///////////////// PRISMA: SELECIONANDO DADOS //////////////////////

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";
// import prisma from "../../../libs/prisma";

// // Getting all users
// const handlerGet: NextApiHandler = async (req, res) => {
//   const users = await prisma.user.findMany({
//     where: {
//       // likeCount: { gt: 10 } //gt = greater than, gte = greater than or equal, lt= lower than, lte = lower than or equal
//       active: true
//     }
//   });
//   res.json({ status: true, users });
// }

// // Inserting new user
// const handlerPost: NextApiHandler = async (req, res) => {
//   const { name, email } = req.body;

//   const newUser = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//     }
//   });

//   res.status(201).json({ status: true, user: newUser });

// }


// const handler: NextApiHandler = (req, res) => {

//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;
//     case 'POST':
//       handlerPost(req, res);
//       break;

//   }

// }

// export default handler;

///////////// PRISMA: SELECIONANDO CAMPOS ///////////////////////

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";
// import prisma from "../../../libs/prisma";

// // Getting all users
// const handlerGet: NextApiHandler = async (req, res) => {
//   const users = await prisma.user.findMany({
//     where: {
//       active: true
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true
//     }
//   });
//   res.json({ status: true, users });
// }

// // Inserting new user 
// const handlerPost: NextApiHandler = async (req, res) => {
//   const { name, email } = req.body;

//   const newUser = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//     }
//   });

//   res.status(201).json({ status: true, user: newUser });

// }


// const handler: NextApiHandler = (req, res) => {

//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;
//     case 'POST':
//       handlerPost(req, res);
//       break;

//   }

// }

// export default handler;

/////////////// PRISMA: FILTRO DE DADOS /////////////////

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";
// import prisma from "../../../libs/prisma";

// // Getting all users
// const handlerGet: NextApiHandler = async (req, res) => {
//   const users = await prisma.user.findMany({
//     where: {
//       // name: 'Assuntinha'
//       // name: {
//       //   // startsWith: 'A',
//       //   // endsWith: 'a'
//       // }
//       OR: [
//         { name: 'Assuntinha' },
//         { name: { startsWith: 'J' } }
//       ]
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true
//     }
//   });
//   res.json({ status: true, users });
// }

// // Inserting new user 
// const handlerPost: NextApiHandler = async (req, res) => {
//   const { name, email } = req.body;

//   const newUser = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//     }
//   });

//   res.status(201).json({ status: true, user: newUser });

// }


// const handler: NextApiHandler = (req, res) => {

//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;
//     case 'POST':
//       handlerPost(req, res);
//       break;

//   }

// }

// export default handler;

//////// PRISMA: ORDENANDO DADOS ////////////////

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";
// import prisma from "../../../libs/prisma";

// // Getting all users
// const handlerGet: NextApiHandler = async (req, res) => {
//   const users = await prisma.user.findMany({
//     where: {
//       active: true
//     },
//     select: {
//       id: true,
//       name: true,
//       email: true
//     },
//     // orderBy: {
//     //   name: 'asc',
//     // }
//     orderBy: [
//       { id: 'asc' },
//       { name: 'desc' }
//     ]
//   });
//   res.json({ status: true, users });
// }

// // Inserting new user 
// const handlerPost: NextApiHandler = async (req, res) => {
//   const { name, email } = req.body;

//   const newUser = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//     }
//   });

//   res.status(201).json({ status: true, user: newUser });

// }


// const handler: NextApiHandler = (req, res) => {

//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;
//     case 'POST':
//       handlerPost(req, res);
//       break;

//   }

// }

// export default handler;

///////////// Prisma: Paginacao /////////////////////

import { NextApiHandler } from "next";
import { Users } from "../../../utils/users";
import prisma from "../../../libs/prisma";

// Getting all users
const handlerGet: NextApiHandler = async (req, res) => {
  const { page } = req.query;

  // Items per page
  let take = 3;

  // offset of items
  let skip = 0;
  if (page) {
    skip = (parseInt(page as string) - 1) * take;
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
  res.json({ status: true, users });
}

// Inserting new user 
const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email } = req.body;

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
    }
  });

  res.status(201).json({ status: true, user: newUser });

}


const handler: NextApiHandler = (req, res) => {

  switch (req.method) {
    case 'GET':
      handlerGet(req, res);
      break;
    case 'POST':
      handlerPost(req, res);
      break;

  }

}

export default handler;