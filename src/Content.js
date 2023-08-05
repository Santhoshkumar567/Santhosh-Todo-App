import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const Content = ({ items, handleCheck, deleteObj, searchTerm }) => {

  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // duration of filtering if there is no matching item in the list then return this below statement
  const noMatchingItemsText = "There are no items matching in the list";

  // this value is displayed when the list is empty
  const emptyListText = "List is empty";

  return (
    <div className="text-xl text-black h-80 my-10 overflow-y-auto p-10 bg-gray-500 rounded ">
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className="mb-2 bg-red-500 rounded-full pb-1 hover:scale-105 duration-200 hover:bg-lime-200"
            >
              <table className="table-auto w-full text-center">
                <tbody>
                  <tr>
                    <td className="w-10">
                      <input
                        type="checkbox"
                        name="ItemName"
                        checked={item.checked}
                        className="checkbox checkbox-success "
                        onChange={() => handleCheck(item.id)}
                      />
                    </td>
                    <td className="text-2xl font-semibold w-44">
                      <label
                        style={
                          item.checked
                            ? { textDecoration: "line-through" }
                            : null
                        }
                        onDoubleClick={() => handleCheck(item.id)}
                      >
                        {item.item}
                      </label>
                    </td>
                    <td className="text-2xl w-10">
                      <button onClick={() => deleteObj(item.id)}>
                        <TrashIcon className="h-7 w-7 mt-2" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-2xl font-semibold text-center my-24">
          {items.length === 0 ? emptyListText : noMatchingItemsText}
        </p>
      )}
    </div>
  );
};

export default Content;
