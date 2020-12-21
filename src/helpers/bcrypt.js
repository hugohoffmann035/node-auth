const bcrypt = require('bcrypt')

const bcryptCompare = (value, hash) => {
	return bcrypt.compareSync(value, hash);
}

const bcryptHash = (value, salt) => {
	return bcrypt.hashSync(value, salt);
}

module.exports = {
	bcryptCompare,
	bcryptHash
}