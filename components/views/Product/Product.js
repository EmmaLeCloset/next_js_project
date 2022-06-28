const Product = ({
  product,
}) => {

  return (
    <div className="product">
      <img src={product.main_picture_url} alt={product.name} />
      <div className="">
        {product && (
          <div>
            <p className="">{product.brand?.name}</p>
            <p className="">{product.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
