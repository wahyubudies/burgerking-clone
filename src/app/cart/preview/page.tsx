"use client";

import { Button } from "@/app/components/Button/Button";
import css from "./page.module.scss";
import Link from "next/link";
import { useState } from "react";
import { TablePreview } from "./TablePreview";
import { useCartStore } from "@/store/web.store";
import numeral from "numeral";

interface Props {

}

export function getStaticProps() {
    const carts = useCartStore((state: any) => state.cart);
    return {
        props: { carts }
    };
}

export default function (props: any) {
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

    const grandTotal = result.reduce((prev, next) => prev + next.subtotal, 0);

    return (
        <div className="container">
            <div className={css.wrapper_content}>
                <div className="row">
                    <div className={`col-12 col-lg-8 ${css.left_block}`}>
                        <TablePreview />
                        {/* <div className={css.notes_wrapper}>
                            <h2>Add Notes</h2>
                            <input type="text" name="notes" className={css.add_notes} id="input-note" placeholder="Add notes to your order here..." value={note} onChange={handleChangeNote} maxLength={15} />
                            <span className={css.note_char_counter}><span id="note-chars-count">{note.length}</span>/15</span>
                        </div> */}
                    </div>
                    <div className={`col-12 col-lg-4 ${css.right_block}`}>
                        <h2>Order Grand Total*</h2>
                        <div className={css.grandtotal}>Rp. <span className={css.number}>
                            {numeral(grandTotal).format('0,0')}</span></div>
                        <div className={css.info}>*Price might change due to your delivery location.</div>

                        <div>
                            <Button className="w-100">Login to Order</Button>
                            <Link href="/cart/delivery" className={css.link}>
                                Continue as Guest
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}