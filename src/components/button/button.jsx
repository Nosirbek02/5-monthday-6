import React from "react";
import { styled } from "styled-components";


export const Button=({type, onClick, variant, children,StartIcon, EndIcon, ...props})=>{
    return(
        <CustomButton onClick={onClick} {...props} type={type}>
            {StartIcon && <StartIcon/>}
            hello world
            {EndIcon && <EndIcon/>}
        </CustomButton>
    )
}


const CustomButton=styled.button`
    padding:15px 32px;
    background-color:blueviolet;
    color:#fff;
    display:flex;
    align-items:center;
    border: 2px solid transparent;
    transition:all .3s ease;
    border-radius:15px;
    cursor:pointer;
    gap:10px;

    &:hover{
        border:2px solid blueviolet;
        background-color: #fff;
        color:blueviolet;
    }
`