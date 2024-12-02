# 🎫 **Aplicación de Tickets**

> Una aplicación de soporte en línea donde los usuarios pueden crear tickets, chatear en vivo con el soporte y ver el estado de sus tickets. El sistema incluye una vista de administrador para gestionar todos los tickets, responder y cerrarlos. 

---

## 📋 **Tabla de Contenidos**

- [✨ Características](#características)
- [💻 Instalación](#instalación)
- [🔧 Uso](#uso)
- [⚙️ Tecnologías](#tecnologías)
- [🔑 Variables de Entorno](#variables-de-entorno)
- [👥 Autores](#autores)

---

## ✨ **Características**

- 🎫 **Gestión de Tickets**: Los usuarios pueden crear tickets, ver su estado y mantener una conversación en tiempo real con el soporte.
- 👩‍💼 **Vista de Administrador**: Los administradores pueden gestionar todos los tickets, responder a ellos y cerrarlos.
- 💬 **Chat en Vivo**: Los mensajes entre los usuarios y el soporte están identificados por nombre, RUT y fecha, con colores distintos dependiendo del emisor, similar a WhatsApp.
- 🔒 **Autenticación**: Los usuarios pueden registrarse, iniciar sesión y acceder a su panel personal donde pueden ver el estado de sus tickets.

---

## 💻 **Instalación**

Para poner en marcha este proyecto en tu máquina local, sigue estos pasos:

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/aberistaina/app-tickets
   
2. **Abre 2 terminales, una para el Cliente y otra para el backend**
   
2. **Navega al directorio del cliente**:
    ```bash
    cd app-tickets/client
    
3. **Instala las dependencias del frontend**:
   ```bash
   npm install
   
4. **Navega al directorio del backend**:
   ```bash
   cd app-tickets/backend
   
5. **Instala las dependencias del backend**:
   ```bash
   npm install

6. **Crea un archivo .env en el directorio raíz del backend y agrega las siguientes variables de entorno**:
   ```bash
   DB_DATABASE=tu_database
   DB_USER=tu_usuario
   DB_PASSWORD=tu_password
   DB_HOST=tu_host
   PORT=tu_port
   SECRET=tu_clave_secreta_jwt

7. **Levanta el servidor del Frontend:**:
   ```bash
   npm run start

8. **Levanta el servidor del Backend:**:
   ```bash
   npm run dev

## 🔧 **Uso**

### Interacción con la Aplicación:

#### **Usuarios**:
1. **Regístrate e inicia sesión**: Crea una cuenta para poder gestionar tus tickets y acceder al soporte.
2. **Crea un ticket**: Una vez autenticado, puedes crear un ticket de soporte para recibir ayuda. Inicia un chat en vivo con el soporte.
3. **Consulta el estado de tus tickets**: Visualiza todos los tickets que has creado, su estado (abierto, cerrado, pendiente) y sigue la conversación en cada uno de ellos.

#### **Administradores**:
1. **Inicia sesión con privilegios de administrador**: Accede a la aplicación con una cuenta de administrador para tener acceso a todas las funcionalidades de gestión de tickets.
2. **Gestiona todos los tickets**: Como administrador, puedes visualizar todos los tickets creados por los usuarios, responder a ellos y cerrarlos cuando se haya resuelto el problema.
3. **Usa el panel de administración**: El panel de administración te permite ver el detalle completo de cada ticket, los mensajes enviados y su estado. Puedes interactuar con los usuarios para resolver sus problemas.

## ⚙️ **Tecnologías**

Este proyecto está construido con las siguientes tecnologías:

- 💻 **Node.js**: Entorno de ejecución de JavaScript para el backend.
- 🧑‍💻 **Angular**: Framework para el desarrollo del frontend.
- 💾 **MySQL**: Base de datos utilizada para almacenar los tickets y la información de los usuarios.
- 🔐 **JWT (JSON Web Token)**: Autenticación para las sesiones de los usuarios.
- 🛡️ **bcrypt**: Para la encriptación de contraseñas.


## 🔑 **Variables de Entorno**

Este proyecto requiere una clave API de OpenAI para funcionar. Crea un archivo `.env` en el directorio raíz y agrega la siguiente variable:


    DB_DATABASE=tu_database
    DB_USER=tu_usuario
    DB_PASSWORD=tu_password
    DB_HOST=tu_host
    PORT=tu_port
    SECRET=tu_clave_secreta_jwt


## 👥 **Autores**

- Alejandro Beristain - [@aberistaina](https://github.com/aberistaina)

