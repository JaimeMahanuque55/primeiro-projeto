/////// Login: Resolvendo problema dos dados 1 //////////

import { User } from "./User";

// extendendo o type USer
export type AuthUser = User & {
  role: string;
}