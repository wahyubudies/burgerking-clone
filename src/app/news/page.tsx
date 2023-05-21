import NEWS_JSON from "@/json/news.json";
import Image from "next/image";
import Link from "next/link";
import { newsType } from "@/type/frontliner.type";

import css from "./page.module.scss";

export const metadata = {
    title: 'News - Burger King',
    description: 'Burger King is an American-based multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain.',
};

interface NewsProps {

}

const loadNews = () => new Promise((resolve, reject) => {
    return resolve(NEWS_JSON);
});

export default async function (props: NewsProps) {
    const newsData = await loadNews();

    const [news] = await Promise.all<any>([newsData]);

    const renderNews = news.map(({ slug, banner }: newsType, i: number) => (
        <Link href={`/news/${slug}`} key={i} className={css.wrapper_banner}>
            <Image src={`/img/news/${banner}`} alt="" width={0} height={0}
                sizes="100vw" priority style={{ width: '100%', height: 'auto' }} />
        </Link>
    ));

    return (
        <>
            {renderNews}
        </>
    );
};