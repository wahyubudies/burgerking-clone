import { SlideShowImage } from '@/components/SlideShowImage/SlideShowImage';
import { CardCatalog } from '@/components/CardCatalog/CardCatalog';
import MENU_JSON from "@/json/menu.json";
import css from "./page.module.scss";
import { MenuType } from '@/type/menu.type';

export const metadata = {
    title: 'Home - Burger King',
    description: 'Burger King is an American-based multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain.',
};

const loadMenu = () => new Promise((resolve, reject) => {
    return resolve(MENU_JSON);
});

export default async function Home(props: any) {
    const menuData = await loadMenu();

    const [menu] = await Promise.all<any>([menuData]);

    const renderCatalog = menu.map(({ name, filename }: MenuType, i: number) => (
        <div className="col-4 mb-4" key={i}>
            <CardCatalog name={name} filename={filename} />
        </div>
    ));

    return (
        <>
            <SlideShowImage />
            <div className={css.wrapper_content}>
                <h2 className={css.title}>Our Menus</h2>
                <div className={css.catalog_center}>
                    <div className="row">
                        {renderCatalog}
                    </div>
                </div>
            </div>
        </>
    );
}