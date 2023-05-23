"use client";

import { FunctionComponent, useEffect, useRef, useState } from "react";
import css from "@/app/components/InputQty/InputQty.module.scss";

interface InputQtyProps {
    currentPrice: number;
    handlePrice: (result: number, qty: number, index?: number) => void;
    qty?: number;
}

export const InputQty: FunctionComponent<InputQtyProps> = (props: InputQtyProps) => {
    const ref = useRef(false);
    const [count, setCount] = useState(props.qty ?? 0);

    useEffect(() => {
        if (ref.current) {
            let result: number = calculatePrice(props.currentPrice, count) as number;
            props.handlePrice(result, count);
            ref.current = false;
        }
    }, [count]);

    const calculatePrice = (price: number, c: number) => {
        return price * c;
    };

    const handleMin = () => {
        if (count === 0) return;
        setCount(prev => prev - 1);
        ref.current = true;
    };

    const handleAdd = () => {
        setCount(count + 1);
        ref.current = true;
    };

    return (
        <div className={css.wrapper_qty}>
            <button type="button" className={`${css.button_min}`} id="button-min" onClick={handleMin}>
                <img src="/img/minus.png" />
            </button>
            <input id="quantity-input" type="text" className={`${css.input_qty}`} value={count} maxLength={2} disabled />
            <button type="button" className={`${css.button_add}`} id="button-add" onClick={handleAdd}>
                <img src="/img/plus.png" />
            </button>
        </div>
    );
};