import React,{ useCallback , useState , FC } from "react";
import { valueOf } from "../../types/common";

export type Windows = ["Adjust","Create","Replace","Strage"];
export const windowKyes:Windows = ["Adjust","Create","Replace","Strage"];
export type WindowKeys = valueOf<Windows>;
export type SetMode = React.Dispatch<React.SetStateAction<WindowKeys>>;

const useWindow:()=>[WindowKeys,SetMode] = () =>{
    const [mode,setMode] = useState<WindowKeys>("Adjust");
    return [mode,setMode];
}

export default useWindow;