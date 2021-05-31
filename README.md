# Simon Game with typescript

A simple Simon game

## Installation

Clone the project:

```bash
git clone https://github.com/GermainMichaud/simon-ts
cd ./simon-ts
```

Install dependencies:

```bash
yarn
```

or

```bash
npm i
```

## Compile Typescript file(s)

You need to install [typescript](https://github.com/Microsoft/TypeScript):

```bash
yarn add global typescript
```

or

```bash
npm i -g typescript
```

Then:

```bash
tsc ts/app.ts --outFile "./app.js"
```

or with VSCode:

```
Ctrl+Shift+B
# Then select:
tsc: build - tsconfig.json

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
