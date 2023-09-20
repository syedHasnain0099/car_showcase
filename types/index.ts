import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    btnType?: "button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManuFacturerProps {
    manufacturer: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    setManuFacturer: (manufacturer: string) => void;
  }
  export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }
  export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }