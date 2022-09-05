import User from "../models/User.js";

const register = async (req, res) => {
  // Evitar registros duplicados
  const { email } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User(req.body);
    const userStored = await user.save();
    res.json(userStored);
  } catch (error) {
    console.log(error);
  }
};

export { register };
