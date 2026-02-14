# Proyecto: Simulación de Tienda (React)

Este es el proyecto para el **Analisis de Resultados de la guia 3**. El cual consiste en un catálogo de productos tecnológico desarrollado con React, enfocado en el manejo de componentes modulares y el flujo de datos a través de props.

## Sobre el desarrollo
Para este sistema utilicé una estructura de dos componentes principales:
* **ProductList**: Es el componente contenedor. Aquí manejo el estado con un arreglo de 10 productos (con su ID, nombre, precio e imagen) y utilizo un `.map()` para renderizarlos.
* **ProductItem**: Este componente se encarga de la parte visual de cada tarjeta. Recibe la información del padre y gestiona la interactividad.

**Nota sobre las imágenes:** Las descargué y las guardé localmente en la carpeta `public/img` para que el proyecto no dependa de enlaces externos y la carga sea más estable.

## Mejoras añadidas
Para darle un toque más profesional, integré la librería **SweetAlert2**. En lugar de usar el `alert()` básico del navegador, ahora al dar clic en "Ver detalle" aparece una ventana emergente personalizada que muestra la foto del producto, el ID y el precio, mejorando la experiencia visual.

## Cómo ejecutar el proyecto
Si acabas de bajar el proyecto, sigue estos pasos en la terminal:

1. **Instalar dependencias**:
npm install

2. **Iniciar el servidor local**:
npm run dev

3. **Ver en el navegador**:
Copia y pega la dirección que le probeé la terminal (normalmente es http://localhost:5173) en su navegador.
