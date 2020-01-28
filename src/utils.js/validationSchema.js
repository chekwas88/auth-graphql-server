import Joi from 'joi';

export const nameSchema = {
  name: Joi
    .string()
    .required()
    .regex(/^[a-zA-Z]+$/),
};
export const addressSchema = {
  address: Joi
    .string().required()
};
export const emailSchema = {
  email: Joi.string().email().required().trim(),
};
export const passwordSchema = {
  password: Joi.string().required().min(6).trim(),
};
export const securityQuestionSchema = {
    securityQuestion: Joi.string().required(),
}
export const securityAnswerSchema = {
    securityAnswer: Joi.string().required(),
}
export const DoBSchema = {
    DoB: Joi.string().required(),
}

export const phoneSchema = {
  phone: Joi.string().required(),
};
export const photoSchema = {
    photo: Joi.string(),
}
