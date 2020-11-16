# DNA MUTATION
Este es una función desarrollado en JavaScript mediante Node.js que determina si una persona tiene mutaciones genéticas basándose en una secuencia de ADN.

Una secuencia de ADN con mutaciones geneticas es aquella que tiene más de una secuencia de cuatro letras iguales de forma oblicua, horizontal o vertical.
**Sin Mutación**
| A | T | G | C | G | A |
| - | - | - | - | - | - |
| C | A | G | T | G | C |
| T | T | A | T | T | T |
| A | G | A | C | G | G |
| G | C | G | T | C | A |
| T | C | A | C | T | G |

**Con Mutación**
| A | T | G | C | G | A |
| - | - | - | - | - | - |
| C | A | G | T | G | C |
| T | T | A | T | C | T |
| A | G | A | C | G | G |
| C | C | C | C | T | A |
| T | C | A | C | T | G |

## Instalación

Puedes clonarlo desde el repositorio en Github o GitLab, aunque se recomienta utilizar un gestor de dependencias como [npm](https://www.npmjs.com/package/dna-mutation):

```sh
$ npm i dna-mutation
```

## Uso

Para utilizarlo hay que importar desde `dna-mutation` la función `hasMutation`, que es el nombre recomendado, la cual recibe un arreglo de cadenas de caracteres, el cual representa la secuencia de ADN de una persona.

```js
const hasMutation = require('dna-mutation');
```

Las secuencias de ADN tienen que tener el siguiente formato.
```js
const adn1 = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG']
const adn2 = ['ATGCGA', 'CAGTGC', 'TTATCT', 'AGACGG', 'CCCCTA', 'TCACTG']
```

La función se tiene que ejecutar en una estructura `trycatch`

```js
try {
  console.log(hasMutation(adn1)) // False
  console.log(hasMutation(adn2)) // True
} catch(err) {
  console.error(err.message)
}
```

Es importante mencionar que las cadenas de carácteres solo puede contener las letras `A`, `T`, `C` y `G`, en caso de tener alguna diferente la función mostrara un error:

```sh
Hay un caracter invalido, solo se permiten los siguientes caracteres: A, T, C, G
```

### Autor

**Héctor Rubí**

* [GitHub Profile](https://github.com/HectorRubi)
* [GitLab Profile](https://gitlab.com/HectorRubi)
* [LinkedIn Profile](https://linkedin.com/in/hector-rubi-garcia)
* [Twitter Profile](https://twitter.com/HectorRubiDev)

### License

Released under the [MIT License](LICENSE).