import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = selectedCategory === "all" ? items : items.filter(item => item.category === selectedCategory);
  const category = [...new Set(items.map(item => item.category))]

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option key={category} value="All">All</option>
          <option  value="Produce">Produce</option>
          <option  value="Dairy">Dairy</option>
          <option  value="Dessert">Dessert</option>
          
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
