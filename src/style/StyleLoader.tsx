import { styled,css, keyframes } from "styled-components"
import {ButtonloaderProps} from '../types/types'

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;


export const StyleLoader = styled.div<ButtonloaderProps>`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  animation:${spin} 1.3s linear infinite;



  ${({variant})=>{
    switch(variant){
      case 'primary':
        return css`
          border: 3px solid rgb(255, 255, 255);
          border-top: 3px solid transparent;     
        `
      case 'secondary':
        return css`
          border: 3px solid rgb(0, 0, 0);
          border-top: 3px solid transparent;   
        `
    }
  }}


`

