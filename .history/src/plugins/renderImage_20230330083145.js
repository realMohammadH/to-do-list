export default {
  install(app, options) {
    app.config.globalProperties.$renderImage = (path) => {
      // console.log(path)
      // const fileName = path.replace(/^.*[\\\/]/, '');
      // console.log(fileName);
      return new URL(path, import.meta.url).href;
    };
  },
};
