import Board from "../Board/Board";
import "./about.css"
import Image from 'next/image'

export default function About(){
    return(
        <>
            <Board>
                <div className="image">
                    <Image
                        src="/foto_diri.jpg"
                        alt="foto_diri"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '50%'}}

                    />
                </div>
                <div className="content-about"> 
                    <div className="wrap-about">
                        <p className="text">
                            Perkenalkan saya <b>MHD AQIL AL FIKRI</b>, mahasiswa program studi teknik informatika, yang memiliki minat besar dalam pengembangan website, baik di sisi frontend maupun backend. Saya sudah familiar HTML, CSS, Javascript, PHP, dan memahami penggunaan tools React.js, Next.js, Node.js dan Laravel. Saya memiliki kemampuan memecahkan masalah dengan baik, analitis, teliti, dan memiliki semangat untuk terus belajar dalam pengembangan website.
                        </p>
                    </div>

                    <div className="content-logo">
                        <a href="https://linked.in/mhdaqilalfikri" target="_blank" rel="noopener noreferrer">
                             <div className="wrap-logo">
                                <div className="logo">
                                    <Image src="/linkedin.png" alt="linkedin" width={28} height={28}/>
                                </div>
                             <p>
                                linkedin.com/mhdaqilalfikri
                             </p>
                             </div>
                        </a>

                        <a href="https://gmail.com/mhdaqilalfikri" target="_blank" rel="noopener noreferrer">
                            <div className="wrap-logo">
                            <div className="logo">
                                <Image src="/gmail.png" alt="gmail" width={25} height={30} />
                            </div>
                            <p>
                                mhdaqilalfikri@gmail.com
                            </p>
                            </div>
                        </a>

                        <a href="https://instagram.com/aqilalfikri20" target="_blank" rel="noopener noreferrer">
                            <div className="wrap-logo">
                                <div className="logo">
                                    <Image src="/ig.png" alt="Instagram" width={28} height={28} />
                                </div>
                                <p>
                                    instagram.com/aqilalfikri20
                                </p>
                            </div>
                        </a>

                        <a href="https://github.com/aqilfikri20" target="_blank" rel="noopener noreferrer">
                            <div className="wrap-logo">
                                <div className="logo">
                                    <Image src="/github.png" alt="Github" width={28} height={28} />
                                </div>
                             
                                <p>github.com/aqilfikri20</p>
                            </div>
                        </a>


                    </div>
                </div>
            </Board>
        </>
    )
}