import React from "react"
const Footer = ({items}) => {

  return (
    <footer className="footer bg-slate-950 ">
      <div className=" uppercase font-bold text-2xl p-5 text-center mx-auto text-white  ">

          {/* check the lenght of the list put item or items depends upon the lenght */}
          {items.length} {items.length===1 || items.length===0 ? "item" : "items"}
          
      </div>
   </footer>
  )
}

export default Footer