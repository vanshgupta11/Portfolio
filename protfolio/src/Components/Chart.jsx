// App.jsx
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Chart } from "react-chartjs-2";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Charts() {
  const data = {
    labels: ["basketball", "web D", "vibe-coding", "reading", "nothing"],
    datasets: [
      {
        type: "line", // area chart (line with fill)
        label: "Interest %",
        data: [98, 80, 55, 38, 75],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.3)", // area fill
        borderWidth: 2,
        fill: true,
        tension: 0.4, // smooth curve
      },
      {
        type: "bar", // mixing with bar chart
        label: "Comparison",
        data: [90, 70, 40, 50, 65],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "INTERESTS - Mixed Area Chart" },
    },
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center border-2 border-amber-300">
      <div className="h-[80%] w-[60%] p-6 rounded-xl shadow-lg ">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
}
