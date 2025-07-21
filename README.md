# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# 🏃‍♂️ ClimaRun – Dashboard Climático para Runners

## 🌤️ Descripción

**ClimaRun** es un dashboard web interactivo diseñado especialmente para corredores. Utiliza la API de **Open Meteo** para mostrar métricas climáticas clave en tiempo real, ayudando a planificar entrenamientos de forma segura y eficiente. Presenta datos como temperatura, humedad, índice UV, velocidad del viento, nubosidad y probabilidad de lluvia, junto con alertas personalizadas y recomendaciones útiles.

---

## 🎯 Objetivo del Proyecto

Desarrollar una herramienta web visual e intuitiva que permita a los usuarios que practican running:

- Conocer las condiciones climáticas actuales de su ciudad o ubicación.
- Visualizar gráficamente cómo evolucionará el clima por hora.
- Recibir alertas sobre riesgos como radiación solar extrema, bochorno o lluvias.
- Determinar automáticamente la mejor franja horaria del día para correr.
- Ver pronósticos extendidos y tomar decisiones informadas para sus rutinas.

---

## 🚀 Tecnologías Utilizadas

- ⚛️ React (Vite)
- 🖌️ Tailwind CSS
- 📊 Recharts (gráficos)
- 🌐 Open Meteo API
- ⏱️ Axios / Fetch para peticiones asincrónicas
- 🧠 JavaScript moderno (ES6+)

---

## 🛠️ Instalación y uso

1. **Clona este repositorio:**

```bash
git clone https://github.com/tu-usuario/dashboard-climarun.git
cd dashboard-climarun

```
