import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  interface Student {
    id_student_pk: number;
    name: string;
    email: string;
    register: string;
    course: string;
    password: string;
  }

  const API_URI = "http://localhost:3333/:email/:password";
  const [student, setStudent] = useState<Student>({
    id_student_pk: 0,
    name: "",
    email: "",
    register: "",
    course: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getStudent = async () => {
    try {
      const fetchData = await axios.get(API_URI);
      setStudent(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getStudent);
    return () => {
      window.removeEventListener("load", getStudent);
    };
  }, [student]);

  console.log(student);

  // check if email and password are correct
  // if correct, redirect to home page
  // if incorrect, show error message
  function checkLogin() {
    if (email === student.email && password === student.password) {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  }

  return (
    <div>
      <div className="h-full  justify-center items-center flex flex-col gap-y-4">
        <h2 className="text-2xl font-extrabold text-slate-700">Login</h2>

        <form className="rounded-2xl bg-gray-200 p-6 w-96">
          <label
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            htmlFor="email"
            className="text-blue-600 font-semibold"
          >
            Email
          </label>
          <input
            type="text"
            id="student_password"
            name="password"
            className="w-full p-2 rounded-xl my-2"
          />
          <label
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
            htmlFor="password"
            className="text-blue-600 font-semibold"
          >
            Senha
          </label>
          <input
            type="text"
            id="student_password"
            name="password"
            className="w-full p-2 rounded-xl my-2"
          />

          <div className="w-full text-center space-x-5">
            <button
              type="submit"
              onSubmit={checkLogin}
              className="rounded-xl mt-2 bg-blue-500 text-white px-3 py-2 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
              value="Login"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
