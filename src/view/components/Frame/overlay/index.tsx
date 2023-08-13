import React from "react";
import {AiOutlineClose} from "react-icons/ai";
import {FaRegWindowMaximize, FaRegWindowMinimize, FaRegWindowRestore} from "react-icons/fa";

const Overlay = () => {
    return (
        <div className="flex">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                <FaRegWindowMinimize className="w-4.5 h-4.5"/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                <FaRegWindowRestore className="w-4.5 h-4.5"/>
                {/*<FaRegWindowMaximize className="w-4.5 h-4.5"/>*/}
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-red-500">
                <AiOutlineClose className="w-3/5 h-3/5"/>
            </button>
        </div>
    )
}

export default Overlay;