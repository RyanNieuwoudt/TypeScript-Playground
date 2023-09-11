# TypeScript-Playground

[![GitHub license](https://img.shields.io/github/license/RyanNieuwoudt/TypeScript-Playground)](https://github.com/RyanNieuwoudt/TypeScript-Playground/blob/main/LICENSE)
[![Dependency Review](https://github.com/RyanNieuwoudt/TypeScript-Playground/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/RyanNieuwoudt/TypeScript-Playground/actions/workflows/dependency-review.yml)

## About

A persistent, offline, quasi-REPL for TypeScript that promotes coding with rapid feedback. Ideal for:

- Learning [TypeScript](https://www.typescriptlang.org) itself.
- Experimenting with [npm](https://www.npmjs.com) packages.
- Practising coding challenges.
- Demonstrating code.
- Building a '[functional core](https://duckduckgo.com/?q=functional+core%2C+imperative+shell&va=k&t=hc&ia=web)' independently of an '[imperative shell](https://duckduckgo.com/?q=functional+core%2C+imperative+shell&va=k&t=hc&ia=web)'.
- Modelling a [domain](https://duckduckgo.com/?q=domain+modelling&va=k&t=hc&ia=web), in isolation or interactively with a domain expert.

## See also

- For a [Node.js REPL](https://nodejs.dev/en/learn/how-to-use-the-nodejs-repl/), use the `node` command.
- For a [Bun REPL](https://bun.sh), use the `bun repl` command.
- For online environments consider the official [TypeScript Playground](https://www.typescriptlang.org/play) or another [online environment](https://duckduckgo.com/?va=k&t=hc&q=typescript+online&ia=web).
- For a "REPL as document" notebook, consider [Node.js Notebooks (REPL)](https://marketplace.visualstudio.com/items?itemName=donjayamanne.typescript-notebook).
- To share code snippets, consider [GitHub gist](https://gist.github.com).

## Getting started

### Get the code

Clone the repository:

```shell
git clone https://github.com/RyanNieuwoudt/TypeScript-Playground.git
```

Alternatively, [Open in Visual Studio Code](https://open.vscode.dev/RyanNieuwoudt/TypeScript-Playground) and select "Clone repo in container volume" for a supported environment.

### Install packages

The playground supports [npm](https://nodejs.org/), [yarn](https://yarnpkg.com) and [bun](https://bun.sh). From a terminal in the `TypeScript-Playground` directory:

```shell
npm install
```

or

```shell
yarn install
```

or

```shell
bun install
```

### Start the playground

```shell
npm run watch
```

or

```shell
yarn watch
```

or

```shell
bun watch run
```

## Usage

With the playground started:

1. Observe the output.
2. Save changes to the code.
3. Repeat.
