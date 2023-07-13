import logo from "../logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  interface Class {
    id_class_pk: number;
    subject_name: string;
    class_number: number;
    class_period: string;
    professor_name: string;
    department_name: string;
  }

  const API_URI = "http://localhost:3333/classes/names";
  const [classes, setClasses] = useState([]);
  const getClasses = async () => {
    try {
      const fetchData = await axios.get(API_URI);
      setClasses(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getClasses);
    return () => {
      window.removeEventListener("load", getClasses);
    };
  }, [classes]);

  console.log(classes);

  return (
    <div className="w-full h-screen flex flex-cols text-center">
      <div className="w-1/8 bg-slate-200 h-full p-4 hidden md:flex flex-col">
        <div className="px-4">
          <img src={logo} alt="react-logo" />
        </div>
        <div className="justify-stretch py-5 grid grid-cols-1 gap-3 my-auto">
          <div className="bg-slate-100 shadow-md rounded-md px-4 py-3 hover:bg-gray-300">
            <a className="px-4 py-3" href="./show-students">
              Ver todos os alunos
            </a>
          </div>
          <div className="bg-slate-100 shadow-md rounded-md px-4 py-3 hover:bg-gray-300">
            <a className="px-4 py-3" href="./login">
              Login
            </a>
          </div>
          <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
            Contact
          </div>
        </div>
        <div>FOOTER</div>
      </div>
      <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
        <div className="text-4xl pt-10">Turmas</div>
        {classes.map((res: Class) => {
          const anchorHref = "/class/" + res.id_class_pk;
          return (
            <div
              className="bg-slate-100 shadow-md rounded-md px-4 py-3"
              key={res.id_class_pk}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="text-xl">{res.subject_name}</div>
                  <div className="text-lg">{res.department_name}</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl">{res.professor_name}</div>
                  <div className="text-lg">{res.class_number}</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl">{res.class_period}</div>
                </div>
                <a
                  className="p-4 bg-gray-400 hover:bg-gray-300"
                  href={anchorHref}
                >
                  Ver avaliações
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
