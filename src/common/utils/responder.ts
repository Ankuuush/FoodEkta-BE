import { Response } from "express";

const responder = {
  success: (res: Response, data: any, code: number) => {
    res.status(code || 200).json(data);
  },
  error: (res: Response, err: Error, code: number) => {
    res.status(code || 500).json(err);
  },
};

export default responder;
