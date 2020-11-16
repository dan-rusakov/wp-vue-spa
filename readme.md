# Wordpress Vue SPA theme

A Wordpress theme to create Vue SPA site with WP as a Headless CMS

## Features

- **Hot reloading/browsersync** for local development.
- [VueRouter](https://github.com/vuejs/vue-router) integrated
- [Vuex](https://github.com/vuejs/vuex) integrated (with sample WordPress-centric modules)
- [Axios](https://github.com/axios/axios) for API requests
- Bare essentials needed for a functional WordPress theme
- All requests are redirected back to the index.php so your Vue routing is respected.

## Getting started

1. **Clone the repo** inside of your `wp-content/themes/` directory
2. **Navigate to the theme directory in your terminal** and run
   `npm install`
   `npm run watch` for development
   `npm run build` when you're ready to deploy the theme.
3. **Activate the theme** in your WordPress instance.
4. **Update your permalink settings** `(Settings -> Permalinks)` to be **"Day and name"**. If you don't want to use this setting you'll need to update the Vue router so it can find your content correctly. Please note that if you want to use a different permalink structure you'll need to update `./src/router/index.js` so it looks for the correct path.







