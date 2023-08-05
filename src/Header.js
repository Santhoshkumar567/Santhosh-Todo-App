
import React from "react"

function Header({heading}) {
    return (
        <header>
              <h1 className="text-5xl font-bold text-white bg-slate-950 text-center  justify-center p-7 ">
                {heading}
              </h1>
        </header>
    )
}

export default Header