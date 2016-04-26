# Ejercicio 31

Introducción a MongoDB

1. Asegurarse que MongoDB esté instalado
2. Abrir una consola de comandos y navegar hasta la carpeta de instalación.
 ```
 cd \
 cd C:\Program Files\MongoDB\Server\3.2\bin
 ```
3. Asegurarnos de crear la carpeta de datos con el comando
  ```
  md c:\data\db
  ```

4. Iniciar el servicio mongod
    ```
    mongod
    ```    
    El resultado debería ser ...
    ```
    2016-04-26T10:31:21.529-0300 I JOURNAL  [initandlisten] journal dir=c:\data\db\journal
    ...
    2016-04-26T10:31:22.128-0300 I NETWORK  [initandlisten] waiting for connections on port 27017
    ```
5. Dejar la consola abierta
6. Abrimos otra consola y volvemos a navegar a la carpeta de instalacion para luego ejecutar el cliente mongo
  ```
  cd \
  cd C:\Program Files\MongoDB\Server\3.2\bin
  mongo  
  ```
  El resultado debería ser ...
  ```
  MongoDB shell version: 3.0.5
  connecting to: test
  >
  ```
7. También dejemos esta consola abierta
