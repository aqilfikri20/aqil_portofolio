import About from "@/components/about/About";
import Edu from "@/components/edu/Edu";
import Exp from "@/components/exp/Exp";
import Sertificate from "@/components/sertificate/Sertificate";
import Skill from "@/components/skill/Skill";


export default function Home() {
  return (
    <div className="page-container">
      <div className="background"></div>
      <div className="wrap_body">
        <section><About /></section>
        <section><Edu /></section>
        <section><Exp /></section>
        <section><Skill /></section>
        <section><Sertificate /></section>
      </div>
    </div>
  );
}
