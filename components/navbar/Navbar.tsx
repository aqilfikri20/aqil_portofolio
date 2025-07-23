import "./navbar.css"
import Link from "next/link"

export default function Navbar(){
    return(
    <div className="navbar">
    <nav>
      <Link href="#about" className="nav-item">Tentang Saya</Link>
      <span className="divider"></span>
      <Link href="#edu" className="nav-item">Riwayat Pendidikan</Link>
      <span className="divider"></span>
      <Link href="#exp" className="nav-item">Pengalaman Organisasi</Link>
      <span className="divider"></span>
      <Link href="#skill" className="nav-item">Keahlian</Link>
      <span className="divider"></span>
      <Link href="#sertificate" className="nav-item">Sertifikasi</Link>
      <span className="divider"></span>
      <Link href="#project" className="nav-item">Project</Link>
    </nav>
    </div>

    )
}