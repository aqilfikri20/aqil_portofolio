"use client"

import "./board-project.css"
import React from "react"
export default function BoardProject({ children, className = "" }: { children: React.ReactNode; className?: string }){
    return(
        <div className={`board-project ${className}`}>
            {children}
        </div>
    )
}
