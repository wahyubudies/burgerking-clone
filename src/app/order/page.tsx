"use client";

import { SideBarMenu } from "@/app/components/SideBarMenu/SideBarMenu";
import css from "./page.module.scss";
import { useEffect, useState } from "react";
import MENU_JSON from "@/json/menu.json";
import PACKAGE_JSON from "@/json/menu_package.json";
import { PackageType } from "@/type/frontliner.type";
import { PackageMenu } from "../components/PackageMenu/PackageMenu";

const loadData = (slug: string) => new Promise((resolve, reject) => {
    // @ts-ignore 
    const result = PACKAGE_JSON[slug];
    return resolve(result);
});

export default function () {

    const [slug, setSlug] = useState(MENU_JSON[0].slug);
    const [selectedPackage, setPackage] = useState<PackageType[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    // const store = useMenuStore((state) => state.menu);

    useEffect(() => {
        const getPackage = async () => {
            setLoading(true);

            setTimeout(async () => {
                const reply = await loadData(slug) as PackageType[];
                setLoading(false);
                setPackage(reply);
            }, 1000);
        };

        getPackage();
    }, [slug]);

    const handleChooseMenu = (slug: string) => {
        setSlug(slug);
    };

    const renderContent = isLoading ? "Loading..." : (<PackageMenu packages={selectedPackage} />);
    return (
        <div className="container">

            <div className={css.wrapper_content}>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <SideBarMenu onChooseMenu={handleChooseMenu} slug={slug} />
                    </div>
                    <div className="col-12 col-lg-9">
                        {renderContent}
                    </div>
                </div>
            </div>
        </div>
    );
}