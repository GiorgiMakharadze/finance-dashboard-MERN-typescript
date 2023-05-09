import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import KPI from "../models/KPI";
import { NotFoundError } from "../errors";

export const getKpi = async (req: Request, res: Response) => {
  const kpis = await KPI.find();
  if (!kpis) {
    throw new NotFoundError("Can't find data");
  }

  res.status(StatusCodes.OK).json(kpis);
};
