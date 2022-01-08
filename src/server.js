require("dotenv").config();
const express = require("express");
const path = require("path");

const routes = require("./routes");
const { env } = require("./helpers/core.helper");
const { handleError } = require("./helpers/error.helper");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/resources/views"));
app.use(`/${env("STATIC_DIR", "attachments")}`, express.static(path.resolve(__dirname, '../', env("FOLDER_ROOT"))));
app.use(express.static(path.join(__dirname, "/public")));
app.use(routes);
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.locals = {
  PAGE_TITLE: env("APP_NAME", "Quick Gallery"),
  PAGE_URL: `${env("APP_URL", "http://localhost")}:${env("APP_PORT", 3333)}`,
};

const port = env("APP_PORT", 3333);

app.listen(port, () => {
  console.log(`Server running in ${env("APP_URL", "http://localhost")}:${env("APP_PORT", 3333)}`);
});