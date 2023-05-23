"use client";

import { FunctionComponent, useEffect, useRef, useState } from "react";
import css from "@/app/components/GrandTotal/GrandTotal.module.scss";
import numeral from "numeral";
import { Button } from "../Button/Button";
import { InputQty } from "../InputQty/InputQty";
import { useCartStore } from "@/store/web.store";
import { ToastContainer, toast } from "react-toastify";

interface GrandTotalProps {
    orderitem: any;
}

export const GrandTotal: FunctionComponent<GrandTotalProps> = (props: GrandTotalProps) => {
    const carts = useCartStore((state: any) => state.cart);
    const setCart = useCartStore((state: any) => state.setCart);
    const [item, setItem] = useState({ subtotal: 0, qty: 0, order: {} });

    const handlePrice = (result: number, qty: number) => {
        setItem({ subtotal: result, qty, order: props.orderitem });
    };

    const handleAddOrder = () => {
        if (item.qty === 0) {
            return toast.error('Minimum purchase must be 1 item!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        let currentCount = carts.count + 1;
        const dataCart = {
            count: currentCount,
            items: [...carts.items, item]
        };

        setCart(dataCart);
        toast.success('Item Added Successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const showCart = () => {
        console.log(carts);
    };

    return (
        <>
            <h2 className={css.grand_total}>
                Rp. {numeral(item.subtotal).format('0,0')}
            </h2>
            <p className={`${css.add_ons} mb-0`}>Add Ons</p>
            <p className={css.add_ons}>-</p>

            <InputQty currentPrice={props.orderitem.price} handlePrice={handlePrice} />

            <Button className={`w-100`} onClick={handleAddOrder}>
                Add to Cart
            </Button>

            <ToastContainer />
            <Button className={`w-100`} onClick={showCart}>
                Show
            </Button>
        </>
    );
};