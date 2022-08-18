// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";

// const handler: NextApiHandler = (req, res) => {
//   const { id } = req.query;

//   let myUser = null;

//   for (let i in Users) {
//     if (Users[i].id.toString() === id) {
//       myUser = Users[i];
//     }
//   }

//   if (myUser) {
//     res.json(myUser);
//   } else {
//     res.json({ error: 'User not found' });
//   }
// }

// export default handler;


////////////// CRIANDO UMA API DINAMICA ////////////

// import { NextApiHandler } from "next";
// import { Users } from "../../../utils/users";

// const handler: NextApiHandler = (req, res) => {
//   console.log(req.query)
//   const { id } = req.query;

//   for (let i in Users) {
//     if (Users[i].id.toString() === id) {
//       res.json(Users[i]);
//       return;
//     }
//   }

//   res.json({ error: 'User not Found' });
// }

// export default handler;

////////////// PRISMA SELECIONANDO DADOS 2 ///////////////////


// import { NextApiHandler } from "next";
// import prisma from "../../../libs/prisma";

// const handler: NextApiHandler = async (req, res) => {
//   const { id } = req.query;

//   const user = await prisma.user.findFirst({
//     where: {
//       id: parseInt(id as string),
//       active: true
//     }
//   });

//   if (user) {
//     res.json({ status: true, user: user });
//     return;
//   }
//   res.json({ error: 'User not Found' });
// }

// export default handler;


///////////// PRISMA:ALTERANDO DADOS 1 /////////////////

// import { NextApiHandler } from "next";
// import prisma from "../../../libs/prisma";

// // Reading user info
// const handlerGet: NextApiHandler = async (req, res) => {
//   const { id } = req.query;

//   const user = await prisma.user.findFirst({
//     where: {
//       id: parseInt(id as string),
//       active: true
//     }
//   });

//   if (user) {
//     res.json({ status: true, user: user });
//     return;
//   }
//   res.json({ error: 'User not Found' });
// }

// const handlerPut: NextApiHandler = async (req, res) => {
//   const { name, active } = req.body;
//   const { id } = req.query;

//   const updatedUser = await prisma.user.update({
//     where: {
//       id: parseInt(id as string)
//     },
//     data: {
//       name: name,
//       active: active === 'true' ? true : false
//     }
//   });

//   if (updatedUser) {
//     res.json({ status: true, user: updatedUser });
//     return;
//   }

//   res.json({ error: 'Nao foi possivel alterar este usuario.' });

// }


// const handler: NextApiHandler = async (req, res) => {
//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;

//     case 'PUT':
//       handlerPut(req, res);
//       break;
//   }
// }

// export default handler;

//////////////// PRISMA: ALTERANDO DADOS 2 /////////////////////

// import { NextApiHandler } from "next";
// import prisma from "../../../libs/prisma";

// // Reading user info
// const handlerGet: NextApiHandler = async (req, res) => {
//   const { id } = req.query;

//   const user = await prisma.user.findFirst({
//     where: {
//       id: parseInt(id as string),
//       active: true
//     }
//   });

//   if (user) {
//     res.json({ status: true, user: user });
//     return;
//   }
//   res.json({ error: 'User not Found' });
// }

// const handlerPut: NextApiHandler = async (req, res) => {
//   const { name, active } = req.body;
//   const { id } = req.query;

//   let data: {
//     name?: string;
//     active?: boolean;
//   } = {};

//   if (name) {
//     data.name = name;
//   }
//   if (active) {
//     switch (active) {
//       case 'true':
//       case '1':
//         data.active = true;
//         break;
//       case 'false':
//       case '0':
//         data.active = false;
//         break;
//     }
//   }

//   const updatedUser = await prisma.user.update({
//     where: {
//       id: parseInt(id as string)
//     },
//     data: data
//   });

//   if (updatedUser) {
//     res.json({ status: true, user: updatedUser });
//     return;
//   }

//   res.json({ error: 'Nao foi possivel alterar este usuario.' });

// }


// const handler: NextApiHandler = async (req, res) => {
//   switch (req.method) {
//     case 'GET':
//       handlerGet(req, res);
//       break;

//     case 'PUT':
//       handlerPut(req, res);
//       break;
//   }
// }

// export default handler;

//////////// PRISMA: DELETANDO DADOS /////////////////

import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";

// Reading user info
const handlerGet: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(id as string),
      active: true
    }
  });

  if (user) {
    res.json({ status: true, user: user });
    return;
  }
  res.json({ error: 'User not Found' });
}

const handlerPut: NextApiHandler = async (req, res) => {
  const { name, active } = req.body;
  const { id } = req.query;

  let data: {
    name?: string;
    active?: boolean;
  } = {};

  if (name) {
    data.name = name;
  }
  if (active) {
    switch (active) {
      case 'true':
      case '1':
        data.active = true;
        break;
      case 'false':
      case '0':
        data.active = false;
        break;
    }
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: parseInt(id as string)
    },
    data: data
  });

  if (updatedUser) {
    res.json({ status: true, user: updatedUser });
    return;
  }

  res.json({ error: 'Nao foi possivel alterar este usuario.' });

}

const handlerDelete: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const deletedUser = await prisma.user.delete({
    where: {
      id: parseInt(id as string)
    }
  }).catch(() => {
    res.json({ error: 'Usuario nao encontrado' })
  })

  if (deletedUser) {
    res.json({ status: true });
  }
}


const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      handlerGet(req, res);
      break;

    case 'PUT':
      handlerPut(req, res);
      break;

    case 'DELETE':
      handlerDelete(req, res);
      break;
  }
}

export default handler;