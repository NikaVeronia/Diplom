import React, { useState } from "react";
import "./Filter.modules.css";
import Nouislider from "nouislider-react";
import "nouislider/dist/nouislider.css";
import   "./NouisliderSlis.modules.css";

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
  // Локальное состояние для временного хранения изменений
  const [localFilters, setLocalFilters] = useState<Filters>(filters);
  const priceRange = { min: 1850, max: 25768 };

  // Обработчик изменения цены
  const handlePriceChange = (values: (string | number)[]) => {
    const minValue = Math.max(priceRange.min, Number(values[0]));
    const maxValue = Math.min(priceRange.max, Number(values[1]));
    setLocalFilters((prev) => ({
      ...prev,
      minPrice: minValue,
      maxPrice: maxValue,
    }));
  };

  // Обработчик изменения пола
  const handleGenderChange = (gender: string) => {
    setLocalFilters((prev) => ({
      ...prev,
      gender: prev.gender.includes(gender)
        ? prev.gender.filter((g) => g !== gender)
        : [...prev.gender, gender],
    }));
  };

  // Обработчик изменения размера
  const handleSizeClick = (size: number) => {
    setLocalFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  // Применение фильтров
  const handleApplyFilters = () => {
    setFilters(localFilters);
    applyFilters(localFilters);
  };

  // Сброс фильтров
  const handleResetFilters = () => {
    setLocalFilters(filters); // Сбрасываем локальные фильтры в исходные
    resetFilters();
  };

  return (
    <div className="filter">
      <div className="section">
        <div className="title">
          <h2 className="FittextH">Подбор по параметрам</h2>
          <label className="Fittext">Цена, руб</label>
        </div>
        <div className="minmax">
          <div className="minPrice">{localFilters?.minPrice||0} Руб</div>
          <div className="maxPrice">{localFilters?.maxPrice||0} Руб</div>
        </div>
        <div className="nouislider">
          <Nouislider
            className="priceRange"
            range={{ min: 1850, max: 25768 }}
            start={[localFilters?.minPrice||0, localFilters?.maxPrice||0]}
            step={100}
            connect
            onChange={handlePriceChange}
          />
        </div>
      </div>

      <div className="section">
        <label className="Fittext">Пол</label>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            id="male"
            checked={localFilters.gender.includes("Мужской")}
            onChange={() => handleGenderChange("Мужской")}
          />
          <label htmlFor="male" className="Fittext">
            Мужской
          </label>
        </div>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            id="female"
            checked={localFilters.gender.includes("Женский")}
            onChange={() => handleGenderChange("Женский")}
          />
          <label htmlFor="female" className="Fittext">
            Женский
          </label>
        </div>
      </div>

      <div className="section-col">
        <label className="Fittext">Размер </label>
        <div className="sizes">
          {[35, 36, 37, 38, 39, 40, 41, 42, 43].map((size) => (
            <button
              key={size}
              className={`sizeButton ${
                localFilters.sizes.includes(size) ? "active" : ""
              }`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="buttons">
        <button className="buttonFilt" onClick={handleApplyFilters}>
          Применить
        </button>
        <button className="buttonFilt" type="reset" onClick={handleResetFilters}>
          Сбросить
        </button>
      </div>
    </div>
  );
};

export default Filter;
