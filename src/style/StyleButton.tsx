import { styled,css,keyframes } from "styled-components"
import {ButtonStyleProps} from '../types/types'
const loadingAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`
const slideIn = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;
const overlayAnimation = keyframes`
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const StyleButton = styled.button<ButtonStyleProps>`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border-radius: 0.9rem;
    font-weight: 600;
    border: none;
    overflow: hidden;
    transition: transform 0.2s ease;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color: ${({ colorBg }) => colorBg || "blue"};
    color: white;
    

    ${({ focused, loading,colorBg }) => {
        if (focused && loading === false) {
            return css`
                border: 2px solid white;
                outline: 3px solid rgb(69, 96, 203);
            `;
        }
        return '';
    }}


   ${({ loading, colorBg, variant }) => {
        const effectiveColorBg = variant === 'secondary' ? 'rgb(201, 201, 201)' : colorBg;

        switch (loading) {
            case true:
                return css`
                    background: linear-gradient(0.25turn, ${effectiveColorBg}, rgb(255, 255, 255), ${effectiveColorBg});
                    background-size: 200% 100%;
                    animation: ${loadingAnimation} 2s infinite;
                `;
            case false:
                return css`
                    &:hover {
                        

                        &::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: rgba(255, 255, 255, 0.3);
                            transform: translateX(-100%);
                            animation: ${overlayAnimation} 0.5s forwards;
                        }
                    }
                    &:active {
                        transform: scale(0.85); // Уменьшение на 10%
                    }

                    background:inherit;
                `
        }
    }}
    



    ${({variant,colorBg})=>{
        switch(variant){
            case 'primary':
                return css`
                    background-color: ${colorBg}; 
                    color: white;
                `
            case 'secondary':
                return css`
                    background-color:rgb(203, 203, 203) ; 
                    color: black;
                `
        }
    }}



    ${({size})=>{
        switch(size){
            case 28:
                return css`
                    min-height:40px;
                    width:170px;
                    padding:0 10px;
                    gap: 4px;
                `
            case 36:
                return css`
                    min-height:50px;
                    width:200px;
                    padding:0 10px;
                    gap: 6px;
                `
            case 56:
                return css`
                    min-height:60px;
                    width:230px;
                    padding:0 10px;
                    gap: 8px;
                    font-size:17px;
                `
        }
    }}
`

