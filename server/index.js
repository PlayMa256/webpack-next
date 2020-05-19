const app = require("express")();
const runWebpack = require('./bundler');

app.get("/pages/:page", async (req, res) => {
  try {
    const result = await runWebpack(req.params.page);
    console.log('resulçt', result);
  } catch (err) {
    console.log(err);
  }
});


app.listen(4000)