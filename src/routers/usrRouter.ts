import { Router } from "express";
import { validateSchemas } from "../middlewares/validateSchemas.js";
import { signupJoiSchema } from "../schemas/usrSchemas.js";
import * as usrController from './../controllers/usrController.js'

const usrRouter = Router();

usrRouter.post("/signup",
  // validateSchemas(signupJoiSchema),
  usrController.create
)

usrRouter.get("/test", () =>{ console.log("test")})

export default usrRouter