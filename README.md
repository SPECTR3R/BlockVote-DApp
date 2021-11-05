blockvote Smart Contract
==================

A [smart contract] written in [AssemblyScript] for a voting app.

The goal of this application is to create a simple and secure voting system. Se usa NEAR como plataforma de blockchain, desde la cual se emiten los votos.


Quick Start
===========

Before you compile this code, you will need to install [Node.js] ≥ 12

Visit  [Justinmind] to use the voting app or install ´Justinmind` on your phone.

Exploring The Code
==================

1. The main smart contract code lives in `assembly/index.ts`. You can compile
   it with the `./compile` script.
2. Tests: You can run smart contract tests with the `./test` script. This runs
   standard AssemblyScript tests using [as-pect].
3. In order to compile the code, first run `yarn asb`.
4. Run `yarn asp --init` to    


  [smart contract]: https://docs.near.org/docs/develop/contracts/overview
  [AssemblyScript]: https://www.assemblyscript.org/
  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [as-pect]: https://www.npmjs.com/package/@as-pect/cli
  [Justinmind]: https://www.justinmind.com/
