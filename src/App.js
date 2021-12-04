import React, { useState, useRef} from 'react';

import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Widget from "./components/Widget/Widget";

function App() {
  const el = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (e) =>{
    let selectedOptions = e.detail.selectedOptions.map(m =>{
      return {
        text: m.text,
        graphicsProps: { image: m.graphicsProps.image },
        selected: true,
        value: m.value
      }
    })
    setSelectedItems(selectedOptions)
  }

  const handleRemove = (item)=>{
    const items = selectedItems.filter( f => f.value !==item.value);
    setSelectedItems(items)
    el.current.setSelectedOptions(items);
  }


  return <div className="container mx-auto px-4">
    <Navbar/>
    
    <div className="flex lg:flex-row md:mx-auto flex-col m-16 max-w-5xl	 md:justify-between
     place-items-center gap-24
    ">
    <Widget selectedItems={selectedItems} onRemove={handleRemove}/>
    <Search handleChange={handleChange} selectedItems={selectedItems} 
    elementRef={el}
    />
    </div>

  </div>;
}

export default App;
