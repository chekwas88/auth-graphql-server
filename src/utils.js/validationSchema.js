import Joi from "joi";

export const nameSchema = {
  name: Joi.string().required(),
};
export const addressSchema = {
  address: Joi.string().required(),
};
export const emailSchema = {
  email: Joi.string().email().required().trim(),
};
export const passwordSchema = {
  password: Joi.string().required().min(6).trim(),
};
export const securityQuestionSchema = {
  securityQuestion: Joi.string().required(),
};
export const securityAnswerSchema = {
  securityAnswer: Joi.string().required(),
};

export const phoneSchema = {
  phone: Joi.string().required(),
};
export const photoSchema = {
  photo: Joi.string(),
};
