import './style/global.css'
import { useState } from 'react';
import NameCard from './components/NameCard';
import ActivityContainer from './components/ActivityContainer';
import data from './data/data.json'

export default function App() {
  const [current, setCurrent] = useState('weekly');
  const [previous, setPrevious] = useState('weekly');

  function changeDisplayedData(timeFrame: string) {
    setCurrent(timeFrame);
    setPrevious(timeFrame);
  }

  return (
    <div className="dashboard-container">
      <NameCard changeDisplayedData={changeDisplayedData} current={current} />
      <ActivityContainer data={data} current={current} previous={previous} />
    </div>
  )
}

