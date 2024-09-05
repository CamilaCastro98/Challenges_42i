#Dockerfile para la aplicación next-challenges

# Usar imagen base oficial de Node.js
FROM node:18-alpine AS base

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json al contenedor
COPY next-challenges/package.json next-challenges/package-lock.json ./

# Instalar todas las dependencias
RUN npm install

# Copiar código al contenedor
COPY next-challenges/ .

# Construir la aplicación web de Next
RUN npm run build

# Exponer el puerto para que la aplicación pueda escuchar
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
