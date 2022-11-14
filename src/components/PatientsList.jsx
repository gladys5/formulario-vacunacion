import Patients from "./Patients"

const PatientsList = ({ patients, setPatient, deletedPatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes</span>
          </p>
          {patients.map((patients) => (
            <Patients
              key={patients.id}
              patients={patients}
              setPatient={setPatient}
              deletedPatient={deletedPatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes registrados
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  )
}

export default PatientsList
