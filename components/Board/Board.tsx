"use client"

import "./board.css"
import React from "react"
export default function Board({ children }: { children: React.ReactNode }){
    return(
        <div className="board">
            {children}
        </div>
    )
}
