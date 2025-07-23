import Board from "../Board/Board";
import "./exp.css"

export default function Exp(){
    return(
        <>
            <Board>
                    <div className="wrap-exp">
                        <p className="head-title">Pengalaman Organisasi</p>
                        <div className="content-exp"> 
                            <div className="title">
                                <p>Ikatan Mahasiswa Asahan (IMASA)</p>
                                <p>Oktober 2022-Sekarang</p>
                            </div>
                            <ul>
                                <p>Anggota Divisi Media dan Perlengkapan</p>
                                <li>Mengatur Ketersediaan media dan perlengkapan dalam kegiatan atau acara yang diselenggarakan IMASA</li>
                              
                            </ul>
                        </div>

                    <div className="content-exp">
                        <div className="title">
                            <p>Informatic Study Platform (ISP)</p>
                            <p>Maret 2024-sekarang</p>
                        </div>
                        <div>
                            <ul>
                                <p>Anggota Kelas Frontend</p>
                                <li>Mempelajari Pengembangan dan Desain Antarmuka Website</li>
                                <li>Mempelajari Tools dan Framework Frontend</li>
                                <li>Membuat Project Bersama</li>
                            </ul>
                        </div>
                        </div>
                    </div>
            </Board>
        </>
    )
}