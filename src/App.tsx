import { useState } from "react";
import "./App.css";
import InputForm from "./assets/InputForm";
import ItemList from "./assets/ItemList";

// Main App Component
const App = () => {
  const [items, setItems] = useState<string[]>([]); // State for the list of items

  // Add a new item to the list
  const addItem = (item: string) => {
    if (item.trim()) {
      setItems([...items, item.trim()]); // Add the item to the list
    }
  };

  // Remove an item from the list by index
  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index); // Remove the item
    setItems(newItems); // Update the list
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Shopping List</h1>

        {/* Form to add items */}
        <InputForm addItem={addItem} />

        {/* List of items */}
        <ItemList items={items} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default App;
