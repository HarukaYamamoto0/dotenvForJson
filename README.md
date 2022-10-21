## 💻 About the project
Being as simple as possible, this project is just a json file reader that sets the values for the `process.env` variable, I still intend to make it able to read other types of files.

## Installation
```shell
npm install @zafriel/dotenvforjson
# or
yarn add @zafriel/dotenvforjson 
```

## Use
```js
const loadJson = require("@zafriel/dotenvforjson");
loadJson(); // you can also pass the path optionally

console.log(process.env);
```
