import React from "react";

const FooterMeta = () => {
    return (
        <div className="px-3 flex items-center justify-center w-full">
            <div className="p-1 flex gap-2 items-center justify-center hover:bg-zinc-700 rounded-md w-full">
                <div className="w-20 h-20 bg-red-500 rounded-md flex-shrink-0"></div>
                <div className="flex flex-col w-full">
                    <span className="text-xl font-bold">Title</span>
                    <span>album</span>
                </div>
            </div>
        </div>
    )
}

export default FooterMeta;