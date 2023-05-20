'use client';

import { FunctionComponent } from "react";
import css from "@/components/CardCatalog/CardCatalog.module.scss";
import Image from "next/image";
import { Button } from "../Button/Button";

interface CardCatalogProps {
    filename: string;
    name: string;
}

export const CardCatalog: FunctionComponent<CardCatalogProps> = (props: CardCatalogProps) => {
    return (
        <div className={css.card_catalog}>
            <div className={css.wrapper_image}>
                <Image
                    sizes="100%"
                    className={css.catalog_image}
                    src={`/img/menus/${props.filename}`}
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
            </div>
            <Button className="w-100">
                Order
            </Button>
        </div>
    );
};