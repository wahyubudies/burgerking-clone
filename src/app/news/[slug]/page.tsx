import NEWS_JSON from "@/json/news.json";
import css from "./page.module.scss";
import Image from "next/image";
import { newsType } from "@/type/frontliner.type";

interface DetailNewsProps {
    params: {
        slug: string;
    };
}

const loadData = (slug: string) => new Promise((resolve, reject) => {
    let result = {};
    for (let i = 0; i < NEWS_JSON.length; i++) {
        const newsSlug = NEWS_JSON[i].slug;
        if (newsSlug === slug) {
            result = NEWS_JSON[i];
        }
    }
    resolve(result);
});

export default async function (props: DetailNewsProps) {
    const slug = props.params.slug;

    const detailNewsData = await loadData(slug) as newsType;

    const news = await Promise.resolve(detailNewsData);

    const renderTermsContent = news.terms_condition.map((content, i) => (
        <li key={i}>{content}</li>
    ));

    return (
        <div className={css.wrapper_detail}>
            <Image src={`/img/news/${news.filename}`} alt="" width={0} height={0} sizes="100vw" style={{
                objectFit: "contain", width: "100%",
                height: "auto", margin: "auto",
                display: "block", borderRadius: "10px"
            }} />

            <div className={css.content}>
                <h1 className={css.title}>{news.title}</h1>
                <p className={css.subtitle}>Syarat dan Ketentuan</p>
                <ul>
                    {renderTermsContent}
                </ul>
                <p className={css.subfooter}>*S&K Berlaku</p>
            </div>
        </div>
    );
}