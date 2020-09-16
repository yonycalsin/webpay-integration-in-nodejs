# Example project using Node.js Webpay SDK

The following project is a simple example of Webpay via the Transbank SDK for Node.js.

It is a web application that uses `express` to mount a local server, in which the Webpay Node.js SDK is used
to implement the different Webpay products, so that integrators can review examples of use.

# Ejecutar ejemplo

## Usando Docker

Para ejecutar el proyecto de esta forma, es necesario tener instalado:

- [docker y docker-compose](https://docs.docker.com/install/)

Para iniciar el demo, solo hay que ejecutar:

```bash
docker-compose up
```

Para detener:

```bash
docker-compose down
```

## Usando tu sistema

Para ejecutar el proyecto usando tu sistema, es necesario tener instalado:

- [Node.js](https://nodejs.org/en/)

Con el código fuente del proyecto en tu computador, puedes ejecutar en la raíz del proyecto los siguientes pasos:

### 1. Instalar dependencias

Para instalar las dependencia puedes ejecutar el siguiente comando en tu consola:

```bash
npm install
# o
yarn install
```

### 2. Ejecutar ejemplo

```bash
yarn dev
# o
npm run dev
```

La aplicación se ejecutará en [http://localhost:3000](http://localhost:3000) (y fallará en caso de que el puerto 3000 no esté disponible)
