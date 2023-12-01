import React from "react";
import userData from "../constants/data";

export default function Page() {
  return (

    <section className="container mx-auto px-10 py-28">

      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-500 px-8">

        
        <h1 className="text-5xl font-bold text-pink-500 text-center pt-24">
              Projects
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 pb-28">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              skills={proj.skills}
            />
          ))}
        </div>
        
      </div>

    </section>

  );
}

const ProjectCard = ({ title, link, imgUrl, number, skills }:any) => {
  return (
    <>
      <a href={link} className="w-full block " target="_blank">
        <div className="relative overflow-hidden shadow-2xl">
          <div className="h-72 object-cover">
            <img
              src={imgUrl}
              alt={title}
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-pink-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-gray-400 font-bold text-xl">
            {number.length === 1 ? "0" + number : number}
          </h1>
          
        </div>
        <h3 className="pt-6">{skills}</h3>
        
      </a>
   
    </>
  );
};
