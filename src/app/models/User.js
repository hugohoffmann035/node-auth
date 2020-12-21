const path = require("path");
const fs = require("fs");

const User = path.join(__dirname, "..", "..", "database", "data.json");

const findOne = (where) => {
	try {
		const user = fs.readFileSync(User, "utf8");
		const result = JSON.parse(user).filter((user) => user.email == where.email);
		return result.length > 0 && result[0];
	} catch (err) {
		return {};
	}
};

const create = (data) => {
	if (!data.id || !data.email || !data.password) return false;

	try {
		const allUser = fs.readFileSync(User, "utf8");
		const newContent = JSON.stringify(
			[data, ...JSON.parse(allUser)],
			null,
			"\t"
		);
		const user = fs.writeFileSync(User, newContent);

		return user;
	} catch (err) {
		return {};
	}
};

module.exports = {
	findOne,
	create,
};
