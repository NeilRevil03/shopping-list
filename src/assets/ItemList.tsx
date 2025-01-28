import React from "react";

// Props for ItemList
interface ItemListProps {
  items: string[]; // List of items to display
  removeItem: (index: number) => void; // Function to remove an item
}

// ItemList Component
const ItemList = ({ items, removeItem }: ItemListProps) => {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between items-center mb-2">
          {item}

          {/* Remove button */}
          <button
            className="text-red-500 hover:underline"
            onClick={() => removeItem(index)} // Remove the item at this index
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
