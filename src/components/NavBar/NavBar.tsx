'use client';

import { FunctionComponent } from "react";
import css from "@/components/NavBar/NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";

interface NavBarProps {

}

const NavBar: FunctionComponent<NavBarProps> = () => {
    return (
        <div className={css.navigation_block}>
            <div className="container d-flex justify-content-between h-100">
                <div className={css.left_navigation}>
                    <Image src="/img/logo.png" alt="" width={90} height={90} className={css.logo} />
                    <ul>
                        <li>
                            <Link href='/' className="text-decoration-none">
                                <span className={css.subtitle}>Delivery</span>
                                <span className={css.title}>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className="text-decoration-none">
                                <span className={css.subtitle}>Get Fresh</span>
                                <span className={css.title}>Promotions</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' className="text-decoration-none">
                                <span className={css.subtitle}>Exclusive</span>
                                <span className={css.title}>Large Order</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={css.right_navigation}>
                    <Link href="/login" className={css.login_block}>
                        Login
                    </Link>
                    <div className={css.cart_block}>
                        <div className={css.cart_counter}>0</div>
                        <Image src="/img/icon/cart.png" width={28} height={28} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;