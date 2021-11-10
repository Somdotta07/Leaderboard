
# Leaderboard


A JavaScript project for the Leaderboard list app, using webpack and ES6 features.The leaderboard website displays scores submitted by different players. It also allows us to submit our score. All data is preserved thanks to the external Leaderboard API service.

![screenshot](https://user-images.githubusercontent.com/84907743/141096547-3f663750-416c-411c-b6f4-2c6c65327fe0.png)


## Built With

- HTML
- CSS
- JS
- WEBPACK

## Live Demo

[Link]( https://somdotta07.github.io/Leaderboard/)


## Getting Started

**To clone this project**
**Run command: $git clone  https://github.com/Somdotta07/Leaderboard.git**
**or press the green Code button in the upper right corner and choose to download from the Download ZIP link.**






## Prerequisites

- Code editor (VS Code, Sublime, Atom)

### Setup
- Set up a new project with webpack 
#### Install Webpack
- Follow the instructions from the [getting started](https://webpack.js.org/guides/getting-started/#basic-setup) guide to set up the basics. Implement all the steps from *Basic Setup* to *NPM Scripts*.
- The next step is to add html file :
    Follow the instructions from the [setting up HtmlWebpackPlugin](https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin) guide
Then
```
npm run build
```
- Create a **/src/index.html** for writing the project

- Then modify **webpack.config.js** to point HtmlWebpackPlugin towards your template file:
```javascript
plugins: [
  new HtmlWebpackPlugin({
-   title: 'Output Management',
+   template: './src/index.html'
  }),
],
```
- Run `npm run build` to update the **/dist/index.html**.
- Then it is time to add some style to the project:
Follow the steps in [loading CSS](https://webpack.js.org/guides/asset-management/#loading-css) guide.
Next, execute `npm run build` and check if the HTML body style has changed.
#### Setup local dev server
- Finally,follow the [using webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server) guide and set it up on your local machine.




## Authors

:woman: Somdotta Sarkar

- [Github](https://github.com/Somdotta07)
- [Twitter](https://github.com/Somdotta07)
- [LinkedIn](https://www.linkedin.com/in/somdotta-sarkar-8849b419/)



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
