////////////// Login via API JWT: Protegendo as rotas /////

import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });

  // if (session) {
  //   res.json({ message: 'Voce tem acesso a esta rota.' })
  // } else {
  //   res.status(401).json({ message: 'Voce nao tem acesso.' })
  // }
  if (!session) {
    res.status(403).json({ message: 'Acesso negado' });
    return;
  }

  res.status(200).json({ message: 'Voce tem acesso a esta rota', session })
}

export default handler;
