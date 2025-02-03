import styled, { css,keyframes  } from 'styled-components';
import { CounterStyleProps } from "../types/types";
import {CounterStyplePulse} from '../types/types'

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(3);
    opacity: 0;
  }
  100% {
    transform: scale(3);
    opacity:0;
  }
`;

export const StyledCounter = styled.div<CounterStyleProps>`

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:24px;
    ${({color}) => {
        return css`
           background-color: ${color}; 
        `
    }}

    ${({size}) => {
        switch (size) {
            case 24:
                return css `
                    font-size:19px;
                    padding:0 5px;
                    min-height:29px;
                    min-width:19px;
                    stroke-width:3px;
                `;
            case 20:
                return css `
                    font-size:16px;
                    padding:0 5px;
                    min-height:24px;
                    min-width:16px;
                    stroke-width:2px;
                `;
            case 16:
                return css `
                    font-size:13px;
                    padding:0 5px;
                    min-height:22px;
                    min-width:12px;
                    stroke-width:2px;
                `;
            case 12:
                return css `
                    min-height:14px;
                    min-width:14px;
                    stroke-width:2px;
                `;
            case 8:
                return css `
                    min-height:8px;
                    min-width:8px;
                    stroke-width:1px;
                `;
                        
        }
    }}

    ${({ variant, color }) => {
        switch (variant) {
            case 'primary':
                return css`
                    background-color: ${color}; 
                    color: white;
                `;
            case 'secondary':
                return css`
                    background-color: #A9A9A9 ; 
                    color: white;
                `;
        }
    }}
`;
export const PulsatingCircle = styled.div<CounterStyplePulse>`

    top:0px;
    bottom:0px;
    right:0px;
    left:0px;
    position:absolute;
    border-radius: 50%;
    animation: ${pulse} 2s infinite;


    ${({ variant ,color}) => {
        switch (variant) {
            case 'primary':
                return css`
                    background-color: ${color}; 
                    color: white;
                `;
            case 'secondary':
                return css`
                    background-color: #A9A9A9 ; 
                    color: yellow;
                `;
        }
    }}

    ${({size}) => {
        switch (size) {
            case 24:
                return css `
                    min-height:24px;
                    min-width:24px;
                `;
            case 20:
                return css `
                    min-height:20px;
                    min-width:20px;
                `;
            case 16:
                return css `
                     min-height:16px;
                    min-width:16px;
                `;
            case 12:
                return css `
                    min-height:12px;
                    min-width:12px;
                `;
            case 8:
                return css `
                    min-height:8px;
                    min-width:8px;
                `;
                        
        }
    }}
`;
