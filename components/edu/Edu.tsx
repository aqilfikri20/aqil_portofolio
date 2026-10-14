import Board from "../Board/Board";
import "./edu.css"
export default function Edu(){
    return(
        <>
            <Board>
                    <div className="wrap-edu">
                        <p className="head-title">PENGALAMAN KARIR</p>
                        <div className="content-edu"> 
                            <div className="title">
                                <p>MAGANG WEB DEVELOPER</p>
                                <p>Oktober 2024 - Desember 2024</p>
                            </div>
                            <ul>
                                <p>UPT. PERPUSTAKAAN UNIVERSITAS MALIKUSSALEH</p>
                                <li>Membuat Website Perpustakaan menggunakan Next.js dan Headless CMS Strapi </li>
                                <li>Melakukan Deployment dan Mengelola Server</li>
                                <li>Melakukan Entry Data</li>
                            </ul>
                        </div>

                    <div className="content-edu">
                        <div className="title">
                            <p>Pengelola Website</p>
                            <p>September 2022-Sekarang</p>
                        </div>
                            <ul>
                                <p>TBM. RANGKANG PUSTAKA</p>
                                <li>Membantu Pembuatan Website dengan wordpress  </li>
                                <li>Mengelola Server</li>
                                <li>Memposting Seluruh Kegiatan Pustaka ke dalam Website</li>
                            </ul>
                        </div>
                    </div>
            </Board>
        </>
    )
}