import React from "react";
import "animate.css";
import Link from "next/link";

function Section() {
  return (
    <div>
      <div className="flex justify-center animate__animated animate__bounceInLeft animate__delay-1s animate__slow">
        <div className="flex justify-center flex-col">
          <div className="box-image"></div>
          <p className="mt-7 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            quis.
          </p>
          <div className="flex gap-5 animate__animated animate__zoomIn animate__delay-1s animate__slow">
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
      <div className="flex justify-center animate__animated animate__bounceInRight animate__delay-3s animate__slow">
        <div className="flex justify-center flex-col">
          <div className="box-image"></div>
          <p className="mt-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            quis.
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
      <div className="flex justify-center animate__animated animate__bounceInLeft animate__delay-8s animate__slow">
        <div className="flex justify-center flex-col">
          <div className="box-image"></div>
          <p className="mt-7 text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            quis.
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
      <div className="flex justify-center animate__animated animate__bounceInRight animate__delay-9s animate__slow">
        <div className="flex justify-center flex-col">
          <div className="box-image"></div>
          <p className="mt-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
            quis.
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
    </div>
  );
}

export default Section;
