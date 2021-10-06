import jwt from "jsonwebtoken";
import {
  AuthenticationError,
  UserInputError,
  ForbiddenError,
} from "apollo-server";
import { loginValidation, signUpValidation } from "./utils.js/validations";

module.exports = {
  Query: {
    profile: async (_, __, { models, currentUser }) => {
      try {
        if (!currentUser) {
          throw new AuthenticationError(
            "You are unauthorized to access this resource"
          );
        }
        const { id } = currentUser;
        const user = await models.User.findById(id);
        return user;
      } catch (e) {
        return e;
      }
    },
  },
  Mutation: {
    updateProfile: async (_, { input }, { models, currentUser }) => {
      try {
        if (!currentUser) {
          throw new AuthenticationError(
            "You are unauthorized to access this resource"
          );
        }
        const { id } = currentUser;
        await models.User.updateOne({ _id: id }, input);
        return {
          message: "update was successful",
        };
      } catch (e) {
        return e;
      }
    },
    signUp: async (_, { input }, { models }) => {
      const errors = signUpValidation(input);
      try {
        if (
          Object.entries(errors).length !== 0 &&
          errors.constructor === Object
        ) {
          throw new UserInputError("invalid input", {
            invalidInputs: errors,
          });
        }
        const registeredUser = await models.User.findOne({
          email: input.email,
        });
        if (registeredUser) {
          throw new ForbiddenError("Email already exits");
        }
        let user = await new models.User(input);
        await user.save();
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "1 day" }
        );

        const response = {
          id: user.id,
          token,
          email: user.email,
          name: user.name,
        };
        return response;
      } catch (e) {
        return e;
      }
    },
    login: async (_, { input }, { models }) => {
      const errors = loginValidation(input);
      try {
        if (
          Object.entries(errors).length !== 0 &&
          errors.constructor === Object
        ) {
          throw new UserInputError("invalid input", {
            invalidInputs: errors,
          });
        }
        let user = await models.User.findOne({
          email: input.email,
          password: input.password,
        });
        if (!user) {
          throw new Error("incorrect credential");
        }
        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.SECRET_KEY,
          { expiresIn: "1 day" }
        );
        const response = {
          id: user.id,
          token,
          email: user.email,
          name: user.name,
        };
        return response;
      } catch (e) {
        return e;
      }
    },
  },
};
