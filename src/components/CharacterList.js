import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  let pageNumber = page;
  const addPage = () => {

    if(pageNumber == 25) {
      pageNumber = 1;
      setPage(pageNumber);
    } else {
      pageNumber++;
    setPage(pageNumber);
    }
    
  }

  const reducePage = () => {
    pageNumber--;
    setPage(pageNumber);
  }

  console.log("this is page:", pageNumber );

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
    .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => {
      const dataSet = res.data.results;
      console.log("this is the result of data:", res.data);
      setData(dataSet);
    })
    .catch(err => console.log("no data retrieved: ", err));
  }, [page]);

  return (
    <div>
        <section className="pageNav">
    <button onClick={reducePage}>Previous</button>
    <button onClick={addPage}>Next</button>
    </section>

    <section className="character-list">
       {data.map(character => {
       return <CharacterCard 
       key={character.id} 
       image={character.image}
       name={character.name}
       episodes={character.episode.length}
       created = {character.created}
       />
      })}
    </section>

    <section className="pageNav">
    <button onClick={reducePage}>Previous</button>
    <button onClick={addPage}>Next</button>
    </section>

    </div>
  );
}
