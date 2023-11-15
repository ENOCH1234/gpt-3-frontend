import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here'
    },
    {
        title: 'Become the tended active',
        text: 'Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here'
    },
    {
        title: 'Message or aim nothing',
        text: 'Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here'
    },
    {
        title: 'Really boy law county',
        text: 'Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here Anything I want to put here'
    }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
            <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into the Future Today and Make it Happen.</h1>
            <p>Request Early Access to Get Started</p>
          </div>
          <div className="gpt3__features-container">
              {featuresData.map((item, index) => (
                  <Feature title={item.title} text={item.text} key={item.title + index} />
              ))}
          </div>
    </div>
  )
}

export default Features
