import CatalogProduct from "./CatalogProduct";

const CatalogGrid = ({
  products, loading,
}) => {
  if (loading) {
    return (
      <div className="product-grid">
        {[1, 2, 3, 4].map((i) => (
          <CatalogProduct key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <CatalogProduct
          product={product}
          key={product.id}
          position={index + 1}
        />
      ))}
    </div>
  );
};

export default CatalogGrid;