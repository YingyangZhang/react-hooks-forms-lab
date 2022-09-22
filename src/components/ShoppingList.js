import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState('Produce');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  function handleSearchTextChange(event) {
    setSearch(event.target.value)
  }

  function handleNewNameChange(event) {
    setNewName(event.target.value)
  }

  function handleNewCategoryChange(event) {
    setNewCategory(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }    
  });

  const searchItemsToDisplay = itemsToDisplay.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="ShoppingList">
      <ItemForm
      newName={newName}
      onNewNameChange={handleNewNameChange} 
      onNewCategoryChange={handleNewCategoryChange} 
      newCategory={newCategory}
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchTextChange} />
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
