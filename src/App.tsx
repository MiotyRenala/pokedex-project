import {Heart, Swords, Shield, Zap, ArrowLeft} from "lucide-react";
import BannerIntro from "@/components/templates/BannerIntro.tsx";
import Stats from "@/components/templates/Stats.tsx";
import Wheight from "@/components/ui/Wheight.tsx";
import {Routes, Route, Link} from "react-router-dom";
import PokemonPage from "@/pages/PokemonPage.tsx"

export default function App() {

  const stats = [
    {label: "Hp", icon: Heart, value: 45},
    {label: "Attack", icon: Swords, value: 49},
    {label: "Defense", icon: Shield, value: 49},
    {label: "Special Attack", icon: Zap, value: 65},
    {label: "Special Defense", icon: Shield, value: 65},
    {label: "Speed", icon: Zap, value: 45},
  ];

  return (
    <>
      <Routes>
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
      <div className="bg-white">
        <BannerIntro/>
        <hr/>
        <div className="space-y-4 rounded-xl p-24">
          <Link
            to="/pokemon/1"
            className="mb-4 text-white border-[0.5px] border-white bg-green-400 rounded-lg px-4 py-2 flex items-center gap-2">
            <ArrowLeft size={18} className="text-white text-sm"/>
            Retour
          </Link>

          <Stats stats={stats}/>
          <Wheight height={20} weight={30}/>
        </div>
      </div>
    </>
  );
}