import Board from "../Board/Board";
import Image from 'next/image'
import "./skill.css"

export default function Skill(){
    return(
        <>
            <Board>
                <div className="skill-content">
                    <p className="title-skill"> Keahlian</p>
                    <p className="sub-title">Hard-Skill</p>
                    <div className="wrap-skill1">
                        <div className="wrap-skill-left">
                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/html.png" alt="html" width={28} height={28}/>
                                </div>
                                <p>HTML</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/css.png" alt="css" width={28} height={28}/>
                                </div>
                                <p>CSS</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/javascript.png" alt="javascript" width={28} height={28}/>
                                </div>
                                <p>JavaScript</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/php.png" alt="php" width={28} height={28}/>
                                </div>
                                <p>PHP</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/python.png" alt="python" width={28} height={28}/>
                                </div>
                                <p>Python</p>
                            </div>
                        </div>

                        <div className="wrap-skill-center">
                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/c++.png" alt="c++" width={28} height={28}/>
                                </div>
                                <p>C++</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/react.png" alt="react" width={28} height={28}/>
                                </div>
                                <p>React.js</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/vite.png" alt="vite" width={28} height={28}/>
                                </div>
                                <p>Vite.js</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/nextjs.png" alt="nextjs" width={28} height={28}/>
                                </div>
                                <p>Next.js</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/node.png" alt="node" width={28} height={28}/>
                                </div>
                                <p>Node.js</p>
                            </div>
                        </div>                    

                        <div className="wrap-skill-right">
                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/laravel.png" alt="laravel" width={28} height={28}/>
                                </div>
                                <p>Laravel</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/flask.png" alt="flask" width={28} height={28}/>
                                </div>
                                <p>Flask</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/mysql.png" alt="mysql" width={28} height={28}/>
                                </div>
                                <p>MySQL</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/bootstrap.png" alt="bootstrap" width={28} height={28}/>
                                </div>
                                <p>Bootstrap</p>
                            </div>

                            <div className="wrap-logo">
                                <div className="logo-skill">
                                    <Image src="/figma.png" alt="figma" width={28} height={28}/>
                                </div>
                                <p>Figma</p>
                            </div>
                        </div> 
                    </div>
 
                    <div className="wrap-skill2">
                        <p className="sub-title">Soft-Skill</p>
                        <p>Kemampuan Memecahkan Masalah | Bekerja dalam Tim | Komunikasi yang baik</p>
                    </div>  
                </div>  
            </Board>
        </>
    )
}