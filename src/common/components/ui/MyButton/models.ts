import { MouseEventHandler } from "react";
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial';
export interface MyButtonProps {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    color?: string;
    hoverColor?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    borderHover?: string;
    textSize?: string;
    hoverTextColor?: string;
    textColor?: string;
    fontWeight?: string;
    width?: string;
    textTransform?: TextTransform;
    disabled?: boolean;
    lineHeight?: string;
    
}


export interface MyButtonVariantProps {
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
    padding?: string,
    width?: string,
    fontWeight?: string;
    textTransform?: TextTransform;
}