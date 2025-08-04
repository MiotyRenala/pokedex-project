import {Routes, Route, Link} from "react-router-dom";
import PokemonPage from "@/pages/PokemonPage.tsx"
import HomePage from "@/pages/HomePage.tsx";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </>
  )
}