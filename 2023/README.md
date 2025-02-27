taken tutorial from

https://www.typescripttutorial.net

To install the TypeScript compiler, you launch the Terminal on macOS or Linux and Command Prompt on Windows and type the following command:

npm install -g typescript

After the installation, you can type the following command to check the current version of the TypeScript compiler:

tsc --v

To install the ts-node module globally, you run the following command from the Terminal on macOS and Linux or Command Prompt on Windows:

npm install -g ts-node

to compile the typescript (app.ts) file:

tsc app.ts

To run the app.js file in node.js, you use the following command:

node app.js

If you installed the ts-node module mentioned in the setting up TypeScript development environment, you can use just one command to compile the TypeScript file and execute the output file at one shot:

ts-node app.ts
