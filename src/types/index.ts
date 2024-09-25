import { StaticImageData } from "next/image";
import React from "react";
import { IconType } from "react-icons";

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
}

export type TIcon = {
    icon: React.ReactElement<IconType>;
    name: string;
}