import React from "react";

function Header() {
  return (
    <div className="flex justify-center mt-40">
      <div>
        <h1 className="text-center font-bold">Yılmaz</h1>
        <br />
        <br />
        <h1 className="text-7xl">
          Moving Rectangles <br />
          around (professionally)
        </h1>
        <div className="flex gap-3">
          <p className="text-lg">Frontend Developer at</p>
          <p className="text-lg">Upwork</p>
          <p className="text-lg text-gray-500">•System Administrator</p>
        </div>
        <div className="flex gap-5">
          <button className="btn-1">Get in touch</button>
          <button className="btn-2">View all work</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
