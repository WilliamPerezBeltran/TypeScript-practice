import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

/* Import fake data */
import { articles, users } from './data.js';

const resolvers = {
    Query: {
        users: () => {
            return users.map(u => ({
                ...u,
                articles: articles.filter(a => a.author.id === u.id)
            }));
        },
        user: (obj, args) => {
            const user = users.find(u => u.id === args.userId);
            if (user) {
                return {
                    ...user,
                    articles: articles.filter(a => a.author.id === args.userId)
                };
            }
            return null;
        },
        articles: () => articles
    }
};

// Load GraphQL schema
const typeDefs = loadSchemaSync('./graphql/index.graphql', {
    loaders: [new GraphQLFileLoader()]
});

// Associate types with resolvers
const schema = addResolversToSchema({
    schema: typeDefs,
    resolvers,
});

const app = express();
app.use(cors());

// Setup GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Tu servidor GraphQL está corriendo en http://localhost:${PORT}/graphql`);
});
