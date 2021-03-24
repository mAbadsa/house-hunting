const { deleteUser } = require('../../../database/queries/user');
const User = require('../../../database/models/users');

const deleteUserController = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.userId);
    return res.clearCookie('token').json({
      statusCode: 200,
      message: 'Account deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = deleteUserController;
