const boomify = require('../../../utils/boomify');
const User = require('../../../database/models/users');

const getUser = async (req, res, next) => {
  try {
    const { userId } = req;
    console.log(userId);
    const user = await User.findById(userId);

    if (!user) {
      throw boomify(500, 'Something went wrong!');
    }
    console.log(user);
    return res.json({ statusCode: 200, data: { ...user, password: '' } });
  } catch (error) {
    return next(error);
  }
};

module.exports = getUser;
