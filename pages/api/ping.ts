// import { NextApiHandler } from "next";
// import { users } from "../../../mock/users-mock";

// type User = {
// name: string;
// age: number;
// };

// const handler: NextApiHandler<User> = (req, res) => {
// const { id } = req.query;

// const user = users.find((user) => id === user.id.toString());
// res.json(user as User);
// };

// export default handler;


import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {

  res.json({ pong: true })
}

export default handler;