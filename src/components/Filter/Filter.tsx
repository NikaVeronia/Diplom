import React from "react";
import "./Filter.modules.css";
import Nouislider from "nouislider-react";
import "nouislider/dist/nouislider.css";

type Filters = {
  minPrice: number; 
  maxPrice: number; 
  gender: string[]; 
  sizes: number[];  
};

interface FilterProps {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  applyFilters: (appliedFilters?: Partial<Filters>) => void; 
  resetFilters: () => void;
}

const Filter: React.FC<FilterProps> = ({
  filters,
  setFilters,
  applyFilters,
  resetFilters,
}) => {
  const handlePriceChange = (values: (string | number)[]) => {
    const updatedFilters = {
      ...filters,
      minPrice: Number(values[0]),
      maxPrice: Number(values[1]),
    };
    setFilters(updatedFilters);
    applyFilters(updatedFilters); // Применяем изменения
  };

  const handleSizeClick = (size: number) => {
    const updatedSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];

    const updatedFilters = { ...filters, sizes: updatedSizes };
    setFilters(updatedFilters);
    applyFilters(updatedFilters); // Применяем изменения
  };
  return (
    <div className="filter">
      <div className="section">
        <h2 className="Fittext">Подбор по параметрам</h2>
        <label className="Fittext">Цена, руб</label>
        <div className="minmax">
          <div className="minPrice"> {filters.minPrice} Руб</div> <div className="maxPrice"> {filters.maxPrice} Руб</div>
        </div> 
          <div className="nouislider">
              <Nouislider
              className="priceRange"
              range={{ min: 1850, max: 25768 }}
              start={[1850,25768]}
              step={100}
              connect
              onChange={handlePriceChange}
              />
          </div>
        </div>
        <div className="section">
         <label className="Fittext">Пол</label>
         <div>
           <input className="checkbox"
           type="checkbox"
           id="male"
           checked={filters.gender.includes("Мужской")}
           onChange={() =>
           setFilters({
            gender: filters.gender.includes("Мужской")
            ? filters.gender.filter((g) => g !== "Мужской")
            : [...filters.gender, "Мужской"],
            })
           }
           />
           <label htmlFor="male" className="Fittext">Мужской</label>
         </div>
         <div>
            <input className="checkbox"
            type="checkbox"
            id="female"
            checked={filters.gender.includes("Женский")}
            onChange={() =>
            setFilters({
            gender: filters.gender.includes("Женский")
            ? filters.gender.filter((g) => g !== "Женский")
            : [...filters.gender, "Женский"],
            })
            }
          />
          <label htmlFor="female" className="Fittext">Женский</label>
        </div>
      </div>
      <div className="section-col">
        <label className="Fittext">Размер </label>
        <div className="sizes">
          {[35, 36, 37, 38, 39, 40, 41, 42, 43].map((size) => (
            <button
              key={size}
              className={`sizeButton ${filters.sizes.includes(size) ? "active" : ""}`}
              onClick={() => handleSizeClick(size)}>
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button className="buttonFilt" onClick={() => applyFilters(filters)}>
          Применить
        </button>
        <button className="buttonFilt" type="reset" onClick={resetFilters}>
          Сбросить
        </button>
      </div>
    </div>
   
  );
};

export default Filter;