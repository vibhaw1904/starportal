import Header from "@/components/Header";
import Svg from "@/components/Svg";
import TopCard from "@/components/Topcard";
export default function Home() {
  return (
    <main className="">
    <Header/>
    <TopCard   title="Basics of Crypto"
        description="The safest and easiest place to start your crypto journey!"
        quests={6}
        xp={1490}
        imageUrl="card1.png"/>
    <Svg/>
    </main>
  );
}
