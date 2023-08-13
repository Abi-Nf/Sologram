import React from "react";
import Overlay from "./overlay";
import {Link} from "react-router-dom";
import {BsGearFill} from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";
import Menu from "./menu";
import {ImSearch} from "react-icons/im";

const Frame = () => {
    return (
        <div className="w-full flex justify-between items-center flex-shrink-0 bg-zinc-800 text-white border-b border-zinc-600">
            <div className="flex gap-1.5 items-center flex-shrink-0">
                <button className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                    <BiArrowBack className="w-5 h-5"/>
                </button>
                <div className="w-40 p-1 h-8 flex items-center justify-center">
                    <span className="w-full h-full bg-gray-400 rounded-2xl flex"></span>
                </div>
                <Menu/>
            </div>
            <div className="w-full app-draggable flex h-8"></div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
                <button className="text-yellow-300 w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                    <ImSearch className="w-5 h-5"/>
                </button>
                <Link to=""
                      className="text-green-400 w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                    <BsGearFill className="w-5 h-5"/>
                </Link>
                <Overlay/>
            </div>
        </div>
    )
}

export default Frame;