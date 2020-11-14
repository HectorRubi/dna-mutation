# dna-mutation
Encuentra las mutaciones en el ADN de una persona.

> Retorna true si encuentra más de una secuencia de cuatro letras iguales, de forma oblicua, horizontal o vertical


## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i dna-mutation
```

## Usage

Utiliza un Array de Strings, además de que cada string solo puede tener los carácteres A, T, C ó G.
Es importante que la función sea utilizada dentro de un trycatch.

```js
const hasMutation = require('dna-mutation');

const adn1 = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG']
const adn2 = ['ATGCGA', 'CAGTGC', 'TTATCT', 'AGACGG', 'CCCCTA', 'TCACTG']

try {
  console.log(hasMutation(adn1)) // False
  console.log(hasMutation(adn2)) // True
} catch(err) {
  console.error(err.message)
}

```

## About

<details>
<summary><strong>Errores</strong></summary>
La función lanza errores cuando:

* La secuencia genetica tiene caracteres diferentes a los definidos


</details>

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 10 | [HectorRubi](https://github.com/HectorRubi) |

### Author

**Héctor Rubí**

* [LinkedIn Profile](https://linkedin.com/in/hector-rubi-garcia)
* [GitHub Profile](https://github.com/HectorRubi)
* [Twitter Profile](https://twitter.com/HectorRubiDev)

### License

Released under the [MIT License](LICENSE).

***