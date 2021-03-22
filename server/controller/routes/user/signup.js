const bcrypt = require('bcrypt');
const User = require('../../../database/models/users');

const { checkUserByEmail, addUser } = require('../../../database/queries/user');
const boomify = require('../../../utils/boomify');

const signupController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user !== null) {
      throw boomify(409, 'user already exists ');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ ...req.body, password: hashedPassword });

    res.status(201).json({ status: 201, message: 'SingUp Successfully' });
  } catch (err) {
    next(err);
  }
};
module.exports = signupController;
