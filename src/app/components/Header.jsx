import React from "react";

function Header() {
  return (
    <div className="flex justify-center mt-40">
      <div>
        <br />
        <br />
        <h1 className="text-7xl  animate__animated animate__zoomIn animate__delay-1s animate__slow	2s">
          Moving Rectangles <br />
          around (professionally)
        </h1>

        <div className="flex gap-3  mt-3  animate__animated animate__bounceInLeft animate__delay-1s animate__slow	2s">
          <p className="text-xs">Frontend Developer at Upwork</p>

          <p className="text-xs text-gray-500 ">•System Administrator</p>
        </div>

        <div className="flex gap-5 mt-5">
          <button className="btn-1">Get in touch</button>
          <button className="btn-2">View all work</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
