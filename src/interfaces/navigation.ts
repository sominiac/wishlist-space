import React from "react";

export enum ERoutes {
    MAIN = "/",
    SPACES = "/spaces"
}

export interface IRoutes {
    path: ERoutes;
    element: React.ReactElement;
}