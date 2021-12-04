import React from "react";
import WidgetItem from "../WidgetItem/WidgetItem";

const renderProductCountText = (items) => {
  const productsCount = items.filter((item) => item.selected).length;
  let productsCountText = "";

  if (productsCount > 1)
    productsCountText = `${productsCount} Products added`;
  else if (productsCount === 1)
    productsCountText = `${productsCount} Product added`;
  else productsCountText = "No Products added";

  return (
    <div className="text-center text-gray-300 mt-6 mx-auto">
      {productsCountText}
    </div>
  );
};

function Widget(props) {
  let selectedItems = props.selectedItems.slice(0, 4);
  if (selectedItems.length < 4) {
    const placeholdersCount = 4 - selectedItems.length;
    for (let i = 0; i < placeholdersCount; i++) {
      selectedItems = [...selectedItems, { selected: false }];
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {selectedItems.map((item, i) => {
          return (
            <WidgetItem
              key={item?.val || i}
              selected={item?.selected}
              text={item?.text}
              image={item?.graphicsProps?.image}
              remove={() => props.onRemove(item)}
            />
          );
        })}
      </div>
      {renderProductCountText(selectedItems)}
    </div>
  );
}

export default Widget;
