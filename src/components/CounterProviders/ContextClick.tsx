import React, { useCallback, useMemo } from 'react';
import { createContext,useState,useEffect } from "react";
import {ContextCkick} from '../../types/types'
import {ClickProviderProps} from '../../types/types'

type Data = {
  id: number
  data: string
}


export const ContextClick = createContext<ContextCkick | undefined>(undefined)

export const ClickProvider: React.FC<ClickProviderProps> = ({ children }) => {

  const [counter, setCounter] = useState(1)

  const fakeApi = (): Promise<Data> =>{
    return new Promise((res)=>{
      setTimeout(()=>{
        res({id:1, data:'Element'})
      },2000)
      
    })
  }
  const [data,setData] = useState<Data>()
  const [loading, setLoading] = useState<boolean>(false)
  const [firstRender, serFirsRender] = useState<boolean>(true)
  
  

  const load = useCallback(async () => {
    try {
      setLoading(true);
      console.log('start')
      const res = await fakeApi()
      setData(res)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
      console.log('stop')
    }
    serFirsRender(false)
  },[])
  
  useEffect(()=>{
    load()
  },[])

  const handleClick = useCallback(() => {
    load()
    if(counter >= 99){
      setCounter(98)
    }
    setCounter(counter => counter + 1)
  },[load])

  const displayValue = useMemo(()=>(counter >= 99 ? '99+' : counter),[counter])

  const value = useMemo(()=>({
    counter, 
    handleClick , 
    displayValue, 
    load,loading,
    firstRender
  }),[counter,handleClick,displayValue,load,loading,firstRender])

  return (
    <ContextClick.Provider value={value}>
      { children }
    </ContextClick.Provider>
  )

}