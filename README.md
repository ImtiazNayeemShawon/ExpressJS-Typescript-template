
### ExpressJS+Typescript server template

```markdown

ExpressTSserver is a simple template for building an Express.js server with TypeScript.
It includes basic setup and dependencies to help you get started quickly.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/ImtiazNayeemShawon/ExpressJS-Typescript-template.git
cd ExpressJS-Typescript-template
npm install
```

## Usage

### Development

To start the server in development mode with TypeScript compilation and file watching:

```bash
npm run dev
```

This command runs TypeScript in watch mode and starts the server using `nodemon` to automatically restart on changes.

### Production

To build the TypeScript files and start the server:

```bash
npm run build
npm start
```

This will compile the TypeScript files into JavaScript and start the server from the `dist` folder.

## Scripts

- **`npm run dev`**: Compiles TypeScript files and starts the server in watch mode for development.
- **`npm run build`**: Compiles TypeScript files into JavaScript in the `dist` directory.
- **`npm start`**: Runs the compiled JavaScript server.

## Dependencies

- **`dotenv`**: Environment variable management.
- **`express`**: Web framework for Node.js.
- **`mongoose`**: MongoDB object modeling tool.

## DevDependencies

- **`@types/express`**: Type definitions for Express.js.
- **`@types/node`**: Type definitions for Node.js.
- **`typescript`**: TypeScript language support.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC License.

## Author

Imtiaz Nayeem Shawon - Founder @zipbox
