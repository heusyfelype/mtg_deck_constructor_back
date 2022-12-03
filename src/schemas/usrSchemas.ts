import { user } from "@prisma/client";
import Joi from "joi";

export const signupJoiSchema = Joi.object<user>({
  email: Joi.string().email().required(),
  name: Joi.string().required()
})