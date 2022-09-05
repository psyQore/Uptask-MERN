import User from "../models/User.js";

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const userStored = await user.save();
    res.json(userStored);
  } catch (error) {
    console.log(error);
  }
};

export { register };
