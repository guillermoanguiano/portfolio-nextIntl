import { StaticImageData } from "next/image";
import React from "react";

export interface IExperience {
    company: string;
    period: string;
    description: string[];
}

export interface IProject {
    id: number;
    title: string;
    description: string;
    iconList: TIcon[];
    img: StaticImageData;
    link: string;
    createdAt: string;
    internal: string;
}

export type TIcon = {
    icon: React.ReactElement;
    name: string;
}