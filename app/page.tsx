import About from "@/components/about/About";
import Edu from "@/components/edu/Edu";
import Exp from "@/components/exp/Exp";
import Project from "@/components/project/Project";
import Sertificate from "@/components/sertificate/Sertificate";
import Skill from "@/components/skill/Skill";


export default function Home() {
  return (
    <div className="page-container">
      <div className="background"></div>
      <div className="wrap_body">
        <section id="about"><About /></section>
        <section id="edu"><Edu /></section>
        <section id="exp"><Exp /></section>
        <section id="skill"><Skill /></section>
        <section id="sertificate"><Sertificate /></section>
        <section id="project"><Project/></section>
      </div>
    </div>
  );
}
