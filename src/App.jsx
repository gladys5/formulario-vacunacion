import { useState, useEffect } from "react"
import Form from "./components/Form.jsx"
import Header from "./components/Header.jsx"
import PatientsList from "./components/PatientsList.jsx"

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  )

  const [patient, setPatient] = useState({})

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients))
  }, [patients])

  const deletedPatient = (id) => {
    const patientUpdate = patients.filter((patient) => patient.id !== id)
    setPatients(patientUpdate)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletedPatient={deletedPatient}
        />
      </div>
    </div>
  )
}

export default App
