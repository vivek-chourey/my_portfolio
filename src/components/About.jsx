import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello there! My name is Vivek Chourey, and I am a web developer with
          expertise in data structures, and algorithms. I have a passion
          for creating efficient and elegant solutions to complex problems. In
          addition to my web development skills, I also have experience with IoT
          and Arduino development. I enjoy working with hardware and exploring
          the possibilities of connected devices. My background in computer
          science and programming has given me a strong foundation in data
          structures and algorithms. I enjoy applying these concepts to create
          solutions that are both elegant and efficient.
        </p>

        <br />

        <p className="text-xl">
          As a web developer, I am constantly learning and exploring new
          technologies. I believe that staying up-to-date with the latest tools
          and trends is essential for creating successful projects. I am always
          looking for new challenges and opportunities to grow as a developer.
          If you are looking for a skilled web developer with expertise in 
          data structures, and algorithms, I would love to hear from you. Let's
          work together to create innovative solutions that meet your needs and
          exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
