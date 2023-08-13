import React from "react";
import {createRoot, Root} from "react-dom/client";
import Sologram from "./Sologram";

const root: Root = createRoot(
    document.getElementById("sologram-root")
);

root.render(
    <React.StrictMode>
        <Sologram/>
    </React.StrictMode>
);