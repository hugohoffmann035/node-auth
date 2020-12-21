const jwt = require("jsonwebtoken");

const generateToken = (id) => {
	const exp = 3600;
	const hash = jwt.sign(
		{
			exp,
			data: id,
		},
		"secret"
	);

	if(!hash) return false;

	return {
		expires_time: exp,
		token: hash,
	};
};

module.exports = {
	generateToken,
};
