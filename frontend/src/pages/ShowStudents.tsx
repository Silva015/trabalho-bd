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
  );
}
