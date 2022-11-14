const Patients = ({ patients, setPatient, deletedPatient }) => {
  const { name, vaccine, email, date, symptoms, id } = patients
  const handleDelete = () => {
    const res = confirm("Deseas eliminar este paciente?")
    if (res) {
      deletedPatient(id)
    }
  }
  return (
    <div>
      <div className="mx-5 my-10 shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case"> {name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Tipo de Vacuna:
          <span className="font-normal normal-case"> {vaccine}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: <span className="font-normal normal-case"> {email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de Aplicacion:{" "}
          <span className="font-normal normal-case"> {date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Notas: <span className="font-normal normal-case"> {symptoms} </span>
        </p>
        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => setPatient(patients)}
          >
            Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Patients
