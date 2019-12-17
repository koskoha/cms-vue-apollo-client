module.exports = {
  plugins: [
    require("autoprefixer")({
      browsersList: ["last 3 versions"]
    }),
    require("precss")
  ]
};
