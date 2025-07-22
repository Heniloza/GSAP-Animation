import React from "react";
import { featureLists, goodLists } from "../constants";

function Art() {
  return (
    <div id="art">
      <div className=" mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt=""
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-16">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-worthy perfection</h2>
          <div id="masked-content">
            <h3>Made With Craft, Poured With Passion</h3>
            <p>
              This isn't just a drink a carefully crafted moment made just for
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Art;
