import { saveAs } from 'file-saver';
import React, { useState } from 'react';

export default function App() {
  return (
    <div>
      <h1>React Meme Generator</h1>
      <MemeGeneratorForm />
    </div>
  );
}

function MemeGeneratorForm() {
  const [topText, setTopText] = useState('_');
  const [bottomText, setBottomText] = useState('_');
  const [selectedTemplate, setSelectedTemplate] == useState('michael-scott');
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
    saveAs(generatedMeme);
  };

  return (
    <div>
      <label htmlFor="top-text">Top text</label>
      <input id="top-text" onChange={handleTopTextChange} />
      <label htmlFor="bottom-text">Bottom text</label>
      <input id="bottom-text" onChange={handleBottomTextChange} />

      <label htmlFor="meme-template">Meme template</label>
      <input id="meme-template" onChange={handleTemplateChange} />

      <div id="meme-image">
        {topText === '' || selectedTemplate === '' ? (
          <img
            src={selectedTemplate}
            data-test-id="meme-image"
            alt="default meme"
          />
        ) : (
          <img
            src={generatedMeme}
            data-test-id="meme-image"
            alt="randomly generated meme"
          />
        )}
      </div>

      <div className="App">
        <button onClick={handleClick}>Download</button>
      </div>
    </div>
  );
}
