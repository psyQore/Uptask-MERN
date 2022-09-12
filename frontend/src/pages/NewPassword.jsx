import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import clientAxios from "../config/clinetAxios";
import Alert from "../components/Alert";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [validToken, setValidToken] = useState(false);
  const [alert, setAlert] = useState({});
  const [passwordModified, setPasswordModified] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await clientAxios(`/users/forget-password/${token}`);
        setValidToken(true);
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    checkToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlert({
        msg: "EL password debe ser minimo de 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      const url = `/users/forget-password/${token}`;

      const { data } = await clientAxios.post(url, { password });
      setAlert({
        msg: data.msg,
        error: false,
      });
      setPasswordModified(true);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <>
      <h1 className=" text-sky-600 font-black text-6xl capitalize">
        Reestablece tu password y no pierdas acceso a tus{" "}
        <span className="text-slate-700">proyectos</span>{" "}
      </h1>

      {msg && <Alert alert={alert} />}

      {validToken && (
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10"
        >
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >
              Nuevo Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe Tu Nuevo Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Guardar Nuevo Password"
            className="bg-sky-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
          />
        </form>
      )}
      {passwordModified && (
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          Iniciar sesión
        </Link>
      )}
    </>
  );
};

export default NewPassword;
