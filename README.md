# listaPublicacionesReact
Desafío: Lista de Publicaciones con React
1. Creación del proyecto
Crea un nuevo proyecto con Vite + React.

npm create vite@latest nombre-del-proyecto cd nombre-del-proyecto npm install npm run dev
Verifica que el proyecto arranca correctamente.

2. Estructura de componentes
Crea al menos dos componentes:

App.jsx: será el componente principal.

PostsList.jsx: mostrará la lista de publicaciones obtenidas desde la API.

3. Manejo de estado (useState)
En PostsList.jsx, define un estado llamado posts que almacenará las publicaciones.

Inicialízalo como un arreglo vacío.

4. Efectos (useEffect) y consumo de API
Usa useEffect para hacer una petición a la API al montar el componente.

Endpoint:

https://jsonplaceholder.typicode.com/posts
Una vez recibida la respuesta, guarda los datos en el estado posts.

5. Renderización de datos
Muestra en la interfaz los títulos y cuerpos (title y body) de cada publicación.

Puedes usar una lista <ul> con <li> o tarjetas con <div>.

6. Extras opcionales (si quieres ir más allá 🚀)
Agrega un loading mientras los datos se cargan.

Agrega un mensaje de error si la petición falla.

Limita la lista a las primeras 10 publicaciones.

7. Resultado esperado
Al abrir tu aplicación, deberías ver en pantalla una lista de publicaciones obtenidas desde la API, renderizadas dinámicamente gracias al uso de useState, useEffect y el consumo del recurso externo.