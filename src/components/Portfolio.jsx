import React from "react";
import chesscart from "../assets/portfolio/chesscart.png";
import iot from "../assets/portfolio/iot.png";
import weather from "../assets/portfolio/weather.png";
import chesscoach from "../assets/portfolio/chesscoach.png";
import todo from "../assets/portfolio/todo.png";
import aqi from "../assets/portfolio/aqi.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chesscart,
      title: "ChessCart Live",
      url: "https://chesscart.000webhostapp.com/",
    },
    {
      id: 2,
      src: chesscoach,
      title: "ChessCoach Live",
      url: "http://chesscoachdev.000webhostapp.com/",
    },
    {
      id: 3,
      src: weather,
      title: "Weather App Live",
      url: "https://weatherapp-bd6e5.web.app/",
    },
    {
      id: 4,
      src: todo,
      title: "Todo Live",
      url: "https://todo-35d15.web.app/",
    },
    {
      id: 5,
      src: iot,
      title: "IOT Drive link",
      url: "https://drive.google.com/drive/folders/1c8T45FKK8i9idy_JoLxOs6ydRw8JIBqE",
    },
    {
      id: 6,
      src: aqi,
      title: "AQI Drive link",
      url: "https://drive.google.com/drive/folders/1c8T45FKK8i9idy_JoLxOs6ydRw8JIBqE",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, url }) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
                
                <button
                  className="px-3 py-1 m-4 duration-200 hover:scale-105"
                >
                  {title}
                </button>

                
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
