import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from "../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";
import "./Catalog.modules.css";
import Product from '../../types/types';


const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
      minPrice: 1850,
      maxPrice: 25768,
      gender: [] as string[],
      sizes: [] as number[],
  });
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [, setAvailableSizes] = useState<number[]>([]);

  const getQueryString = (filter: typeof filters) => {
    const params = new URLSearchParams();
    if (filter.minPrice > 1850) params.append("price[from]", filter.minPrice.toString());
    if (filter.maxPrice < 25768) params.append("price[to]", filter.maxPrice.toString());
    if (filter.gender.length > 0) params.append("gender", filter.gender.join("&gender=")); // Пол
    if (filter.sizes.length > 0) {
        filter.sizes.forEach(size => params.append("sizes[]", size.toString()));
    }
        console.log("Строка запроса:", params.toString());
    return params.toString();
  };
  
  const applyFilters = (appliedFilters: Partial<typeof filters> = filters) => {
    const updatedFilters = { ...filters, ...appliedFilters };
    setFilters(updatedFilters);
    const queryString = getQueryString(updatedFilters);
    const url = `https://87c4e51ebc337641.mokky.dev/sneackers?${queryString}`;
    fetchProducts(url);
  };
    
const fetchProducts = async (url:string) => {
    try {
        setIsLoading(true);
        console.log("URL запроса:", url);

        const response = await axios.get<Product[]>(url);
        setProducts(response.data);
        setError(null);

        const sizes = response.data.reduce((acc, product) => {
            product.sizes.forEach((size) => {
                if (!acc.includes(size)) acc.push(size);
            });
            return acc;
        }, [] as number[]);
        setAvailableSizes(sizes);
    } catch (err: any) {
        setError(err.message || "Произошла ошибка при загрузке данных.");
    } finally {
        setIsLoading(false);
    }
};
  useEffect(() => {
    const url  ='https://87c4e51ebc337641.mokky.dev/sneackers'
    fetchProducts(url);
  }, []);
 
  const resetFilters = () => {
    setFilters({
        minPrice: 1850,
        maxPrice: 25768,
            gender: [],
          sizes: [],
      });
          const url  ='https://87c4e51ebc337641.mokky.dev/sneackers'
      fetchProducts(url);

  };

  const visibleProducts = products.filter(product =>
      filters.sizes.length === 0 ||
      product.sizes.some(size => filters.sizes.includes(size))
  ).slice(0, visibleCount);

  return (
  <div>
     <h1 className="cattext">Каталог</h1>
      <div className="catalog" id='catalog'>
           <div className='catFit'>
              <Filter
               filters={filters}
               setFilters={(updatedFilters) =>
               setFilters((prevFilters) => ({ ...prevFilters, ...updatedFilters }))
               }
               applyFilters={applyFilters} // Передаём функцию
               resetFilters={resetFilters}
               />  
           </div>      
           <div className="prods">
              {isLoading && <div className="spinner">Загрузка...</div>}
              {!isLoading && error && <div className="error">{error}</div>}
              {!isLoading && !error && products.length > 0 && (
                  <>
                      <div className="catProd">
                          {visibleProducts.map((product) => (
                              <ProductCard key={product.id} product={product} />
                          ))}
                      </div>
                      {visibleCount < products.length && (
                          <div>
                              <button
                                  className="buttonNext"
                                  onClick={() => setVisibleCount((prev) => prev + 9)}
                                  disabled={isLoading}>
                                  Показать ещё
                              </button>
                          </div>
                      )}
                  </>
              )}
          </div>
      </div>
      </div>
  );

  
};
export default Catalog