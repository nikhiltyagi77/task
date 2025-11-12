import React from "react";

export default function Card({heading, des}) {
  return (
    <div>
      <section className="">
        <div className="p-4 border-2 border-gray-800 rounded-[10px]">
             <h1>{heading}</h1>
             <p>{des}</p>
        </div>
      </section>
    </div>
  );
}
