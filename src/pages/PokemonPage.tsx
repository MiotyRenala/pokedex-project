import {useParams} from "react-router-dom";

const PokemonPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>PokemonPage for {id}</h1>
    </>
  )
}

export default PokemonPage;