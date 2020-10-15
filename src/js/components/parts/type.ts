export type Button = {
    name:string,
    arg?:object,
    func:(e:React.MouseEvent,arg?:object)=>void,
    addClass?:string
}

export type TextBox<T> = {
    name:string,
    arg?:object,
    value:T,
    func:(e:React.ChangeEvent,arg?:object)=>void,
    addClass?:string
}

export type NumberBox = TextBox<number> & {
    min:number,
    max:number,
    step:number
}

export type CheckBox = {
    checked:boolean,
    arg?:object,
    func:(e:React.ChangeEvent,arg?:object)=>void,
    name:string,
    addClass?:string
}