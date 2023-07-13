import { useState, useEffect } from "react";
import axios from "axios";

export default function ShowStudents() {
  interface Student {
    id_student_pk: number;
    name: string;
    email: string;
    register: string;
    course: string;
    password: string;
  }
  const API_URI = "http://localhost:3333/students";
  const [student, setStudent] = useState([]);
  const getStudents = async () => {
    try {
      const fetchData = await axios.get(API_URI);
      setStudent(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getStudents);
    return () => {
      window.removeEventListener("load", getStudents);
    };
  }, [student]);

  console.log(student);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">React Axios HTTP GET Request Example</h2>
      <ul className="list-group">
        {student.map((res: Student) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={res.id_student_pk}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{res.name}</div>
                {res.email}
              </div>
              <span className="badge bg-primary rounded-pill">
                {res.register}
              </span>
            </li>
          );
        })}
      </ul>
    </div>

    // <div>
    //   <div className="h-full  justify-center items-center flex flex-col gap-y-4">
    //     <h2 className="text-2xl font-extrabold text-slate-700">
    //       Cadastro de Despesas
    //     </h2>

    //     <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">
    //       <label htmlFor="conta" className="text-blue-600 font-semibold">
    //         Conta
    //       </label>
    //       <input
    //         type="text"
    //         id="conta"
    //         name="conta"
    //         className="w-full p-2 rounded-xl my-2"
    //       />
    //       <label htmlFor="valor" className="text-blue-600 font-semibold">
    //         Valor
    //       </label>

    //       <label htmlFor="password" className="text-blue-600 font-semibold">
    //         Data
    //       </label>
    //       <input
    //         type="date"
    //         id="data"
    //         name="data"
    //         className="w-full p-2 rounded-xl my-2"
    //         defaultValue={new Date().toISOString().substring(0, 10)}
    //       />
    //       <label htmlFor="tipo" className="text-blue-600 font-semibold">
    //         Tipo
    //       </label>
    //       <select
    //         id="tipo"
    //         name="tipo"
    //         className="bg-gray-50 border p-2 my-2 border-gray-300 text-gray-900 mb-6  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       >
    //         <option value="fixa">Fixa</option>
    //         <option value="variavel">Variável</option>
    //       </select>

    //       <div className="w-full text-center space-x-5">
    //         <button
    //           type="submit"
    //           className="rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
    //           value="Cadastrar"
    //         >
    //           Cadastrar
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}
