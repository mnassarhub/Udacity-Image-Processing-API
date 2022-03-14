# Udacity Image Processing API

## Description

This API can be used as a placeholder that allows you to resize an image's width and height based on url parameters.

### Project build depended on

1. [TypeScript] (https://www.typescriptlang.org/docs/)
2. [Node.JS] (https://nodejs.org/dist/latest-v16.x/docs/api/)
3. [Express] (https://expressjs.com/)
4. [fs-extra] (https://www.npmjs.com/package/fs-extra)
5. [Sharp] (https://www.npmjs.com/package/sharp)

### For Fixing and Formatting Code

1. [ESLint] (https://eslint.org/docs/user-guide/getting-started)
2. [Prettier] (https://prettier.io/docs/en/index.html)

### For Unit testing

1. [Jasmine] (https://jasmine.github.io/)
2. [supertest] (https://www.npmjs.com/package/supertest)

**Project Structure.**

```
images
node_modules
resizedImages
spec
    support
        jasmine.json
src
    appFunction
        app.ts
        getMetaData.ts
        resizeFunction.ts
    Routes
        router.ts
    tests
        helpers
            reporter.ts
        app.Spec.ts
        getMetaData.Spec.ts
        resizeFunction.Spec.ts
        server.Spec.ts
    server.ts
.eslintrc.js
.prettierignore
.prettierrrc
LICENSE.txt
package-lock.json
pachage.json
README.md
tsconfig.json
```

## Project Setup Instruction

Install npm in your computer, if you have node installed then most likely you have npm.

# Initialize The project

## start the server

1. Install all dependencies
   `npm install`

2. Build the project from TypeScript to JavaScript
   `npm run build`

3. Start the Server
   `npm start`

### The server will start on port: the user environment port, or the default host is on: http://localhost:3000.

4. Run the Tests
   `npm run test`

5. Run Prettier and ESLint
   `npm run prettier`
   `npm run lint`

# Functionality and Endpoints

1. Homepage Endpoint
   `http://localhost:3000/`

2. Resizing Endpoint
   `/api/imageResize?name={image-name}width=<image-width>&height=<image-height>`

3. API main Endpoint
   `/api`

---

## License

[License](LICENSE.txt)

### Mohamed Nassar Mohamed
