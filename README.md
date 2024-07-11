# login-supabase

Este proyecto es una aplicación de login desarrollada con React y Vite, utilizando Supabase para la autenticación de usuarios. Al iniciar sesión correctamente, la aplicación muestra una página con un navbar utilizando Material UI, y también se integran Swiper para la presentación de contenido.

## Screenshots
### Login
[![Captura-de-pantalla-2024-07-11-194019.png](https://i.postimg.cc/yx57sbJg/Captura-de-pantalla-2024-07-11-194019.png)](https://postimg.cc/H8Qqt39d)

### Home
[![Captura-de-pantalla-2024-07-11-194113.png](https://i.postimg.cc/J7drNGTr/Captura-de-pantalla-2024-07-11-194113.png)](https://postimg.cc/HjX1HsDR)

### Products
[![Captura-de-pantalla-2024-07-11-194214.png](https://i.postimg.cc/c4gsX0jQ/Captura-de-pantalla-2024-07-11-194214.png)](https://postimg.cc/N5tq0qQM)


## Características

- **Autenticación con Supabase**: Manejo de login y registro de usuarios.
- **React y Vite**: Estructura del proyecto creada con Vite para un desarrollo rápido y eficiente.
- **Material UI**: Uso de componentes de Material UI para el diseño del navbar y otras partes de la interfaz.
- **Swiper**: Integración de Swiper para la creación de carruseles de contenido.
- **Card**: Uso de tarjetas para la presentación de información.

## Instalación

1. Clona el repositorio:

   ```
   git clone https://github.com/ivancidev/react-supabase-login.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd supabase-login
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Supabase:

   ```
   VITE_SUPABASE_URL=tu-supabase-url
   VITE_SUPABASE_KEY=tu-supabase-anon-key
   ```

## Uso

1. Inicia el servidor de desarrollo:

   ```
   npm run dev

   ```
2. Abre tu navegador y navega a http://localhost:5173.
3. Regístrate o inicia sesión utilizando las credenciales configuradas en Supabase.

## Tecnologías Utilizadas
- [React con Vite](https://vitejs.dev/guide/)
- [Supabase](https://supabase.com/)
- [Material UI](https://mui.com/material-ui/)
- [SwiperJS](https://swiperjs.com/demos)