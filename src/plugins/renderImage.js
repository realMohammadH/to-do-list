export default {
  install(app, options) {
    app.config.globalProperties.$renderImage = (path) => {
      return new URL(path, import.meta.url).href;
    };
  },
};
