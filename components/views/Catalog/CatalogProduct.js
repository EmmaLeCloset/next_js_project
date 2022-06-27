import Link from 'next/link';

const CatalogProduct = ({
  product = {}
}) => {

  const productPathName = "/products/[slug]";

  const isProductPresent = () => {
    if (Object.keys(product).length > 0) return true;

    return false;
  };

  return (
    <div className="catalog-product">
      <div className="catalog-product-image">
        {!!(product.main_picture_url && product.slug) && (
          <Link href={productPathName} as={productPathName.replace("[slug]", product.slug)} passHref>
            <a
              href={productPathName}
            >
              <img src={product.main_picture_url} alt={product.name} />
            </a>
          </Link>
        )}
      </div>
      <div className="">
        {isProductPresent && (
          <div>
            <p className="mb-0 font-size-sm">{product.brand?.name}</p>
            <p className="mb-0 font-size-sm font-weight-light">{product.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogProduct;
