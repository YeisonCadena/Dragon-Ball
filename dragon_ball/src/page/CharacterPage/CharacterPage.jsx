import "./CharacterPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharCard from "../../components/CharCard/CharCard";

const CharacterPage = () => {
  const [data, setData] = useState([]);

  let { specie } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dragonball-api.com/api/characters?limit=60`
        );
        const modifiedData = response.data.items.map((char) => ({
          ...char,
          race: char.race === "Human" ? "Human" : "Alien",
        }));  
        setData(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);//se ejecuta solo una vez despues que se monta

  const tmp = data.filter((elem) => elem.race === specie);

  return (
    <main id="character-page">
      <h1 id="title-character">Personajes</h1>
      <div id="characters-race">
        {tmp.map((element) => (
          <div key={element.id}>
            <Link to={"/about/" + element.id}>
              <CharCard
                img={element.image}
                nombre={element.name}
                raza={element.race}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CharacterPage;
