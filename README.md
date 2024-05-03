# Curso CODERHOUSE Backend - Ejemplo Multer

Ejemplo basico del uso de Multer para cargar uno o mas archivos

## Instalación

1. Forkeá y cloná el repositorio

2. Parado en la raíz del proyecto moverce a la carpeta server con "cd server" y ejecutar 

   ```
   npm install
   ```
    para instalar todas las dependecias del proyecto

3. Ejecutar 

   ```
   npm start
   ```

    para correr el proyecto. El proyecto estará disponible en http://localhost:8080


## Uso

En la ruta http://localhost:8080/multer se encuentran dos formularios. Uno para cargar un solo archivo y el otro para cargar varios archivos.
Al enviar el fomrulario, la app devuelve el mensaje de exito o error segun corresponda.

## Estructura

El router, para las peticiones a la ruta “/multer” hace uso del multerController.
Este, para las peticiones POST, tanto para “/” como para “/multiple”, se hace uso del metodo upload de multer como midlleware. 
En el archivo multer de la carpeta midllewares están las configuraciones de multer, donde definimos donde se van a guardar los archivos. Adicional a eso, como algo personal, le cambio el nombre de los archivos, agregándole un timeStamp, de esta forma, si se agregan archivos con nombres repetidos, no se pisan.
Para la petición GET, se renderiza la “multer.handlebars”. Esta vista cuenta con dos formularios. Uno para la carga de un solo archivo y el otor para cargar múltiples archivos, así tienen ambos ejemplos. Es importante que los formularios tengan el atributo enctype="multipart/form-data". Esto sirve para indicar al servidor que el formulario contiene archivos para enviar, además de datos de texto.
Los input de los formularios tienen que ser del type “file”, y la diferencia entre uno es que para poder subir varios archivos, al input hay que agregarle la palabra multiple.
El atributo name es el que va a tomar luego el servidor para capturar el o los archivos, por lo cual tanto en el formulario, como en el manejo de la petición, el nombre tiene que ser el mismo.
Recrodar, en el archivo app.js tener definida la carpeta de estaticos.
Básicamente eso sería todo. Les queda a ustedes, modificar el midlleware para que según el tipo de archivo se guarde en diferentes carpetas.

