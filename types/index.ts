import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    btnType?: "button" | "submit";
    handleClick?:MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }