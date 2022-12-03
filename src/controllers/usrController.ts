import { user } from "@prisma/client";
import { Request, Response } from "express";

export async function create(req: Request, res: Response) {

  const infos: user = req.body
  console.log(infos);
  // await usrService.create(infos)

  res.sendStatus(201);
}

export async function test(req: Request, res: Response) {
  res.send("uma string qq")
}
