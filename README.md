## 💻 Sobre o projeto
Sendo o mais simples possível, esse projeto é apenas um leitor de arquivos json que seta os valores para a variável `process.env`, ainda pretendo fazer que ele consiga ler outros tipos de arquivos

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
