import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({newName, onNewNameChange, onNewCategoryChange, newCategory, onItemFormSubmit}) {
  let newItem ={
    category: newCategory,
    id: uuid(),
    name: newName,
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={onFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNewNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
