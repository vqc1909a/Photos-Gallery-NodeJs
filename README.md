# Galería de Fotos
### Pasos para correr el proyecto

  - Clona el repositorio o descargalo directamente
  - Abrir el proyecto en cualquier editor de codigo
  - Traer todas las dependencias del proyecto con el comando:
    ```sh
        npm install 
    ```
  - Crear un archivo .env y declarar dentro el valor que usarás en las variables de entorno que se muestran a continuación:
       ```sh
           PORT = El puerto que vas a usar Ejem: 3000
           DB_CONNECTION = Base de datos local Ejm: mongodb://localhost/gallery_photos_db o Base de dato en la nube
            CLOUDINARY_CLOUD_NAME= El nombre de tu cloud name de tu cuenta de cloudinary
            CLOUDINARY_API_KEY = El api key de tu cuenta de cloudinary
            CLOUDINARY_API_SECRET = El api secret de tu cuenta de cloudinary
       ```
  - Finalmente correr tu servidor local con:
       ```sh
          npm run serve 
       ```
    You can also:
     ```sh
          npm start
       ```