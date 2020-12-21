const route = require("express").Router();
const { generateToken } = require("../../../helpers/token");
const { bcryptCompare } = require("../../../helpers/bcrypt");

const { findOne } = require("../../models/User");

route.get("/login", (req, res) => {
	const { email, password } = req.body;

	if (!email) return res.status(400).send({ error: "E-mail not found" });
	if (!password) return res.status(400).send({ error: "Password not found" });

	try {
		const user = findOne({ email });

		if (!user) return res.status(404).send({ error: "User not found" });
		if (!bcryptCompare(password, user.password))
			return res.status(401).send({ error: "Password is not valid" });

		const token = generateToken(user.id);

		if (!token)
			return res
				.status(500)
				.send({ error: "Token no generated, please wait one time" });

		user.password = undefined;
		res.status(200).json({
			user,
			...token,
		});
	} catch (err) {
		res.status(500).send();
	}
});

module.exports = (app) => app.use("/api", route);