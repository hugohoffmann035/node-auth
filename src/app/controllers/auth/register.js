const route = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { bcryptHash } = require("../../../helpers/bcrypt");

const { findOne, create } = require("../../models/User");

route.post("/register", (req, res) => {
	const { email, password } = req.body;

	if (!email) return res.status(400).send({ error: "E-mail not found" });
	if (!password) return res.status(400).send({ error: "Password not found" });

	try {
		const user = findOne({ email });

		if (user) return res.status(403).send({ error: "User has registred" });

		const passwordEncypt = bcryptHash(password, 10);
		if (!passwordEncypt) return res.status(500).send();

		const createdUser = create({
			id: uuidv4(),
			email,
			password: passwordEncypt,
		});

		res.status(201).send();
	} catch (err) {
		res.status(500).send();
	}
});

module.exports = (app) => app.use("/api", route);
