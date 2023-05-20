'use client';

import css from "@/components/Button/Button.module.scss";
import { FunctionComponent } from "react";

interface ButtonProps {
    children?: any;
    className?: any;
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className={`${props.className} ${css.button}`}>
            {props.children}
        </button>
    );
};