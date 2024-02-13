import { useEffect, useState } from 'react';
import PieChart from './Components/PieChart';
import { dataMock } from './dataMock';
import './App.css';

function App() {
  const [dataSubCategory, setDataSubCategory] = useState([]);

  useEffect(() => {
    function countSubCategories(data) {
      const counts = [];
      for (const category in data) {
        counts.push({ id: category, value: data[category].length });
      }
      return counts;
    }

    setDataSubCategory(countSubCategories(dataMock.data));
  }, []);

  return (
    <div>
      <h3 style={{color: 'white'}}>Chart Sub Category</h3>
      <PieChart dataPie={dataSubCategory} />
    </div>
  );
}

export default App;
