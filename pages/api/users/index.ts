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

import { NextApiHandler } from "next";
import { Users } from "../../../utils/users";
import prisma from "../../../libs/prisma";

// Getting all users
const handlerGet: NextApiHandler = async (req, res) => {
  const users = await prisma.user.findMany({
    where: {
      active: true
    }
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