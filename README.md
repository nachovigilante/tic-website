# TIC Site

Esta es la página web de TIC ORT. Se encuentra alojada en [TIC Site](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

## Commits

- Para poder hacer commits, se debe seguir el estándar de [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
- La estructura de los commits es la siguiente:
  - `type(scope): subject`
  - `body`
  - `footer`
- El `type` puede ser:
  - `feat`: Una nueva característica
  - `fix`: Una corrección de un bug
  - `docs`: Cambios en la documentación
  - Cualquiera de los otros permitidos por [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Workflow

Se utiliza el flujo de trabajo [Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow). Por lo tanto, se deben crear ramas para cada feature, y luego hacer un pull request para que se haga el merge a la branch `develop`. Cuando se quiera hacer un release, se hace un pull request de `develop` a `master`, branch que se encuentra protegida, por lo que no se puede hacer push directamente.

## Desarrollo

Para poder correr el proyecto, se debe tener instalado [Node.js](https://nodejs.org/en/). Luego, clonar el repositorio, y ejecutar `npm install` para instalar las dependencias. Para correr la aplicación en modo desarrollo, ejecutar `npm run dev`. Para correr la aplicación en modo producción, ejecutar `npm run build` y luego `npm start`.

### Estructura

- `public/`: Contiene los archivos estáticos de la aplicación.
- `pages/`: Contiene las páginas de la aplicación.
- `components/`: Contiene todos los componentes de la aplicación (excepto las páginas).
  - `utils/`: Contiene los componentes que son utilizados por otros componentes.
  - `layout/`: Contiene los componentes que son utilizados para el layout de la aplicación.
  - `*/`: Contienen componentes que son utilizados por la página correspondiente.
- `styles/`: Contiene los estilos **generales** de la aplicación.

#### Patrones

Cada componente debe tener los siguientes archivos:

- `*.tsx`: Contiene el componente.
- `*.module.scss`: Contiene los estilos del componente.

Y deben seguir los siguientes patrones:

- El nombre del componente debe ser en PascalCase.

## Deploy

La aplicación se encuentra deployada en [Vercel](https://vercel.com/). Cuando se realiza un merge a la branch `master`, se hace un deploy automático y se muestra en [TIC Site](https://www.youtube.com/watch?v=dQw4w9WgXcQ). En el commit es posible ver un tick verde que indica que el deploy fue exitoso o una cruz roja que indica que hubo un error en el deploy. Solo los commits que pasan el deploy pueden hacer una pull request a la branch `master`.
