import User from "../models/User.js";
import generateId from "../helpers/generateId.js";

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
    user.token = generateId();
    const userStored = await user.save();
    res.json(userStored);
  } catch (error) {
    console.log(error);
  }
};

export { register };
