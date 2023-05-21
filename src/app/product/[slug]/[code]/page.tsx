import Image from "next/image";
import css from "./page.module.scss";
import numeral from "numeral";
import ORDER_JSON from "@/json/menu_package.json";
import { Button } from "@/app/components/Button/Button";
import { PackageType } from "@/type/frontliner.type";

interface ProductOrderProps {
    params: {
        slug: string,
        code: string;
    };
}

const loadData = (code: string, slug: string) => new Promise((resolve, reject) => {
    // @ts-ignore
    const container = ORDER_JSON[slug];
    const result = container.find((c: PackageType) => c.code === code);
    resolve(result);
});

export default async function (props: ProductOrderProps) {
    const slug = props.params.slug;
    const code = props.params.code;

    const orderData = await loadData(code, slug) as PackageType;

    const order: PackageType = await Promise.resolve<PackageType>(orderData);

    return (
        <div className="container">
            <div className={css.content_wrapper}>
                <div className="row">
                    <div className={`col-12 col-lg-8 ${css.left}`}>
                        <h1 className={css.title}>
                            {order.name}
                        </h1>
                        <p className={`${css.desc_menu} text-center`}>
                            {order.desc}
                        </p>
                        <div className="position-relative">
                            <Image src={`/img/menu_package/${order.path}`} alt="" sizes="100vw"
                                width={0} height={0} style={{ width: "50%", height: "auto", objectFit: "contain", borderRadius: "10px", margin: "auto", display: "block" }} />
                        </div>
                        <h2 className={css.extras}>Add Extras</h2>
                        <p className={css.desc_menu}>
                            Not Available.
                        </p>
                    </div>
                    <div className={`col-12 col-lg-4 ${css.right}`}>
                        <h2 className={css.grand_total}>
                            Rp. {numeral(order.price).format('0,0')}
                        </h2>
                        <p className={`${css.add_ons} mb-0`}>Add Ons</p>
                        <p className={css.add_ons}>-</p>

                        <div className={css.wrapper_qty}>
                            <button type="button" className={`${css.button_min}`} id="button-min">
                                <img src="/img/minus.png" />
                            </button>
                            <input id="quantity-input" type="text" className={`${css.input_qty}`} value="1" maxLength={2} disabled />
                            <button type="button" className={`${css.button_add}`} id="button-add">
                                <img src="/img/plus.png" />
                            </button>
                        </div>

                        <Button className={`w-100`} >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}