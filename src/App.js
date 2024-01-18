import { saveAs } from 'file-saver';
import React, { useState } from 'react';

export default function Memeform() {
  return (
    <div>
      <h1>React Meme Generator</h1>
      <MemeForm />
    </div>
  );
}

function MemeForm() {
  const [topText, setTopText] = useState('_');
  const [bottomText, setBottomText] = useState('_');
  const [selectedTemplate, setSelectedTemplate] = useState('oprah');
  const defaultMeme = `https://api.memegen.link/images/${selectedTemplate}/_/_.png`;
  const generatedMeme = `https://api.memegen.link/images/${selectedTemplate}/${topText}/${bottomText}.png`;

  function handleTopTextChange(event) {
    setTopText(event.target.value);
  }

  function handleBottomTextChange(event) {
    setBottomText(event.target.value);
  }

  function handleTemplateChange(event) {
    setSelectedTemplate(event.target.value);
  }

  const handleClick = () => {
    saveAs(
      `https://api.memegen.link/images/${selectedTemplate}/${topText}/${bottomText}.png`,
    );
  };

  return (
    <div>
      {/* Input for input boxes with associated label */}
      <label htmlFor="top-text">Top text</label>
      <input
        id="top-text"
        onChange={handleTopTextChange}
        placeholder="Enter top text"
      />

      <label htmlFor="bottom-text">Bottom text</label>
      <input
        id="bottom-text"
        onChange={handleBottomTextChange}
        placeholder="Enter bottom text"
      />

      <label htmlFor="meme-template">Meme template</label>
      <input
        id="meme-template"
        onChange={handleTemplateChange}
        placeholder="Enter meme template"
      />

      {/* conditional Image container which shows different picture depending on the state of upper text and meme name. If one of them is empty URL breaks. */}
      <div id="meme-image">
        {topText === '' || selectedTemplate === '' ? (
          <img src={defaultPic} data-test-id="meme-image" alt="default Meme" />
        ) : (
          <img
            src={generatedMeme}
            data-test-id="meme-image"
            alt="Generated Meme"
          />
        )}
      </div>

      {/* Button to trigger the download */}
      <div className="App">
        <button onClick={handleClick}>Download</button>
      </div>
    </div>
  );
}
