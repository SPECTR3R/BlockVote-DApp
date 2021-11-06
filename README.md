# Blockvote - DApp

==================

[Contrato Inteligente] escrito en [AssemblyScript] para un sistema de votación.

El objetivo de esta aplicación es crear un sistema de votación simple y seguro. Se usa NEAR como plataforma de blockchain, desde la cual se emiten los votos.

## Inicio Rápido

===========

Antes de compilar el código, necesitarás instalar [Node.js] ≥ 12

Instalar yarn vía npm: `npm install --global yarn` de otra forma visita [yarn documentation].

Visita [Justinmind] para probar la aplicacióto o instala ´Justinmind` desde tu celular.

## Ejecutando las pruebas ⚙️

==================

1. Tests: El código de pruebas se encuentra en `../assembly/__tests__/main.spec.ts`.
2. Primero compila el código con `yarn asb`.
3. Después ejecuta `yarn test` para correr los tests. Esto corre las pruebas estándar de AssemblyScript tests usando [as-pect].

### Analizando las pruebas 🔩

1. Se verifica primero que nadie haya votando por la 'Planilla Verde'.
2. Se extrae la cantidad de votos de 'Planilla Verde' y se aumentan los votos en una unidad.
3. Se verifica que el usuario 'Juan' ya ha votado o no.

## Despliegue 📦

1. Desde la raíz del proyecto, deployar el paquete con `near dev-deploy build/release/votescontract.wasm`.
2. Copiar el acconutID y sustituirlo en los siguientes comandos para probar el funcionamiento de los contratos.

´´´bash
near call <acconutID> incrementVotes '{"candidate":"amlo"}' --account-id <acconutID>
near view <acconutID> getVotes '{"candidate":"amlo"}' --account-id <acconutID>
near call <acconutID> recordUser '{"user":"jorge"}' --account-id <acconutID>
near view <acconutID> userDidParticipate '{"user":"jorge"}' --account-id <acconutID>
´´´

## Autores ✒️

Armando del Río
Luis Yañez
Jorge Chavarín

[contrato inteligente]: https://docs.near.org/docs/develop/contracts/overview
[assemblyscript]: https://www.assemblyscript.org/
[create-near-app]: https://github.com/near/create-near-app
[node.js]: https://nodejs.org/en/download/package-manager/
[as-pect]: https://www.npmjs.com/package/@as-pect/cli
[justinmind]: https://www.justinmind.com/usernote/tests/68299055/68299921/68299923/index.html
[yarn documentation]: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
