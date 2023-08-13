import {Context, createContext} from "react";
import {ClientContext} from "../types";

export const clientContext: Context<ClientContext>  = createContext(null);