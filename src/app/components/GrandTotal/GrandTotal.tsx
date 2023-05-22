"use client";

import { FunctionComponent, useState } from "react";
import css from "@/app/components/GrandTotal/GrandTotal.module.scss";
import numeral from "numeral";
import { Button } from "../Button/Button";
import { InputQty } from "../InputQty/InputQty";
import { useCartStore } from "@/store/web.store";
import { ToastContainer, toast } from "react-toastify";

interface GrandTotalProps {
    price: number;
}

export const GrandTotal: FunctionComponent<GrandTotalProps> = (props: GrandTotalProps) => {
    const carts = useCartStore((state: any) => state.cart);
    const setCart = useCartStore((state: any) => state.setCart);
    const [subTotal, setSubTotal] = useState({ subTotal: 0, qty: 0 });


    const handlePrice = (result: number, qty: number) => {
        setSubTotal({ subTotal: result, qty });
    };

    const handleAddOrder = () => {
        if (subTotal.qty === 0) {
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
            items: subTotal
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

    // const showCart = () => {
    //     console.log(carts);
    // };

    return (
        <>
            <h2 className={css.grand_total}>
                Rp. {numeral(subTotal.subTotal).format('0,0')}
            </h2>
            <p className={`${css.add_ons} mb-0`}>Add Ons</p>
            <p className={css.add_ons}>-</p>

            <InputQty currentPrice={props.price} handlePrice={handlePrice} />

            <Button className={`w-100`} onClick={handleAddOrder}>
                Add to Cart
            </Button>

            <ToastContainer />
            {/* <Button className={`w-100`} onClick={showCart}>
                Show
            </Button> */}
        </>
    );
};