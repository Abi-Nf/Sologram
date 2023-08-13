import BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export const BrowserWindowConfig: BrowserWindowConstructorOptions = {
    title: "Sologram",
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
}