

module.exports = {
  module: {
    rules: [{test:/\.css$/ , use: ["style-loader", "css-loader"]},
    {test : /\.(png|jpe?g|gif)$/ ,use: {loader: 'file-loader'}}]
  },
};
