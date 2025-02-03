import { useContext } from 'react'
import {CounterProps} from '../../types/types'
import {ContextClick} from '../CounterProviders/ContextClick'
import { StyledCounter } from '../../style/CounterStyle'
import {PulsatingCircle} from '../../style/CounterStyle'

export const Counter = ({vord,size,variant,pulse,color}:CounterProps) => {
    const context = useContext(ContextClick)
    if(context === undefined){
      throw new Error ('Error')
    }
    const {displayValue} = context
    const newWord = vord?.slice(0,3)
  
    return (
      <div className='counter_flex'>
        <StyledCounter size={size} variant={variant} color={color}>
            <div>{newWord ? newWord : size > 12 ? displayValue : ''}</div>
        </StyledCounter>
        {pulse && <PulsatingCircle size={size} variant={variant} pulse={pulse} color={color}/>}
      </div>
    )
}