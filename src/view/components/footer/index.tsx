import React from "react";
import FooterSlider from "./FooterSlider";
import FooterMeta from "./FooterMeta";
import FooterPlayer from "./FooterPlayer";
import FooterPlayerMenu from "./FooterPlayerMenu";

const Footer = () => {
    return (
        <div className="bg-zinc-800 text-white flex-shrink-0 flex-col flex w-full">
            <FooterSlider/>

            <div className="flex w-full h-full justify-between items-center pb-2">
                <FooterMeta/>
                <FooterPlayer/>
                <FooterPlayerMenu/>
            </div>
        </div>
    )
}

export default Footer;