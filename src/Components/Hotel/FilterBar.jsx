import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { filterOptions } from "../../data";

export default function FilterBar() {
  const [open, setOpen] = useState(false);
  const [minPrice, SetMinPrice] = useState(250);
  const [maxPrice, SetMaxPrice] = useState(500);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [openFilter, setOpenFilter] = useState(null);

  const handleSliderChange = (e) => {
    const value = e.target.value.split(",").map(Number);
    setPriceRange(value);
    SetMinPrice(value[0]);
    SetMaxPrice(value[1]);
  };

  const handleFilterClick = (index) =>
    setOpenFilter(openFilter === index ? null : index);
  return (
    <>
      <div className="filter-bar">
        <div className="filter-item">
          <span onClick={() => setOpen(!open)}>
            Price <FaChevronDown className="filter-icon" />
          </span>
          {open && (
            <div className="filter-options">
              <div className="filter-title">Price</div>
              <div className="price-filter">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange}
                  onChange={handleSliderChange}
                  className="price-slider"
                />

                <div className="price-range-labels">
                  <span>${priceRange[0]}</span>
                  <span>$500</span>
                </div>
                <div className="price-inputs">
                  <div
                    value={minPrice}
                    onChange={(e) => SetMinPrice(e.target.value)}
                    className="price-input"
                  >
                    Min Price <span>${minPrice}</span>
                  </div>
                  <span>-</span>
                  <div
                    value={maxPrice}
                    onChange={(e) => SetMinPrice(e.target.value)}
                    className="price-input"
                  >
                    Max Price <span>$500</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {filterOptions.map((filter, index) => (
          <div key={index} className="filter-item">
            <span onClick={() => handleFilterClick(index)}>
              {filter.title}
              <FaChevronDown className="filter-icon" />
            </span>

            {openFilter === index && (
              <div className="filter-options">
                <div className="filter-title">{filter.title}</div>
                {filter.options.map((option) => (
                  <label key={option} className="filter-option">
                    <input type="checkbox" />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
