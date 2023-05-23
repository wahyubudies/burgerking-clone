import { Button } from "@/app/components/Button/Button";
import css from "./page.module.scss";
import Link from "next/link";
import { useState } from "react";
import { TablePreview } from "./TablePreview";
import { useCartStore } from "@/store/web.store";

interface Props {

}

export function getStaticProps() {
    const carts = useCartStore((state: any) => state.cart);
    return {
        props:{ carts}
    };
}

export default function (props: any) {
    console.log("🚀 ~ file: page.tsx:20 ~ props:", props);
    // const [note, setNote] = useState("");

    // const handleChangeNote = (e: any) => {
    //     setNote(e.target.value);
    // };

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
                        <h2>Order Subtotal*</h2>
                        <div className={css.grandtotal}>Rp. <span className={css.number}>50,000</span></div>
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