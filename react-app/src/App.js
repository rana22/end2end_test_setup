import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { BuilderComponent, builder } from '@builder.io/react';
import parse from 'html-react-parser';

import { builderResponse } from './utils/mockData';
import { getValueByKey } from './utils/Data';
import { builderJsonToHtml } from './utils/buildElements';
builder.init('3508adaa54f54186a03449ad4f2e6bb3')

function Page() {
  return <BuilderComponent model="page" content={builderResponse} />;
}

function HtmlRenderer({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

const App = () => {
  const [content, setContent] = useState(undefined);

  useEffect(() => {
    const retriveDesign = async () => {
       const response = await fetch(`https://cdn.builder.io/api/v2/content/page?apiKey=3508adaa54f54186a03449ad4f2e6bb3`);
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();

      return data;
    }

    const design = retriveDesign();
    console.log(design);
    // setContent(design);
  }, [])
  console.log(builderResponse);
  let htmlBocks = [];
  if (Array.isArray(builderResponse.results)) {
    builderResponse.results.forEach((json) => {
      const val = getValueByKey(json, 'blocks');
      console.log(val);
      const html = val.map((item) => builderJsonToHtml(item));
      htmlBocks.push(...html)
      console.log(html);
    })
  }
 
  return (
    <>
      App component
      <h3>init commit</h3>
      <p>auto deployment 1</p>
      <h3> John Doe </h3>
      {htmlBocks.map(block=> (
        <>
          <HtmlRenderer html={block} />
        </>
      ))}
    </>
  );
};

export default App;