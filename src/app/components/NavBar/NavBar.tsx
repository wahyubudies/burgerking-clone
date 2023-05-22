"use client";

import { FunctionComponent, useState } from "react";
import css from "@/app/components/NavBar/NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/web.store";

interface NavBarProps {

}

export const NavBar: FunctionComponent<NavBarProps> = () => {
    const carts = useCartStore((state: any) => state.cart);
    const [isOpen, setOpen] = useState(false);

    const handleOpenBars = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <div className={css.navigation_block}>
                <div className="container d-flex justify-content-between h-100">
                    <div className={css.left_navigation}>
                        <Link href="/">
                            <Image src="/img/logo.png" alt="" width={90} height={90} className={css.logo} priority={true} />
                        </Link>
                        <ul>
                            <li>
                                <Link href='/order' className="text-decoration-none">
                                    <span className={css.subtitle}>Delivery</span>
                                    <span className={css.title}>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/news' className="text-decoration-none">
                                    <span className={css.subtitle}>Get Fresh</span>
                                    <span className={css.title}>Promotions</span>
                                </Link>
                            </li>
                            <li>
                                <Link href='/large-order' className="text-decoration-none">
                                    <span className={css.subtitle}>Exclusive</span>
                                    <span className={css.title}>Large Order</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={css.right_navigation}>
                        <Link href="/" className={css.login_block}>
                            Login
                        </Link>
                        <div className={css.cart_block}>
                            <div className={css.cart_counter}>{carts.count}</div>
                            <Image src="/img/icon/cart.png" width={28} height={28} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.mobile_navigation_block}>
                <div className="container d-flex justify-content-between align-items-center">
                    <button className={css.bars_toggle} onClick={handleOpenBars}>
                        {isOpen ? <img src="/img/close.png" alt="" /> : <img src="/img/bars.png" alt="" />}
                    </button>
                    <Link href="/">
                        <Image src="/img/logo.png" alt="" width={0} height={0} className={css.logo} priority={true} sizes="100vw" />
                    </Link>
                    <div className={css.cart_block}>
                        <Link href="/cart/preview" id="cart" className="cart">
                            <span className={css.badge}>{carts.count}</span>
                            <img src="/img/icon/cart.png" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${css.overlay_mobile} ${isOpen ? "" : `${css.close}`}`}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/order"><span>Delivery</span> Order</Link></li>
                    <li><Link href="/news"><span>Get Fresh</span> Promotions</Link></li>


                    <li><hr /></li>
                    <li className="small"><a href="/accounts/login">Login</a></li>
                </ul>
            </div>
        </>
    );
};
