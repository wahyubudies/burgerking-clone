'use client';

import { FunctionComponent } from "react";
import css from "@/app/components/CardCatalog/CardCatalog.module.scss";
import Image from "next/image";
import { Button } from "../Button/Button";
import numeral from "numeral";
import { useRouter } from "next/navigation";
import { useMenuStore } from "@/store/web.store";

interface CardCatalogProps {
    path: string;
    name: string;
    price?: number;
    directTo?: string;
    slug?: string;
}

export const CardCatalog: FunctionComponent<CardCatalogProps> = (props: CardCatalogProps) => {
    const router = useRouter();
    // const store = useMenuStore();

    const handleDirection = () => {
        if (!props.directTo) return;
        // if (props.slug) {
        //     store.selectMenu(props.slug);
        // }
        router.push(props.directTo);
    };

    const renderPrice = props.price ? (<p className={css.price}>Rp. {numeral(props.price).format('0,0')}</p>) : "";
    return (
        <div className={css.card_catalog}>
            <div className={css.wrapper_image}>
                <Image
                    sizes="100%"
                    className={css.catalog_image}
                    src={props.path}
                    alt=""
                    width={0}
                    height={0}
                    priority
                    style={{
                        width: "100%",
                        height: "auto",
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
            {/* <Link href={props.directTo}> */}
            <Button className="w-100" onClick={handleDirection}>
                Order
            </Button>
            {/* </Link> */}
        </div >
    );
};