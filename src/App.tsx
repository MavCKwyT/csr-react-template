import React, {} from 'react';
import { mockData } from './api/mockData';

import './App.css';

import { Card } from './Components/Card/Card';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
      }}
    >
      <div>
        <div
          className="pb-5"
          style={{
            paddingBottom: '25px',
          }}
        >
          <button
            type="button"
            className="bg-[#2096F3] text-white rounded w-[200px] h-[50px]"
            style={{
              backgroundColor: '#2096F3',
            }}
          >
            Самый дешевый
          </button>
          <button
            type="button"
            className="bg-[#FFFFFF] text-black rounded w-[200px] h-[50px]"
            style={{
              backgroundColor: '#FFFFFF',
            }}
          >
            Самый быстрый
          </button>
        </div>
        <div
          className="flex flex-col gap-5"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}
        >
          {mockData.map((ticket) => {
            return <Card ticket={ticket} />;
          })}
        </div>
      </div>
      <div />
    </div>
  );
}

export default App;
