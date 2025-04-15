import { NextFunction, Request, Response } from "express";
import { logger } from "../logger/logger";
import {admin} from "../config/firebaseAdmin.config"

declare global {
  namespace Express {
    interface Request {
      user?: admin.auth.DecodedIdToken;
    }
  }
}

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("Entered isLoggedIn");
  const token = req.headers.authorization;
  if (!token) {
    logger.info("Unauthorized");
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    console.log("tokenn",token.split(" ")[1])
    const decodedToken = await admin.auth().verifyIdToken(token.split(" ")[1]);
    logger.info("Authentication Successful",decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    logger.error("Error verifying ID token:", error);
    res.status(401).json({ error: "Invalid token" });
  }
};
