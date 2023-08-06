import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Additem from "./Additem";
import { useState } from "react";

function App() {
  // collecting the previous list of items stored in the local storage
  
  let initialItems = [];
  try {
    const storedItems = JSON.parse(localStorage.getItem("todo_list"));
    initialItems = storedItems || [];
  } catch (error) {
    console.error("Local storage is not available or the data is corrupted.");
  }

  const [items, setItems] = useState(initialItems);


  // use State for setting the input values in the Additem Component
  const [newItem, setNewItem] = useState("");

  // use state for Search a item in the list in Content component
  const [searchTerm, setSearchTerm] = useState("");

  //function for Add a new item to list and also stored into the local storage
  const addItem =  (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));
   

  };

  //function for checking the checkbox state
  const handleCheck =  (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));
  };

  //function for deleting an item from the list and local storage
 const deleteObj = (id) => {
  if (items) {
    let listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));  
  }
}


  // function for Adda a new item to the list but click the Add  button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  // function for searching an item in the list by click the search button
  const handleSearch = (newItem) => {
    setSearchTerm(newItem);
  };

  //function for reset the searching State to normal state
  const handleReset = () => {
    setSearchTerm(""); // Reset the search term to empty
    setNewItem("");
  };

  //dynamic value for heading
  const Technlogies = "FrontEnd-Courss";

  return  (
    <div className="w-full sm:w-6/12 mx-auto  my-3">
      <Header heading={Technlogies} />

      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleReset={handleReset}
      />

      <Content
        items={items}
        handleCheck={handleCheck}
        deleteObj={deleteObj}
        searchTerm={searchTerm}
      />
      <Footer items={items} />
    </div>
  ) 
  
}

export default App;
