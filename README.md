# Uso de date-fns

![](https://raw.githubusercontent.com/Angelozam17/challenge-javascript-12/master/src/assets/test.png)


La manipulación de fechas en JS puede ser compleja usando la lib de date-dns hace que sea más facíl.

# RETO 1

Crear una función que retorne un array de filtros con base a una fecha, debe contener:

- Últimos 7 días.
- Últimos 28 días.
- Últimos 90 días.
- Últimos 365 días.
- Filtros de los últimos 3 años.
- Filtros de los últimos 3 meses.

Ejemplo: (con base en `new Date(2020,0,1)` como fecha de entrada)

```js
[
  {
    label: 'Últimos 7 días',
    startAt: '2019/12/25',
    endAt: '2020/01/01'
  },
  {
    label: 'Últimos 28 días',
    startAt: '2019/12/04',
    endAt: '2020/01/01'
  },
  {
    label: 'Últimos 90 días',
    startAt: '2019/10/03',
    endAt: '2020/01/01'
  },
  {
    label: 'Últimos 365 días',
    startAt: '2019/01/01',
    endAt: '2020/01/01'
  },
  { label: '2019', startAt: '2019/01/01', endAt: '2019/12/31' },
  { label: '2018', startAt: '2018/01/01', endAt: '2018/12/31' },
  { label: '2017', startAt: '2017/01/01', endAt: '2017/12/31' },
  { label: 'diciembre', startAt: '2019/12/01', endAt: '2019/12/31' },
  { label: 'noviembre', startAt: '2019/11/01', endAt: '2019/11/30' },
  { label: 'octubre', startAt: '2019/10/01', endAt: '2019/10/31' }
]
```

## Pasos

1. Editar el archivo filter.js
1. Construir los filtros en el método `makeFilter`


### Instalación
```
npm install
```

### test
```
npm run test
```

### Enviar solución de reto
Debes hacer un "Fork" de este proyecto, revolver los problemas y crear un Pull Request hacia este repositorio.

### Licencia
challenge-javascript-08 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).

