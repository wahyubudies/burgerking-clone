export type MenuType = {
    filename: string;
    name: string;
    slug: string;
};

export type SliderType = {
    filename: string;
    desc: string;
};


export type NewsType = {
    filename: string;
    title: string;
    slug: string;
    terms_condition: string[];
    banner: string;
};

export type PackageType = {
    name: string;
    price: number;
    path: string;
    code: string;
    desc: string;
    slug: string;
};