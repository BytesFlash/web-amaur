# 👋 Amaur - Sitio Web Oficial
> Este proyecto es el sitio web oficial de **Amaur**(https://amaur.cl), desarrollado utilizando [Astro](https://astro.build).


## 🚀 Estructura del proyecto

Este proyecto de Astro tiene la siguiente estructura de carpetas y archivos:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada archivo en este directorio se expone como una ruta basada en su nombre.

Aunque no hay nada especial en `src/components/`, se suele utilizar para colocar los componentes de Astro/React/Vue/Svelte/Preact.

Cualquier recurso estático, como imágenes, debe ir en el directorio `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en la terminal:

| Comando                   | Acción                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Instala las dependencias                          |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:3000` |
| `npm run build`           | Construye el sitio de producción en `./dist/`     |
| `npm run preview`         | Previsualiza el sitio construido localmente       |
| `npm run astro ...`       | Ejecuta comandos de la CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda sobre la CLI de Astro                 |


