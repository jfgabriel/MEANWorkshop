# Ejercicio 20: Mundo Gatuno con MongoDB

Implementar el blog Mundo Gatuno con MongoDB

## Pasos

1. Preparar la base datos<br>
  1.1 Iniciar mongodb en una consola de sistema<br>
  1.2 En una segunda consola, navegar hasta la carpeta de este proyecto<br>
  1.3 Importar los datos con mongoimport /db:mundo /collection:posts /jsonArray data.json<br>
  1.4 Abrir el cliente mongo y ejecutar los siguientes comandos  
  - use mundo
  - db.posts.count()
2. Obtener un post por id  
  - En el servidor: Implementar API  
  - En la aplicación: Implementar llamada en postsService  
3. Permitir agregar un comentario
    - En el servidor: Implementar API  
    - En la aplicación: Implementar llamada en postsService  
4. Permitir agregar un like
    - En el servidor: Implementar API  
    - En la aplicación: Implementar llamada en postsService  
5. Inicializar el servidor
6. Navegar hasta <http://localhost:3000>

## Tareas nerd

1. Implementar API para buscar post por texto
