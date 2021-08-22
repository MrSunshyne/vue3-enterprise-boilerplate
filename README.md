# Vue 3 Enterprise Boilerplate

A boilerplate to get started with a Vue 3 project fast

- ViteJS
- Composition API
- TailwindCSS
- TailwindUI
- VueX
- HeadlessUI
- Heroicons
- VueUse

## Usage

### Getting Started 🚀

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/MrSunshyne/vue3-enterprise-boilerplate)

### Using degit

```sh
npx degit MrSunshyne/vue3-enterprise-boilerplate v3-app
cd v3-app
```

## Recommendations

### Project Structure

`@`

The @ symbol points to the `src` folder

`src/pages`

- These are what you would typically import in your `routes.js` file
- File names should follow this convention : `Page<name-of-the-page>`. eg. `PageAbout, PageHome, PageProfile`

`src/components`

- All shared components live under this folder.
- Components are usually imported in `Pages` to constitute a full page

`src/components/commmon`

- Sometimes components can share sub components, these can live in the common folder.
- Files from common should not be imported directly into `Pages`
