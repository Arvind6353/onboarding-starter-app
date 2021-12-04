import React from "react";
import SearchHeader from "../SearchHeader/SearchHeader";
import { FwSelect } from "@freshworks/crayons/react";

const selectOptions = [
  {
    text: "Notion",
    value: "Notion",
    graphicsProps: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    },
  },
  {
    text: "Jira",
    value: "Jira",
    graphicsProps: {
      image:
        "data:image/jpeg;base64,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",
    },
  },
  {
    text: "Slack",
    value: "Slack",
    graphicsProps: {
      image:
        "data:image/png;base64,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",
    },
  },
  {
    text: "MS Azure",
    value: "MS Azure",
    graphicsProps: {
      image:
        "data:image/jpeg;base64,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",
    },
  },
  {
    text: "Noimics",
    value: "Noimics",
    graphicsProps: {
      image:
        "data:image/png;base64,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",
    },
  },

  {
    text: "NoopenSpeed",
    value: "NoopenSpeed",
    graphicsProps: {
      image:
        "data:image/jpeg;base64,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",
    },
  },
];

function delay(ms) {
    return new Promise(rs => setTimeout(rs,ms))
}
function Search({ elementRef, handleChange}) {

  const searchFn = async (value, source) => {
    // mimic xhr
    await delay(1000)
    const result = selectOptions.filter((x) =>
      x.text.toLowerCase().includes(value.toLowerCase())
    );
    return result.map((x) => {
      return {
        text: x.text,
        value: x.value,
        graphicsProps: { image: x.graphicsProps.image },
      };
    });
  };
  return (
    <div className="my-6">
      <SearchHeader />
      
      <div className="my-6">
      <FwSelect
        id="dynamicSelect"
        variant="mail"
        notFoundText="This product is not available yet."
        placeholder="🔍   Search for any software..."
        optionsVariant="avatar"
        tagVariant="avatar"
        search={searchFn}
        multiple
        ref={elementRef}
        onFwChange={handleChange}
      ></FwSelect>
      </div>

      <button className="bg-gradient-to-r from-purple-600 to-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full"
      
        onClick={async () => {
          console.log(await elementRef.current.getSelectedItem());
          alert("Check console for selected Apps")
        }}
      >Next</button>
    
    </div>
  );
}

export default Search;
