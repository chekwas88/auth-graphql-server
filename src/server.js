import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';
import {verifyToken} from './utils.js/tokenHandler'


dotenv.config();

const server = new ApolloServer({
    
  typeDefs,
  resolvers,
  context({req}) {
    const token = req.headers.authorization || "";
    // check for token first and validate/verify token in utils
    if (token && verifyToken(token)) {
        const user = jwt.decode(token);

        return {
            authToken: token,
            currentUser: user,
            models
        }
    }

    return {models}
  },
  introspection: true,
  playground: true,
   
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@ds247377.mlab.com:47377/jake_cake`)
    console.log(`🚀 Server ready at ${url}`);
})
