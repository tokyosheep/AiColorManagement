import React,{ useCallback , useState } from "react";

type valueOf<T> = T[keyof T];

export type Windows = ["Adjust","Create","Replace","Strage"];
export type WindowKeys = valueOf<Windows>;
export type SetMode = React.Dispatch<React.SetStateAction<WindowKeys>>;

const useWindow = () =>{
    const [mode,setMode] = useState<WindowKeys>("Adjust");
    return [mode,setMode];
}

export default useWindow;