# API Rest NodeJS + MongoDB CRUD

Servicios CRUD con estructura básica de ejemplo de una API REST utilizando NodeJS y MongoDB. El servicio consta de una base de datos no relacional en conjunto con un sistema de respuesta a través de peticiones realizadas utilizando nodeJS.

### Requisitos

Antes de continuar, debemos asegurarnos de tener instalado en nuestro computador, las siguientes aplicaciones y dependencias:

* NodeJS 12.x o superior
* MongoDB 4.2.5 o superior

### Configuración

Para poner en funcionamiento la aplicación, se deben configurar las credenciales para la conexión a la base de datos en MongoDB. Para ello debemos modificar el archivo **app.js** ubicado en la carpeta **src**, introduciendo los datos de autenticación dentro de la función mongoose.connect(), como se muestra a continuación: 

```
mongoose.connect('mongodb://username:password@address:port/database');
```

### Instalación

Para poder ejecutar la aplicación, se debe preparar el entorno de ejecución, instalando las dependencias de nodeJS que sean requeridas. Para esto vamos a ejecutar el siguiente comando dentro de la carpeta del proyecto:

```
npm install
```

### Ejecución

Para ejecutar nuestra API, basta con introducir el siguiente comando dentro de la carpeta de nuestro proyecto:

```
node src/app.js
```

### Ejemplos de uso

Algunos ejemplos para la utilización y pruebas de la API (se sugiere realizar las peticiones a través de Postman) son los siguientes:

* Agregar usuarios a través de petición POST

```
http://localhost:3000/users/add

{
	"name":"user_name",
	"email":"user_email",
	"age":user_age
}
```

* Obtener usuarios registrados en la base de datos mediante GET

```
http://localhost:3000/users
```