'use client';

import css from "@/app/components/Button/Button.module.scss";
import { FunctionComponent } from "react";

interface ButtonProps {
    children?: any;
    className?: any;
    onClick?: () => void;
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    const handleClick = () => {
        if (!props.onClick) return;
        return props.onClick();
    };

    return (
        <button className={`${props.className} ${css.button}`} onClick={handleClick}>
            {props.children}
        </button>
    );
};