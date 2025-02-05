import { useState } from "react";

const FuelSavingsCalculator = () => {
  const [currentFuelCost, setCurrentFuelCost] = useState(0);
  const [cngCost, setCngCost] = useState(0);
  const [savings, setSavings] = useState(0);

  const calculateSavings = () => {
    setSavings(currentFuelCost - cngCost);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1f1f1f] dark:text-white mb-8">
        Calculate Your Fuel Savings with CNG
      </h2>
      <input
        type="number"
        placeholder="Current Fuel Cost"
        onChange={(e) => setCurrentFuelCost(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="CNG Cost"
        onChange={(e) => setCngCost(Number(e.target.value))}
      />
      <button onClick={calculateSavings}>Calculate</button>
      <p>Your savings: ${savings}</p>
    </div>
  );
};

export default FuelSavingsCalculator;
