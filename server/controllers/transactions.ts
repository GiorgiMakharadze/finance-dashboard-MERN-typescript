import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Transaction from "../models/Transactions";
import { NotFoundError } from "../errors";

export const getTransaction = async (req: Request, res: Response) => {
  const transactions = await Transaction.find()
    .limit(50)
    .sort({ createdOn: -1 });
  if (!transactions) {
    throw new NotFoundError("Can't find data");
  }

  res.status(StatusCodes.OK).json(transactions);
};
