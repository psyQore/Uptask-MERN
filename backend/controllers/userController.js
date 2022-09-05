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

const authenticate = async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuiario existe
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }
  // Comprobar si el usuario esta confirmado
  if (!user.confirm) {
    const error = new Error("Tu cuenta no ha sido confirmada");
    return res.status(404).json({ msg: error.message });
  }
  // Comprobar su password
  if (await user.checkPassword(password)) {
    console.log("correcto");
  } else {
    const error = new Error("El Password es Incorrecto");
    return res.status(404).json({ msg: error.message });
  }
};

export { register, authenticate };
