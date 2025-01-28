import React, { useState } from "react";

// Props for InputForm
interface InputFormProps {
  addItem: (item: string) => void; // Function to add a new item
}

// InputForm Component
const InputForm = ({ addItem }: InputFormProps) => {
  const [input, setInput] = useState<string>(" "); // State for the input field

  // Add the current input to the list and clear the input field
  const handleAdd = () => {
    addItem(input); // Add the input to the list
    setInput(" "); // Clear the input field
  };

  return (
    <div className="flex gap-2 mb-4">
      {/* Input field */}
      <input
        type="text"
        className="flex-1 p-2 border rounded-lg focus:outline-none"
        placeholder="Add an item"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Update state when typing
      />

      {/* Add button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={handleAdd} // Call handleAdd when clicked
      >
        Add
      </button>
    </div>
  );
};

export default InputForm;
