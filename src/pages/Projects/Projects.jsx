import React from 'react';
import project1 from '../../assets/pages/project1.png';
import project2 from '../../assets/pages/project2.png';
import project3 from '../../assets/pages/project3.png';
import './Projects.css';

function Projects() {
    return (
        <div className="p-10 h-screen flex flex-col w-screen items-center justify-items-center ">
            <div className="block overflow-hidden">
                <h1 className="flex text-4xl font-black justify-center">
                    Projects
                </h1>
            </div>
            <div className="grid grid-cols-4 py-10 overflow-hidden">
                <span className="overflow-hidden p-2 mx-4 h-[3rem] w-[8rem] flex justify-center items-center border-2 border-black">
                    <span className="font-black">Featured</span>
                </span>
                <span className="overflow-hidden p-2 mx-4 h-[3rem] w-[8rem] flex justify-center items-center border-2 border-black">
                    <span className="font-black">Web app</span>
                </span>
                <span className="overflow-hidden p-2 mx-4 h-[3rem] w-[8rem] flex justify-center items-center border-2 border-black">
                    <span className="font-black">Mobile app</span>
                </span>
                <span className="overflow-hidden p-2 mx-4 h-[3rem] w-[8rem] flex justify-center items-center border-2 border-black">
                    <span className="font-black">Design</span>
                </span>
            </div>
            <div className="h-full grid justify-items-center grid-rows-2 grid-cols-3 py-20 px-20">
                <div className="bgflex items-center justify-items-center overflow-hidden p-2 mx-2">
                    <img
                        src={project1}
                        className="h-full w-full shadow-xl"
                        alt=""
                    />
                </div>
                <div className="flex items-center justify-items-center overflow-hidden p-2 mx-2">
                    <img
                        src={project2}
                        className="h-full w-full shadow-xl"
                        alt=""
                    />
                </div>
                <div className="flex items-center justify-items-center overflow-hidden p-2 mx-2">
                    <img
                        src={project3}
                        className="h-full w-full shadow-xl"
                        alt=""
                    />
                </div>
                <div className="flex items-center justify-items-center overflow-hidden p-2 mx-2">
                    {/* TODO  */}
                </div>

                <div className="flex items-center justify-items-center overflow-hidden">
                    {/* TOOD */}
                </div>
                <div className="flex items-center justify-items-center overflow-hidden">
                    {/* TODO */}
                </div>
            </div>
        </div>
    );
}

export default Projects;
