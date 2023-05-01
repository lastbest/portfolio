import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

import React, { useState, useEffect } from "react";

function App() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "75bbb8afd2364626940ce60f5c305921";
    fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then((res) => res.json())
      .then((resJson) => {
        setResponse(resJson);
      });
  }, []);

  return (
    <div className="App">
      <NotionRenderer
        blockMap={response}
        fullPage={true}
      />
    </div>
  );
}

export default App;
