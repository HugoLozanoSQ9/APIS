# Koders APIv1 generation js 33
## javascript 33
This is a repo created during the backend module in [kodemia](https://kodemia.mx) owo

Lista desordenada 
- uno 
- dos 
- tres
    - cuatro
        - cinco

Lista ordenada

1. uno 
    - hola
    - adios
2. dos 
    - hola1
    - adios1

## How to run?

1. Install dependencies

```
$ npm install
```

2. Create an .env file with guide example.env

```
$ touch .env
```


3. to run in dev mode: 

```
$ npm run dev
```

4. to runin production mode

```
$ npm start
```

# ¿Que es una API?

Conjunto de funciones y procedimientos que cumplen un objetivo específico con el fin de ser utilizadas por otro software

Aplication Programming Interfaces

Ejemplos:

-File System API
    -WriteFileSync()
    -mkdir()
-DOM API
    -getElemetByID()
    -on('event')
    -Etc.
-Bootstrap

Ejemplos: 
-pokeapi
-spotify API
-Swapi
-Facebook API
-Rickandmortyapi

Las API's son interfaces que nos ayudan a comunicar un elemento A con un elemento B
inclusive ya sea elementos cerrados como una librería hasta servidores

# Que es REST y RESTFULL (tipos de APIS)

REST es una Arquitectura

Representational State Transfer

características:
-Un protocolo cliente / servidor sin estado (HTTP)
-Conjunto de operaciones bien definidas (GET, POST, DELETE)
-sintaxis universal (/recurso/indentificador)
-Uso de Hipermedia (HTML,XML,JSON)

Se denomina RESTful a un servicio que implementa REST

Estado: se refiere a la representación actual de un recurso en un determinado momento

REST = State less (el servidor NO guarda información)

Ninguna petición esta conectada con otra petición

RESTful se le denomina a un servicio que sigue 100% las características REST, si no las siguen al 100% entonces podrían ser REST like o solo REST


## Ejemplo 

Una escuela, ingresas a la escuela, te piden una identificación --> ingresas y haces lo que quieras dentro de la escuela, pero si sales solo un moemento, entonces vas a tener que identificarte nuevamente con el vigilante.

# Clean architecture:

Arquitectura limpia

Capa externa: Devices - Web - UI - External interfaces - DB 
Capa penultima externa: Gateways - Presenters - Controllers
Capa semi-core: Use Cases
Core: Entities

Solo se pueden comunicar las capas de afuera hacia adentro, de igual forma no pueden comunicarse de forma directa entre si más de 2 niveles, por ejemplo: 
la capa web no puede comunicarse directo con los casos de uso. (saltandose la penultima capa externa)

Esto para que si se desea realizar algún cambio dentro de alguna cap

También existe la arquitectura exagonál 

## Estructura

.
    index.js
    package-lock.json
    package.json
    src
        lib
        models
        routes
            generations.router.js
            koders.router.js
            mentors.router.js
        server.js
        usecases
    
# Installed

npm init -y
npm install express mongoose dotenv

npm install http-errors (sirve para levantar errores)
npm install bcryptjs (sirve para cifrar contraseñas)
npm install jsonwebtoken (sirve para las autenticaciones)
npm install cors