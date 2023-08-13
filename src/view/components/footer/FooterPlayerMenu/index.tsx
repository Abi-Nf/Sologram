import React from "react";
import {AiOutlineFullscreen} from "react-icons/ai";
import {SlMusicTone} from "react-icons/sl";
import {FaVolumeHigh} from "react-icons/fa6";
import {BsThreeDots} from "react-icons/bs";

const FooterPlayerMenu = () => {
    return (
        <div className="flex w-full gap-2 items-center px-3 justify-end">
            <button className="p-2 w-8 h-8 flex items-center justify-center hover:bg-zinc-700 rounded-xl">
                <SlMusicTone className="w-5 h-5"/>
            </button>
            <button className="p-2 w-8 h-8 flex items-center justify-center hover:bg-zinc-700 rounded-xl">
                <FaVolumeHigh className="w-5 h-5"/>
            </button>
            <button className="p-2 w-8 h-8 flex items-center justify-center hover:bg-zinc-700 rounded-xl">
                <AiOutlineFullscreen className="w-5 h-5"/>
            </button>
            <button className="p-2 w-8 h-8 flex items-center justify-center hover:bg-zinc-700 rounded-xl">
                <BsThreeDots className="w-5 h-5"/>
            </button>
        </div>
    )
}

export default FooterPlayerMenu;