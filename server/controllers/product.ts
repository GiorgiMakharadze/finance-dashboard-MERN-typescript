import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Product from "../models/Product";
import { NotFoundError } from "../errors";

export const getProduct = async (req: Request, res: Response) => {
  const products = await Product.find();
  if (!products) {
    throw new NotFoundError("Can't find data");
  }

  res.status(StatusCodes.OK).json(products);
};
