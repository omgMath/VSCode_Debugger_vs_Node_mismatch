# VS Code debugger / Node.js mismatch
The purpose of the repository is to show different behavior of the same program when run directly by Node.js or when run in the VS Code debugger.


## Setup
This setup assumes you have a recent version of `Node.js`, `npm` and `typescript` installed.

```
cd core
npm i
tsc
cd ..

cd project
npm i
tsc
cd ..

cd plugin
npm i
tsc
cd ..
```

## Current behavior

### Running with pure node
```
cd plugin
node ./build/Main.js
```
prints `[ 1 ]`.

### Running with VS Code debugger
Prints `[]`.

## Expected behavior
To be honest, I'm not sure, which one is the correct output, but I would expect them to be the same.

