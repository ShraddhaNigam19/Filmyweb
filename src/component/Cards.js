import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import ReactStars from "react-stars";
import { moviesRef } from "./firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      const querySnapshot = await getDocs(moviesRef);
      const moviesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(moviesData);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-self-start px-3 mt-2">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center">
          <Dna height={40} />
        </div>
      ) : (
        data.map((movie) => (
          <Link key={movie.id} to={`/detail/${movie.id}`}>
            <div className="card w-64 h-96 p-2 mr-5 shadow-lg cursor-pointer font-medium md:mt-0 mt-6 lg:mt-4 hover:-translate-y-3 transition-all duration-500">
              <img
                className="w-full h-64 md:h-72 object-cover mb-2"
                src={movie.image}
                alt=""
              />
              <h1>
                <span className="text-purple-500">Name: </span>
                {movie.title}
              </h1>
              <h1 className="flex items-center">
                <span className="text-purple-500 mr-1">Rating: </span>
                <ReactStars
                  size={20}
                  half={true}
                  value={movie.rating / movie.rated}
                  edit={false}
                />
              </h1>
              <h1>
                <span className="text-purple-500">Year: </span>
                {movie.year}
              </h1>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Cards;
