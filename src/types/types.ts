import { ReactNode } from "react"

export type MainProps = {
    children: ReactNode;
}

export type CounterProps = {
    vord?:string;
    size:number;
    variant:'primary' | 'secondary';
    pulse:boolean;
    color:string;
    
}

export type ContextCkick={
    counter:number
    handleClick: ()=> void
    vord?:string
    displayValue: number | string
    load: ()=> void
    loading:boolean
    firstRender:boolean
}

export type ClickProviderProps = {
    children: ReactNode
};

export type ButtonProps = {
    children: ReactNode;
    size:number
    colorBg: string
    variant:string
    count:boolean
    focused:boolean
    vord?:string
}


export interface CounterStyleProps{
    size:number
    variant:'primary' | 'secondary'
    color: string
}

export interface CounterStyplePulse{
    size: number
    variant:'primary' | 'secondary'
    pulse: boolean
    color: string
}


export interface ButtonStyleProps{
    size: number
    variant:string
    colorBg:string
    loading:boolean
    focused:boolean
}

export interface ButtonloaderProps{
    size: number
    loading: boolean
    variant:string
}