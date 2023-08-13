import React from "react";
import {BsPlayFill} from "react-icons/bs";
import {FaRandom, FaStepBackward, FaStepForward} from "react-icons/fa";
import {SlLoop} from "react-icons/sl";

const FooterPlayer = () => {
    return (
        <div className="flex gap-2.5 items-center justify-center w-full">
            <button className="w-8 h-8 p-1 flex items-center justify-center hover:bg-zinc-700 rounded-full">
                <FaRandom className="w-4 h-4"/>
            </button>
            <button className="w-9 h-9 flex items-center justify-center p-2 bg-zinc-700 rounded-full hover:bg-gray-700">
                <FaStepBackward className="w-4 h-4"/>
            </button>
            <button className="w-12 h-12 flex items-center justify-center p-2 bg-zinc-700 rounded-full hover:bg-gray-700">
                <BsPlayFill className="w-8 h-8"/>
            </button>
            <button className="w-9 h-9 flex items-center justify-center p-2 bg-zinc-700 rounded-full hover:bg-gray-700">
                <FaStepForward className="w-4 h-4"/>
            </button>
            <button className="w-8 h-8 p-1 flex items-center justify-center hover:bg-zinc-700 rounded-full">
                <SlLoop className="w-4 h-4"/>
            </button>
        </div>
    )
}

export default FooterPlayer;