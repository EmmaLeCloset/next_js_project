const ProductDetails = ({
  product,
}) => {

  return (
    <div className="product">
      <div className="product-image">

      </div>
      <div className="">
        {product && (
          <div>
            <p className="mb-0 font-size-sm">{product.brand?.name}</p>
            <p className="mb-0 font-size-sm font-weight-light">{product.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;