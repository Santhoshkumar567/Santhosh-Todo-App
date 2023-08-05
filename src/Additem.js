import React from "react";
import { useRef } from "react";
const Additem = ({
  newItem,
  setNewItem,
  handleSubmit,
  handleSearch,
  handleReset,
}) => {
  //To prevent from submitting the form by enter key in keyboard
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const inputRef = useRef();

  return (
    <form
      className="form text-center mt-10 bg-slate-500 p-2 pt-3 sm:pt-3 md:p-2 rounded-full md:flex lg:justify-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      {/* //input box for searching and addItmems */}
      <input
        type="text"
        className="input input-success input-bordered  w-11/12 md:w-full max-w-xs p-5 hover:scale-105 duration-200  md:me-3"
        ref={inputRef}
        name="AddItem/search"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="AddItem / search"
        onKeyPress={handleKeyPress}
      />

      {/* button for addItem */}
      <button
        className="btn btn-success ms-3 mt-2 md:mt-0 hover:scale-105 duration-200 hover:bg-green-600"
        type="submit"
        onClick={() => inputRef.current.focus()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-7 h-5"
        >
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
      </button>

      {/* button for searching */}
      <button
        className="btn btn-warning ms-3 hover:scale-105 duration-200  hover:bg-yellow-600"
        type="button"
        onClick={(e) => handleSearch(newItem)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>

      {/* button for reset */}
      <button
        className="btn btn-error ms-3 hover:scale-105 duration-200  hover:bg-red-600"
        type="reset"
        onClick={handleReset}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </form>
  );
};

export default Additem;
