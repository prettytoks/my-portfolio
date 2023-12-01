import React from "react";
import userData from "../constants/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  //faInstagram,
  //faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-600">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div className="dark:text-gray-300">
            <p>&copy; 2023 Cindy Ogidi</p>
          </div>
          <div>

            {/*}
            <div className="dark:text-gray-300">
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-pink-500 rounded-md px-2 py-1  hover:text-gray-50"
                  href="https://prettytoks.github.io"
                  target="_blank"
                >
                  Prettytoks
                </a>
              </div>
            </div>
            */}
          </div>
   


          <div className="space-x-4 flex flex-row items-center">
            

            <a href={userData.socialLinks.github} target="_blank">
                      <FontAwesomeIcon icon={faGithub} 
                        className="text-3xl font-normal text-gray-600 dark:text-gray-300 hover:-translate-y-1 transition-transform"
                      />
                </a>

              {/*}
                <a href={userData.socialLinks.instagram}>
                      <FontAwesomeIcon icon={faInstagram} 
                        className="text-3xl font-normal text-gray-600 dark:text-gray-300 hover:-translate-y-1 transition-transform"
                      />
                </a>

                <a href={userData.socialLinks.twitter}>
                      <FontAwesomeIcon icon={faTwitter} 
                        className="text-3xl font-normal text-gray-600 dark:text-gray-300 hover:-translate-y-1 transition-transform"
                      />
                </a>
                */}

                <a href={userData.socialLinks.linkedin} target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} 
                        className="text-3xl font-normal text-gray-600 dark:text-gray-300 hover:-translate-y-1 transition-transform"
                      />
                </a>
          
          </div>
        </div>
      </div>
    </div>
  );
}