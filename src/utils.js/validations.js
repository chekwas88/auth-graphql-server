import Joi from 'joi';
import {
    addressSchema,
    passwordSchema,
    phoneSchema,
    photoSchema,
    nameSchema,
    DoBSchema,
    emailSchema,
    securityAnswerSchema,
    securityQuestionSchema
} from './validationSchema'
export const signUpValidation = (input) => {
    const nameResult = Joi.validate({ name: input.name }, nameSchema);
    const addressResult = Joi.validate({ address: input.address }, addressSchema);
    const emailResult = Joi.validate({ email: input.email }, emailSchema);
    const passwordResult = Joi.validate({ password: input.password }, passwordSchema);
    const phoneResult = Joi.validate({ phone: input.phone }, phoneSchema);
    const photoResult = Joi.validate({ photo: input.photo }, photoSchema);
    const secQuestionResult = Joi.validate({ securityQuestion: input.securityQuestion }, securityQuestionSchema);
    const secAnswerResult = Joi.validate({ securityAnswer: input.securityAnswer }, securityAnswerSchema);
    const DoBResult = Joi.validate({ DoB: input.DoB }, DoBSchema);
    const errors = {};
    if (nameResult.error !== null) {
      errors.firstName = 'name should not be empty';
    }

    if (addressResult.error !== null) {
      errors.address = 'address should be a string';
    }

    if (photoResult.error !== null) {
        errors.photo = 'photo should be a url string';
    }

    if (secAnswerResult.error !== null) {
        errors.securityQuestion = 'secutiy Answer should not be empty';
    }
    if (DoBResult.error !== null) {
        errors.address = 'your date of birth should be of type string';
    }
    if (secQuestionResult.error !== null) {
        errors.securityQuestion = 'secutiy question should not be empty';
    }

    if (emailResult.error !== null) {
      errors.email = 'Email should not be empty and should be a valid email type';
    }
    if (passwordResult.error !== null) {
      errors.password = 'Password should not be empty and should have minimum of 6 characters';
    }
    if (phoneResult.error !== null) {
      errors.phone = 'phone number should be of type string';
    }
    return errors;
}

export const loginValidation = (input) => {
    const emailResult = Joi.validate({ email: input.email }, emailSchema);
    const passwordResult = Joi.validate({ password: input.password }, passwordSchema);
    const errors = {};
    if (emailResult.error !== null) {
        errors.email = 'Email should not be empty and should be a valid email type';
    }
    if (passwordResult.error !== null) {
    errors.password = 'Password should not be empty and should have minimum of 6 characters';
    }
    return errors;
}

