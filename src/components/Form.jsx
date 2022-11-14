import { useState, useEffect } from "react"
import Error from "./error"
const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("")
  const [vaccine, setVaccine] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name)
      setVaccine(patient.vaccine)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }
  }, [patient])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const date = new Date().getTime().toString(36)
    return random + date
  }
  //validand0 el envio
  const handleSubmit = (e) => {
    e.preventDefault()
    if ([name, vaccine, email, date, symptoms].includes("")) {
      setError(true)
      return
    }
    setError(false)

    //nuevo objeto
    const objetPatient = {
      name,
      vaccine,
      email,
      date,
      symptoms,
    }
    if (patient.id) {
      //Editando el registro
      objetPatient.id = patient.id
      const updatedPatients = patients.map((patientStatus) =>
        patientStatus.id === patient.id ? objetPatient : patientStatus
      )
      setPatients(updatedPatients)
      setPatient({})
    } else {
      // nuevo registro agregandole un id
      objetPatient.id = generateId()
      setPatients([...patients, objetPatient])
    }

    //reseteo de formulario
    setName("")
    setVaccine("")
    setEmail("")
    setDate("")
    setSymptoms("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Agrega Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className=" shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && (
          <Error>
            {" "}
            <p>"Todos los campos son obligatorios"</p>
          </Error>
        )}
        <div className="m-d5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="Paciente"
          >
            Nombre del Paciente
          </label>
          <input
            id="Paciente"
            type="text"
            placeholder=" Nombre del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="m-d5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="vacuna"
          >
            Tipo de Vacuna
          </label>
          <input
            id="vacuna"
            type="text"
            placeholder=" Nombre de la Vacuna"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={vaccine}
            onChange={(e) => setVaccine(e.target.value)}
          />
        </div>
        <div className="m-d5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="m-d5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="date"
          >
            Fecha de Aplicacion
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="m-d5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Notas
          </label>
          <textarea
            id="sintomas"
            type="text"
            placeholder="Describe los Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors "
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  )
}

export default Form
