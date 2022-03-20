// const { sign, verify } = require("jsonwebtoken");
import { sign, verify } from "jsonwebtoken";

const createToken = (userid: number) => {
  // use username instead here
  let secret: string;
  let accessToken: any;
  if (process.env.SECRET_KEY) {
    secret = process.env.SECRET_KEY;
    accessToken = sign({ id: userid }, secret, {
      algorithm: "HS256",
      expiresIn: "7d",
    });
  } else {
    throw new Error("secret environment variable is not set");
  }

  return accessToken;
};

const validateToken = (req: any, res: any, next: Function) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken)
    return res.status(400).json({ error: "User forbidden, please log in" });

  try {
    const validToken = verify(accessToken, "examplesecretchangethis");
    if (validToken) {
      req.authenticated = true;
      next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

export { createToken, validateToken };
