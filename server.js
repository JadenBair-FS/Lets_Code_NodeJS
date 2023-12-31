const http = require("http");
const app = require("./app/app");

require("dotenv").config();

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Server is running in port ${process.env.PORT}`);
});
