import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import CatalogGrid from "../Catalog/CatalogGrid";
import { getProducts } from "../../../utils/call-api";

const Catalog = () => {
  const router = useRouter();
  const [productsState, setProductsState] = useState({
    loading: true,
    error: false,
    products: [],
    meta: {},
  });

  async function fetchData() {
    try {
      const res = await getProducts();
      console.log('catalog', res);
      setProductsState({
        loading: false, error: false, products: res.data, meta: res.meta,
      });
    } catch {
      console.log('erreur in fechData')
      setProductsState({
        loading: false, error: true, products: [], meta: {},
      });
    }
  }

  useEffect(() => {
    setProductsState({
      loading: true, error: false, products: [], meta: [],
    });

    fetchData();
  }, []);

  return (
    <div
      className=""
    >
      <div className="">
        <div className="flex-grow-1 d-flex flex-column">
          <div className="catalog-grid">
            <CatalogGrid
              products={productsState.products}
              loading={productsState.loading}
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
