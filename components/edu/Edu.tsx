import Board from "../Board/Board";
import "./edu.css"
export default function Edu(){
    return(
        <>
            <Board>
                    <div className="wrap-edu">
                        <p className="head-title">Riwayat Pendidikan</p>
                        <div className="content-edu"> 
                            <div className="title">
                                <p>SMAS AL Ma`Shum Kisaran Barat</p>
                                <p>Agustus 2019-April 2022</p>
                            </div>
                            <ul>
                                <p>Jurusan IPA</p>
                                <li>Juara umum dengan nilai tertinggi angkatan 2022</li>
                                <li>Perwakilan Kompetisi Sains Nasional Matematika selama 2 tahun</li>
                                <li>Juara 3 Olimpiade Universitas Asahan bidang matematika tahun 2021</li>
                                <li>Juara 2 Olimpiade Universitas Asahan bidang matematika tahun 2022</li>
                            </ul>
                        </div>

                    <div className="content-edu">
                        <div className="title">
                            <p>Universitas Malikussaleh</p>
                            <p>September 2022-Sekarang</p>
                        </div>
                        <div>
                            <ul>
                                <p>Mata Kuliah Relevan</p>
                                <li>
                                Algoritma dan Pemrograman 1 | Algoritma dan Pemrograman 2 | Interaksi
                                Manusia dan Komputer | Struktur Data | Pemrograman Visual | Sistem
                                Operasi | Pemrograman Web | Desain dan Analisis Algoritma
                                </li>
                            </ul>

                            <ul>
                                <p>Tugas Proyek Kuliah</p>
                                <li>
                                    Aplikasi Sistem Informasi Antrian Klinik <br />(Membuat aplikasi
                                    sistem informasi menggunan IDE Borland Delphi)
                                </li>
                                <li>
                                    Pengembangan Desain Antarmuka Website Berita<br />
                                    (Mempelajari pengunanaan HTML dan CSS lebih kreatif)
                                </li>
                                <li>
                                    Website To-do List<br />
                                    (Membuat website dengan event dan Document Object Model)
                                </li>
                                <li>
                                    Website Sistem Informasi Kuliner Lhokseumawe <br/>
                                    (Membuat website dengan menggunakan micro framework flask dan mempelajari lebih dalam API)
                                </li>
                                <li>
                                    Website Sistem Rekomendasi Laptop<br/>
                                    (Membuat website dengan menggunakan micro framework flask dengan fitur sistem pendukung keputusan algoritma SAW dan AHP dalam menentukan laptop terbaik)
                                </li>
                            </ul>

                            <ul>
                                <p>Magang Kuliah (14 Oktober 2025 - 14 Desember 2025)</p>
                                <li>
                                    Magang di Perpustakaan Universitas Malikussaleh<br />
                                    (Membuat website perpustakaan menggunakan Next.js dan Headless CMS Strapi)
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
            </Board>
        </>
    )
}