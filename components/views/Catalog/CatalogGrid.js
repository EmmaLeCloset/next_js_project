import CatalogProduct from "./CatalogProduct";

const CatalogGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <CatalogProduct
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default CatalogGrid;
