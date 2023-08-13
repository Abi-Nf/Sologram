import React from "react";
import style from "./index.module.css";

const FooterSlider = () => {
    return (
        <div className="w-full flex items-center gap-3 px-2 py-1">
            <span className="text-xs">
                00:00
            </span>

            <div className="w-full flex items-center justify-center">
                <input type="range"
                       className={`w-full bg-zinc-500 h-1 appearance-none rounded-lg ${style.sliderButton}`}
                />
            </div>

            <span className="text-xs">
                00:00
            </span>
        </div>
    )
}

export default FooterSlider;