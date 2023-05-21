'use client';

import { FunctionComponent } from "react";
import css from "@/app/components/CardCatalog/CardCatalog.module.scss";
import Image from "next/image";
import { Button } from "../Button/Button";
import numeral from "numeral";

interface CardCatalogProps {
    path: string;
    name: string;
    price?: number;
}

export const CardCatalog: FunctionComponent<CardCatalogProps> = (props: CardCatalogProps) => {
    const renderPrice = props.price ? (<p className={css.price}>Rp. {numeral(props.price).format('0,0')}</p>) : "";
    return (
        <div className={css.card_catalog}>
            <div className={css.wrapper_image}>
                <Image
                    sizes="100%"
                    className={css.catalog_image}
                    src={props.path}
                    alt=""
                    fill priority
                    style={{
                        objectFit: "cover",
                        borderRadius: "3px"
                    }} />
            </div>
            <div className={css.title}>
                <h1>
                    {props.name}
                </h1>
                {renderPrice}
            </div>
            <Button className="w-100">
                Order
            </Button>
        </div>
    );
};