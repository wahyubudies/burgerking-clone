import { FunctionComponent } from "react";
import { CardCatalog } from "../CardCatalog/CardCatalog";
import { PackageType } from "@/type/frontliner.type";

interface PackageMenuProps {
    packages: PackageType[];
}

export const PackageMenu: FunctionComponent<PackageMenuProps> = ({ packages }: PackageMenuProps) => {

    const renderContent = packages ? packages.map(({ path, name, price, code, slug }, i) => (
        <div className="col-12 col-lg-6 mb-4" key={i}>
            <CardCatalog path={`/img/menu_package/${path}`}
                name={name} price={price} directTo={`product/${slug}/${code}`} />
        </div>
    )) : "Sorry, meal plans are not available...";

    return (
        <div className="row">
            {renderContent}
        </div>
    );
};
