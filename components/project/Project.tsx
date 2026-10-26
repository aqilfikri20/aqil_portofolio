"use client";

import BoardProject from "../BoardProject/BoardProject";
import { useRef, useState } from "react";
import "./project.css";

interface ProjectItem {
  link: string;
  img: string;
  title: string;
  desc: string;
}

const projects: ProjectItem[] = [
    {
    link: "https://github.com/aqilfikri20/library-web",
    img: "/portofolio1.png",
    title: "UPT. Perpustakaan Malikussaleh",
    desc: "Aplikasi Next.js yang terhubung dengan CMS Strapi. Stack: Next.js, Strapi, PostgreSQL",
  },
    {
    link: "https://github.com/aqilfikri20/spk-laptop",
    img: "/portofolio2.png",
    title: "Sistem Pendukung Keputusan Rekomendasi Komputer",
    desc: "Aplikasi React untuk menampilkan spesifikasi komputer dengan SPK Algorithm SAW dan WP. Stack: React, Express.js, MySQL",
  },
      {
    link: "https://github.com/aqilfikri20/management-beasiswa",
    img: "/portofolio3.png",
    title: "Website Manajemen Beasiswa Pelatihan",
    desc: "Website untuk mengelola proses beasiswa, mulai dari publikasi program dan pendaftaran peserta hingga seleksi dan pengelolaan dokumen dengan arsitektur MVC. Stack: React, Express.js, MySQL",
  },
    {
    link: "https://github.com/aqilfikri20/news-web",
    img: "/portofolio4.png",
    title: "Website Berita",
    desc: "Situs berita digital yang menyajikan informasi secara ringkas dan mudah diakses oleh pengunjung. Admin dapat memperbarui konten melalui dashboard, termasuk mengatur berita, kategori, dan penulis. Stack: React, FastAPI, PostgreSQL",
  },
    {
    link: "https://github.com/aqilfikri20/marketplace-katering",
    img: "/portofolio5.png",
    title: "Website Marketplace Katering",
    desc: "Website yang menghubungkan kantor dengan penyedia katering makan siang. Admin Katering dapat mengelola menu, pesanan, dan laporan keuangan. Stack: Laravel, MySQL",
  },
    {
    link: "https://github.com/aqilfikri20/rental-mobil",
    img: "/portofolio6.png",
    title: "Website Rental Mobil",
    desc: "Website yang menyediakan layanan penyewaan mobil secara online. Stack Laravel, MySQL",
  },
  {
    link: "https://github.com/aqilfikri20/media-monitoring",
    img: "/portofolio7.png",
    title: "Website Monitoring Media Postingan",
    desc: "Website untuk mengelola, mencari, dan memantau mention/artikel dari berbagai sumber media. Stack React, Express.js, postgreSQL",
  },
    {
    link: "https://github.com/aqilfikri20/flask-web-kuliner",
    img: "/portofolio8.png",
    title: "Website UMKM Kuliner Lhokseumawe",
    desc: "Website yang menyediakan informasi kuliner di Lhokseumawe. Stack: Flask, MySQL",
  },
    {
    link: "https://github.com/aqilfikri20/management-store",
    img: "/portofolio9.png",
    title: "Website Pengelolaan Toko",
    desc: "Website yang menyediakan fitur untuk mengelola inventaris, penjualan, dan pelanggan. Stack: Laravel, MySQL",
  },
    {
    link: "https://github.com/aqilfikri20/undangan-digital",
    img: "/portofolio10.png",
    title: "Website Undangan Digital",
    desc: "Website untuk membuat undangan pernikahan digital. Pengguna dapat mendaftar, mengisi informasi acara dan keluarga, dan memilih tema undangan. Stack: Next.js, Express.js, MySQL",
  },
      {
    link: "https://github.com/aqilfikri20/rumah-panti-kasih-ibu",
    img: "/portofolio11.png",
    title: "Website Manajemen Pengelolaan Panti Asuhan",
    desc: "Aplikasi web untuk membantu pengurus Rumah Kasih Ibu mengelola data anak dan kegiatan pengasuhan dalam satu tempat. Stack: React, FastAPI, PostgreSQL",
  },
  {
    link: "https://github.com/aqilfikri20/web-story-ai",
    img: "/portofolio12.png",
    title: "Chatbot Sistem Pembuat Cerita Otomatis",
    desc: "Website yang menerapkan manipulasi DOM dan WebStorage.",
  },
  {
    link: "https://github.com/aqilfikri20/deteksi-olahraga",
    img: "/portofolio13.png",
    title: "Website Deteksi Gerakan Olahraga",
    desc: "Web untuk mengunggah dan memantau deteksi gerakan olahraga (push-up, squat, jumping jack). Stack Laravel, Flask, YoloV8",
  },
  {
    link: "https://github.com/aqilfikri20/notes",
    img: "/portofolio14.png",
    title: "Website Notes",
    desc: "Aplikasi React + Vite ini menyimpan catatan ke MySQL melalui API Express. Stack: React, Express.js, MySQL",
  },
  {
    link: "https://github.com/aqilfikri20/contact-app",
    img: "/portofolio15.png",
    title: "Website Contact",
    desc: "Website buku alamat digital untuk menyimpan dan mengelola kontak orang-orang penting dalam satu tempat. Stack: React, Express.js, MySQL",
  },

];


export default function Project() {
  const projectsPerSection = 8;
  const projectSections = Array.from(
    { length: Math.ceil(projects.length / projectsPerSection) },
    (_, index) => projects.slice(index * projectsPerSection, (index + 1) * projectsPerSection),
  );
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    const viewport = carouselRef.current;
    if (!viewport) return;
    viewport.scrollTo({ left: index * viewport.clientWidth, behavior: "smooth" });
    setActiveSlide(index);
  };

  return (
    <BoardProject>
      <section id="projects" className="section-project">
        <div className="container-project">
          <h2 className="project-title">Projects</h2>
          <div
            className="project-carousel"
            ref={carouselRef}
            onScroll={(event) => {
              const viewport = event.currentTarget;
              setActiveSlide(Math.round(viewport.scrollLeft / viewport.clientWidth));
            }}
            aria-label="Daftar project portofolio"
          >
            <div className="project-track">
              {projectSections.map((sectionProjects, sectionIndex) => (
                <div className="project-slide" key={sectionIndex}>
                  <div className="project-grid">
                {sectionProjects.map((project) => (
                  <a
                    href={project.link}
                    className="project-card"
                    key={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="project-card-image">
                      <img src={project.img} alt={project.title} />
                    </div>
                    <div className="project-card-detail">
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                    </div>
                  </a>
                ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="project-pagination" aria-label="Navigasi project">
            <button
              type="button"
              className="project-arrow"
              onClick={() => goToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              aria-label="Project sebelumnya"
            >
              ‹
            </button>
            {projectSections.map((_, index) => (
              <button
                type="button"
                key={index}
                className="project-dot"
                onClick={() => goToSlide(index)}
                aria-label={`Tampilkan kelompok project ${index + 1}`}
                aria-current={index === activeSlide ? "page" : undefined}
              />
            ))}
            <button
              type="button"
              className="project-arrow"
              onClick={() => goToSlide(Math.min(projectSections.length - 1, activeSlide + 1))}
              disabled={activeSlide === projectSections.length - 1}
              aria-label="Project berikutnya"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </BoardProject>
  );
}
