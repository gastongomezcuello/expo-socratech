# Socratech

Socratech es una aplicación ficticia de comercio electrónico para la venta de artículos de electrónica y smart home. Está desarrollada con **React Native y Expo**, permitiendo una experiencia uniforme en dispositivos **iOS y Android**. La aplicación utiliza **Firebase Realtime Database** para la gestión de datos y **Redux** para el manejo de estados locales.

## Características principales

- **Autenticación con Firebase**: Registro e inicio de sesión con Firebase Auth.
- **Gestión de datos en tiempo real**: Uso de Firebase Realtime Database.
- **Manejo de estado con Redux**.
- **Catálogo de productos**: Filtrado por categorías.
- **Selección de foto de perfil**: Uso de la cámara del dispositivo.
- **Experiencia de usuario fluida y responsiva**: Compatible con **iOS y Android**.

## Instalación

Clona el repositorio y ejecuta:

```sh
npm install
```

Para iniciar la aplicación en Expo:

```sh
npm start
```

Para ejecutarlo en un emulador o dispositivo físico:

```sh
npm run android # Para Android
npm run ios     # Para iOS
```

## Tecnologías utilizadas

- **React Native** y **Expo** para el desarrollo multiplataforma.
- **Firebase** para autenticación y base de datos en tiempo real.
- **Redux Toolkit** para el manejo del estado global.
- **Expo Image Picker** para la selección de imágenes.

## Dependencias principales

```json
{
  "expo": "~52.0.23",
  "react-native": "0.76.5",
  "firebase": "^11.1.0",
  "@reduxjs/toolkit": "^2.5.0",
  "react-redux": "^9.2.0",
  "@react-navigation/native": "^7.0.14",
  "expo-image-picker": "~16.0.5"
}
```

## Uso de Firebase

La aplicación maneja autenticación y almacenamiento de datos en Firebase Realtime Database. Se requiere configurar Firebase en el proyecto y agregar el archivo `google-services.json` (Android) o `GoogleService-Info.plist` (iOS).

## Estado global con Redux

Redux gestiona el estado de la aplicación, incluyendo el carrito de compras y los datos del usuario autenticado.

## Posibles problemas

- **Carga de imágenes**: Algunas imágenes pueden no cargarse correctamente si los enlaces en la base de datos son inválidos.

## Contribuciones

Este proyecto es parte de un curso y no acepta contribuciones externas.

---

Desarrollado con ❤️ para fines educativos. 🚀

