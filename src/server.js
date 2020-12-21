require("dotenv/config");

const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app)

const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
	console.log("==============================================");
	console.log(`==== SERVER IS RUNNING ON ${HOST}:${PORT} ====`);
	console.log("==============================================");
});
