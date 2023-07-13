import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ClassRatings() {
  const { id } = useParams();
  interface Rating {
    id_rating_pk: number;
    commentary: string;
    rating_value: number;
    student_name: string;
    id_class_fk: number;
  }

  const API_URI = "http://localhost:3333/ratings/class/" + id;
  const [ratings, setRatings] = useState([]);
  const getRatings = async () => {
    try {
      const fetchData = await axios.get(API_URI);
      setRatings(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getRatings);
    return () => {
      window.removeEventListener("load", getRatings);
    };
  }, [ratings]);

  console.log(ratings);
  return (
    <div>
      <h1>Detalhes da classe {id}</h1>
      <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
        <div className="text-4xl pt-10">Avaliações</div>
        {ratings.map((res: Rating) => {
          return (
            <div
              className="bg-slate-100 shadow-md rounded-md px-4 py-3"
              key={res.id_rating_pk}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="text-xl font-bold">{res.student_name}</div>
                  <div className="text-lg">{res.commentary}</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xl font-bold">{res.rating_value}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClassRatings;
