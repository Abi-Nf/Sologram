import React from "react";
import {NavLink} from "react-router-dom";
import {BiHome} from "react-icons/bi";
import {HiMusicNote} from "react-icons/hi";
import {LuListMusic} from "react-icons/lu";
import {BsDiscFill} from "react-icons/bs";

const Menu = () => {
    return (
        <div className="flex gap-1">
            <NavLink to="/" className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                <BiHome className="w-5 h-5"/>
            </NavLink>
            <NavLink to="/" className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                <HiMusicNote className="w-5 h-5"/>
            </NavLink>
            <NavLink to="/" className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                <LuListMusic className="w-5 h-5"/>
            </NavLink>
            <NavLink to="/" className="w-8 h-8 flex items-center justify-center hover:bg-zinc-700">
                <BsDiscFill className="w-5 h-5"/>
            </NavLink>
        </div>
    )
}

export default Menu;