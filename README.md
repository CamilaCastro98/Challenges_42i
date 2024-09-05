# Challenges Para 42i
Este respositorio contiene la solución de los challenges técnicos propuestos por 42i. Las tecnologías utilizadas son:
- **Next.js** para la interfaz web.
- **Docker** para la virtualización del entorno de desarrollo.
- **Jest** para las pruebas unitarias.
- **ESLint y Prettier** para linting y formateo del código.

## Instrucciones de Instalación con Docker

1. Clonar el repositorio.

```
git clone https://github.com/CamilaCastro98/Challenges_42i.git
cd Challenges_42i
```

2. Construir la imagen de Docker.

`docker build -t next-challenges-image .`

3. Ejecutar la aplicación.

`docker run -p 3000:3000 next-challenges-image`

4. Abrir el navegador e ir a http://localhost:3000 para ver la aplicación.

5. Ejecutar los tests unitarios.

`docker run next-challenges-image npm run test`

## Instrucciones de Instalación sin Docker

1. Clonar el repositorio.

```
git clone https://github.com/CamilaCastro98/Challenges_42i.git
cd Challenges_42i/next-challenges
```

2. Instalar dependencias.

`npm install`

3. Ejecutar la aplicación.

`npm run dev`

4. Abrir navegador e ir a http://localhost:3000 para ver la aplicación.

5. Ejecutar los tests unitarios.

`npm run test`