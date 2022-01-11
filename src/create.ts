function create(plugins) {
  return (app, options = {}) => {
    (Array.isArray(plugins) ? plugins : Object.values(plugins)).forEach((plugin) => {
      app.use(plugin, options);
    });
  };
}

export default create;
