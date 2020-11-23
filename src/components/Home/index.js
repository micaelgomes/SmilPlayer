import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { UilPlay } from '@iconscout/react-unicons'

const Home = () => {
  const [codeUser, setCodeUser] = useState(`<?xml version="1.0"?>
<!DOCTYPE smil PUBLIC "-//W3C//DTD SMIL 2.0//EN" "http://www.w3.org/2001/SMIL20/SMIL20.dtd">
<smil xmlns="http://www.w3.org/2001/SMIL20/Language">
  <head>
  </head>
  <body>
    <img src="dart.jpeg" alt="Dart pai" dur="10s"/>
    <img src="leia.jpeg" alt="Leia sorrindo"/>
    <img src="luke.jpeg" alt="Luke bolado"/>
    <video src="video.mp4" />
  </body>
</smil>`);

  const handleUpdateText = (text) => {
    if( text.length === 0 ) {
      setCodeUser(" ")
    } else {
      setCodeUser(text)
    }
  }

  return (
    <>
      <div className="master-main">
        <div className="m-auto text-center">
          <img src={'logo.png'} alt="logo path" />
          <h1 className="title">teste e aprenda Smil na Web.</h1>
          <p className="sub-title">Synchronized Multimedia Integration Language (SMIL) 1.0 -- Use our free, collaborative, in-browser IDE to code in 50+ languages , *b* , without spending a second on setup.</p>

          <form action="/grid" className="playground-area">
            <textarea
              id="code"
              name="code-area"
              autoFocus 
              className="playground" 
              autoComplete="off" 
              autoCorrect="off" 
              spellCheck="false"
              // rows="5"
              // cols="70"
              placeholder="Smil code here..."
              value={codeUser}
              onChange={(e) => handleUpdateText(e.target.value)} />

            <SyntaxHighlighter 
              language="xml" 
              style={monokai} 
              showLineNumbers={true}
              children={codeUser} />
            
            <button type="submit" className="btn mx-auto">
              <UilPlay />
              <h5>run code</h5>
            </button>
          </form>

        </div>
      </div>
    </>
  );
}

export default Home