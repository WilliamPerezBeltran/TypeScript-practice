import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { articles, users } from './data.js'; // Fake data
import fs from 'fs';

// Definir resolvers
const resolvers = {
    Query: {
        users: () => {
            return users.map(u => ({
                ...u,
                articles: articles.filter(a => a.author.id === u.id)
            }));
        },
        user: (obj, args) => {
            const user = users.find(u => u.id === args.id);
            if (user) {
                return {
                    ...user,
                    articles: articles.filter(a => a.author.id === user.id)
                };
            }
            return null;
        },
        articles: () => articles
    }
};

// console.log("===============")
// console.log(fs.readFileSync('./servidor/graphql/index.graphql', 'utf8'));

// Cargar el esquema GraphQL desde el archivo
const typeDefs = loadSchemaSync('./graphql/index.graphql', {
    loaders: [new GraphQLFileLoader()]
});

console.log("-------------------------");
console.log(typeDefs);
console.log(typeDefs);
console.log(typeDefs);
console.log(typeDefs);
console.log(typeDefs);
console.log("-------------------------")

// Crear el schema con los resolvers
const schema = addResolversToSchema({
    schema: typeDefs,
    resolvers
});

const app = express();
app.use(cors());

// Configurar el servidor GraphQL
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Tu servidor GraphQL está corriendo en http://localhost:4000/graphql');
});
