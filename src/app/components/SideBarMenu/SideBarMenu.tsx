"use client";

import css from "@/app/components/SideBarMenu/SideBarMenu.module.scss";
import MENU_JSON from "@/json/menu.json";
import { useParams } from 'next/navigation';

interface SideBarMenuProps {
    onChooseMenu: (slug: string) => void;
    slug: string;
}

export function SideBarMenu(props: SideBarMenuProps) {

    const handleChooseMenu = (slug: string) => {
        props.onChooseMenu(slug);
    };

    const renderMenu = MENU_JSON.map(({ slug, name }, i) => (
        <div className={`${css.categories_box} ${slug === props.slug ? `${css.active}` : ""}`}
            key={i} onClick={() => handleChooseMenu(slug)}>
            <div className={css.text_categories}>
                {name}
            </div>
        </div>
    ));

    return (
        <div className={css.wrapper_sidebar}>
            {renderMenu}
        </div>
    );
}