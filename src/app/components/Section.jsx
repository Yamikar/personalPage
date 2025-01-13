import React from "react";

function Section() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-col">
        <div className="box-image"></div>
        <p className="mt-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, quis.
        </p>
        <div className="flex gap-5">
          <div>
            <h2 className="text-3xl">2-3X-</h2>
            <p>Lorem, ipsum.</p>
          </div>
          <div>
            <h2 className="text-3xl">2-3X-</h2>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <p className="text-xs text-gray-300">Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
}

export default Section;
