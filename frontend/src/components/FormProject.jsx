import { useState } from "react";
import useProjects from "../hooks/useProjects";
import Alert from "./Alert";

const FormProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [client, setClient] = useState("");

  const { showAlert, alert, submitProject } = useProjects();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, description, deliveryDate, client].includes("")) {
      showAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });

      return;
    }

    // Pasar los datos hacia el provider

    submitProject({ name, description, deliveryDate, client })

  };

  const { msg } = alert;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
    >
      {msg && <Alert alert={alert} />}
      <div className="mb-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="name"
        >
          Nombre Proyecto
        </label>
        <input
          id="name"
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Nombre del Proyecto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="description"
        >
          Descripcion
        </label>
        <textarea
          id="description"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripcion del Proyecto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="delivery-date"
        >
          Fecha de Entrega
        </label>
        <input
          id="delivery-date"
          type="date"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label
          className="text-gray-700 uppercase font-bold text-sm"
          htmlFor="client"
        >
          Nombre Cliente
        </label>
        <input
          id="client"
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Nombre del Cliente"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Crear Proyecto"
        className="bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 transition-colors"
      />
    </form>
  );
};

export default FormProject;
