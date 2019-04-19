# require-extension-hooks-typescript

> Node.js require extension hook for TypeScript


## Install

```
$ npm install require-extension-hooks require-extension-hooks-typescript --save-dev
```


## Usage

```js
const hooks = require('require-extension-hooks');
hooks('ts').plugin('typescript');

const ts = require('./unicorn.ts');
```

## License

MIT © [Olivier Ligot](https://oligot.be)
