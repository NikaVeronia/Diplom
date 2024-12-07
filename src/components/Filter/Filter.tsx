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
        <label>Цена, руб</label>
        <div>Мин-ая: {filters.minPrice} Руб</div> <div>Макс-ая: {filters.maxPrice} Руб</div>
        <div className="nouislider">
        <Nouislider
        className="priceRange"
          range={{ min: 1850, max: 25768 }}
          start={[filters.minPrice, filters.maxPrice]}
          step={100}
          connect
          onChange={handlePriceChange}
        />
        </div>
      </div>
      <div className="section">
  <label>Пол</label>
  <div>
    <input
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
    <label htmlFor="male">Мужской</label>
  </div>
  <div>
    <input
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
    <label htmlFor="female">Женский</label>
  </div>
</div>

      <div className="section-col">
        <label>Размер </label>
        <div className="sizes">
          {[35, 36, 37, 38, 39, 40, 41, 42, 43].map((size) => (
            <button
              key={size}
              className={`sizeButton ${filters.sizes.includes(size) ? "active" : ""}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="buttons">
        <button className="button" onClick={() => applyFilters(filters)}>
          Применить
        </button>
        <button className="button" type="reset" onClick={resetFilters}>
          Сбросить
        </button>
      </div>
    </div>
  );
};

export default Filter;
