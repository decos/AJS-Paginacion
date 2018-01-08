# $watch y Paginacion del lado del servidor

## Paginacion del lado del servidor - Parte 1

1. Modificar el cotejamiento de la base de datos a `ut8_spanish_ci`

2. Ejecutar el script de base de datos `paises.sql` en la bd `universidad_db`

## Paginacion del lado del servidor - Parte 2

1. Modificar la configuracion de la conexion a la base de datos
    - host : localhost
    - user : root
    - pass :
    - db : universidad_db

2. Añadir al inicio `<?php` al fichero `class.Database.php`

## Paginación - Parte 3

1. Crear una tabla en el cuerpo de la vista principal del proyecto

2. Codear el fichero `servicios.js`
    - Consumir `php/servicios/paises.getPaises.php` haciendo uso del servicio `$http` 
