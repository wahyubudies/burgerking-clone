'use client';

import { FunctionComponent } from "react";
import css from "@/components/Footer/Footer.module.scss";
import Link from "next/link";

interface FooterProps {

}

export const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className={css.footer}>
            <div className="container">
                <div className={css.content_footer}>
                    <div className={css.title}>BURGER KING® DELIVERY</div>
                    <div className={css.phone}>
                        <Link href="tel:1500025" className={css.phone_information} target="_blank">
                            <img src="/img/icon/phone.png" className={css.icon_footer} />
                            <span className={css.span_phone}>15000 25</span>
                        </Link>

                        <Link href="mailto:guestservice@burgerking.co.id" className={css.phone_information} target="_blank">
                            <img src="/img/icon/mail.png" className={css.icon_footer} />
                            <span className={css.span_mail}>guestservice@burgerking.co.id</span>
                        </Link>

                        <div className={css.sosial_media}>
                            <Link href="https://www.facebook.com/burgerkingindonesia/" target="_blank">
                                <img src="/img/icon/fb.png" alt="" />
                            </Link>
                            <Link href="https://www.instagram.com/burgerking.id/" target="_blank">
                                <img src="/img/icon/ig.png" alt="" />
                            </Link>
                            <Link href="https://twitter.com/burgerking_id" target="_blank">
                                <img src="/img/icon/twt.png" alt="" />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UC-F_fh9CRDwhJrY_ibHae-g" target="_blank">
                                <img src="/img/icon/yt.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className={css.term_condition}>
                        <div className="terms-conditions">
                            <span className={css.right_line}><a href="/about-us/" target="_blank">About Us</a></span>
                            <span className={css.right_line}><a href="/privacy-policy/" target="_blank">Kebijakan Privasi</a></span>
                            <span className={css.right_line}><a href="/terms-and-conditions/" target="_blank">Syarat dan Ketentuan</a></span>
                            <span className={css.copyright}>TM &amp; © 2023 Burger King Corporation. Used Under License. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};