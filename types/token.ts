import { JWTPayload } from "jose";
export type TokenPayload = JWTPayload & {
    user: {
      code: string;
    };
    expires: Date;
  };