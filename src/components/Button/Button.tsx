import useClickContext from '../../hooks'
import { ButtonProps } from '../../types/types';
import { Counter } from '../Counter/Couner';
import {StyleButton} from '../../style/StyleButton'
import {StyleLoader} from '../../style/StyleLoader'

export const Button = ({children,size,colorBg,variant,count,focused,vord}:ButtonProps) => {


  const context = useClickContext();
  const {handleClick,loading} = context;



  return (

      <div className='button' onClick={handleClick}>
        <StyleButton size={size} variant={variant} colorBg={colorBg} disabled={loading} loading={loading} focused={focused}>
          {loading? 
            <StyleLoader size={size} loading={loading} variant={variant}/>  
          : 
          <>
            <span className='sss'>{vord ? vord : <>Что сделать?</>}</span>
            {count ? <div>{children}</div> : ''}          
          </>
          }

        </StyleButton>
      </div>
      
  )
}

Button.Counter = Counter


