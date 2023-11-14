import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
      <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
          <div className="gpt3__whatgpt3-feature">
              <Feature title="What is GPT-3" text="Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here." />
          </div>
          <div className="gpt3__whatgpt3-heading">
              <h1 className="gradient__text">
                  The possibilities are beyond your imagination
              </h1>
              <p>Explore The Library</p>
          </div>
          <div className="gpt3__whatgpt3-container">
              <Feature title="Chatbots" text="Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here " />
              <Feature title="Knowledgebase" text="Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here" />
              <Feature title="Education" text="Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here " />
          </div>
        
    </div>
  )
}

export default WhatGPT3
