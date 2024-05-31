# ¿Que es una API?
Conjunto de funciones y procedimientos que cumplen una o muchas funciones con el fin de ser utilizadas por otro software
Aplication Programming Interfaces

Ejemplos:

-File System API
    -WriteFileSync
    -



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
