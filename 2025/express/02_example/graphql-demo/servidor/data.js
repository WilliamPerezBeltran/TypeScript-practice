// // Mock data
// import {faker} from '@faker-js/faker'
// const userCreator = () => ({
//     name: faker.name.firstName(),
//     email: faker.internet.email(),
//     id: faker.datatype.uuid()
//   });


// const users = [...new Array(7)].map(() => userCreator())

// const articleCreator = () => ({
//     title: faker.lorem.words(5),
//     slug: faker.lorem.slug(),
//     content: faker.lorem.paragraphs(),
//     author: faker.helpers.arrayElements(users, 1)[0] // Relacion con User
// })

// const articles = [...new Array(7)].map(() => articleCreator())

// export {
//     articles,
//     users
// }





// Mock data
import { faker } from '@faker-js/faker';

const userCreator = () => ({
    name: faker.person.firstName(), // Usar person en vez de name
    email: faker.internet.email(),
    id: faker.string.uuid() // Nueva API para UUID
});

const users = Array.from({ length: 7 }, userCreator);

const articleCreator = () => ({
    title: faker.lorem.words(5),
    slug: faker.lorem.slug(),
    content: faker.lorem.paragraphs(),
    author: faker.helpers.arrayElement(users) // Relación con User
});

const articles = Array.from({ length: 7 }, articleCreator);

export { articles, users };
