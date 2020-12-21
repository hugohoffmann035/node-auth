module.exports = (app) => {
	require("./login")(app);
	require("./register")(app);
}
