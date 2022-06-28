import CatalogGrid from "../Catalog/CatalogGrid";

const Catalog = ({ products }) => {
  return (
    <div
      className=""
    >
      <div className="">
        <div className="">
          <div className="catalog-grid">
            <CatalogGrid
              products={products}
            />
          </div>
        </div>
      </div>
    </div>

  );
};

Catalog.defaultProps = {
  collection: null,
};

export default Catalog;
