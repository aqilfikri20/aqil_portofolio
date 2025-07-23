"use client"; // Jika menggunakan Next.js App Router

import { useState, useEffect } from "react";
import Board from "../Board/Board";
import "./project.css";

interface ProjectItem {
  link: string;
  img: string;
  title: string;
  desc: string;
}

export default function Project() {
  const projects: ProjectItem[] = [
    {
      link: "https://aqilfikri20.github.io/to-do/",
      img: "project1.png",
      title: "Website To-do List",
      desc: "Website yang menerapkan teknik manipulasi DOM dan WebStorage (Klik card ini untuk membuka website)."
    },
    {
      link: "https://aqilfikri20.github.io/contact-app/",
      img: "project2.png",
      title: "Website Contact",
      desc: "Web aplikasi dengan React yang menerapkan reusable component, stateful component, controlled component, pemberian proptype, Lifecycle, API. (Klik card ini untuk membuka website)."
    },
    {
      link: "https://aqilfikri20.github.io/laptop1/",
      img: "project3.png",
      title: "Website Spesifikasi Komputer",
      desc: "Web aplikasi dengan React yang menerapkan reusable component, stateful component, controlled component, API. (Klik card ini untuk membuka website)."
    }
  ];

  const [index, setIndex] = useState<number>(0);

  const showSlide = (newIndex: number): void => {
    if (newIndex < 0) {
      setIndex(projects.length - 1);
    } else if (newIndex >= projects.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => showSlide(index + 1), 10000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Board>
      <section id="projects" className="section-project">
        <div className="h2-title">
          <h2>Projects</h2>
        </div>
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <div className="carousel-item" key={i}>
                <a
                  href={project.link}
                  className="card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-img">
                    <img src={project.img} alt={`Project ${i + 1}`} />
                  </div>
                  <div className="card-detail">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <button className="carousel-prev" onClick={() => showSlide(index - 1)}>❮</button>
          <button className="carousel-next" onClick={() => showSlide(index + 1)}>❯</button>
        </div>
      </section>
    </Board>
  );
}
