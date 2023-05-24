"use client";
import Link from "next/link";
import css from "./page.module.scss";
import { useCartStore } from "@/store/web.store";
import { InputQty } from "@/app/components/InputQty/InputQty";
import numeral from "numeral";
import { useState } from "react";

interface TablePreviewProps {

}

export const TablePreview = (props: TablePreviewProps) => {
    const carts = useCartStore((state: any) => state.cart);

    const container: any = {};
    for (let i = 0; i < carts.items.length; i++) {
        const key = carts.items[i].name;
        if (!container[key]) {
            container[key] = [];
        }
        container[key].push(carts.items[i]);
    }

    const result = [];
    for (let key in container) {
        const qty = container[key].reduce((prev: any, next: any) => prev + next.qty, 0);
        const subtotal = container[key].reduce((prev: any, next: any) => prev + next.subtotal, 0);
        const order = container[key][0].order;
        result.push({ qty, subtotal, title: key, order });
    }

    const renderRow = result.map(({ subtotal, qty, order }: any, i: number) => (
        <tr className="cart-item-row" key={i}>
            <td className={css.item_wrapper_img}>
                <img src={`/img/menu_package/${order.path}`} className="image" />
            </td>
            <td className={css.description}>
                <div className="description_wrapper">
                    {order.name}
                </div>
            </td>
            <td>
                <div className={css.wrapper_qty}>
                    {numeral(subtotal).format('0, 0')}
                    {/* <InputQty currentPrice={subtotal} handlePrice={handlePrice} qty={qty} index={i} /> */}
                </div>
            </td>
            <td className="text-end">Rp. <span className="item-subtotal text-end">
                {numeral(subtotal).format("0,0")}</span></td>
            <td align="center" style={{ width: "50px", minWidth: "unset" }}>
                <a href="#" className="delete">
                    <img src="/img/icon/garbage.png" className={css.garbage} />
                </a>
            </td>
        </tr>
    ));

    return (
        <table className={`${css.table} items`}>
            <tbody>
                <tr className="header">
                    <th colSpan={2}>Menu Item</th>
                    <th>Quantity</th>
                    <th className="text-end">Subtotal</th>
                    <th className="delete" style={{ width: "50px", minWidth: "unset" }}></th>
                </tr>
                {renderRow}
                <tr>
                    <td colSpan={5}>
                        <Link href="/order" className={css.link_shopping}>
                            Continue Shopping
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};