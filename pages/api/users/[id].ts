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

import { NextApiHandler } from "next";
import { Users } from "../../../utils/users";

const handler: NextApiHandler = (req, res) => {
  console.log(req.query)
  const { id } = req.query;

  for (let i in Users) {
    if (Users[i].id.toString() === id) {
      res.json(Users[i]);
      return;
    }
  }

  res.json({ error: 'User not Found' });
}

export default handler;