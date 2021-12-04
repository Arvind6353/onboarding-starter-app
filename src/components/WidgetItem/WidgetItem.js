import React from "react";

function WidgetItem({selected, text, image, remove}) {
  return (
    <div className="h-44 w-44 hover:bg-gray-50 rounded shadow-lg flex place-content-center flex-col place-items-center my-auto pb-4">
      {selected && (
        <>
          <div className="h-36 flex place-content-center flex-col">
            <img className="w-12 pt-8" src={image} alt="app logo" />
            <h1 className="text-lg font-bold text-gray-500 mb-4 mt-2">
              {text}
            </h1>
          </div>
          <div onClick={remove} className="cursor-pointer">
            <span className="text-red-600 text-xs ">x</span>{" "}
            <span className="text-gray-500 text-xs">Remove</span>
          </div>
        </>
      )}

      {!selected && (
        <>
          <div className="shadow-lg w-16 h-16 flex flex-col place-content-center place-items-center bg-gray-100">
            +{" "}
          </div>
        </>
      )}
    </div>
  );
}

export default WidgetItem;
