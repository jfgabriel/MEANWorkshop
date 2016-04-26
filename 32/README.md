# Ejercicio 32

Importar datos a mongo y realizar operaciones

1. Abrir una tercera consola de comandos y navegar hasta la carpeta de instalación.
   ```
   cd \
   cd C:\Program Files\MongoDB\Server\3.2\bin
   ```
2. Vamos a importar el archivo data.json que está en la carpeta de este ejercicio
  ```
  mongoimport /db:mundo /collection:posts /jsonArray c:\MEANWorkshop\31\data.json  
  ```
  El resultado debería ser ...
  ```
  2016-04-26T10:43:34.906-0300    connected to: localhost
  2016-04-26T10:43:35.355-0300    imported 6 documents
  ```

3. Abramos un uno cliente mongo, o reutilicemos el que teníamos abierto del ejercicio anterior
    ```
    mongo
    ```    
4. Vamos a selecionar nuestra base de datos
  ```
  use mundo
  ```    
  Resultado:
  ```
  switched to db mongo
  ```    
5. Consultamos la colección posts
    ```
    db.posts.find()

    o para que se muestre más legible

    db.posts.find().pretty()
    ```    
6. Hacemos una consulta simple
    ```
    db.posts.find({titulo: "Bengala"})
    ```    
7. Hacemos una proyección
    ```
    db.posts.find({}, {titulo: true})

    o lo que es lo mismo

    db.posts.find({}, {titulo: 1})
    ```    
8. Hacemos una consulta + completa en dentro de un array
    ```
    db.posts.find({'comentarios.autor': 'Betiana'})
    ```   
9. Consulta con operadores $gt, $lt, $ne, ...
    ```
    db.posts.find({likes: 10}).count()
    db.posts.find({likes: {$gt: 0}}).count()
    ```   
