// App.jsx
import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register required components for polar area
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title);

export default function Chart() {
  const data = {
    labels: ["basketball", "web D", "vibe-coding", "reading", "nothing"],
    datasets: [
      {
        label: "%",
        data: [98, 80, 55, 38, 75],
        backgroundColor: [
          "rgba(255, 250, 0,0.7 )",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "INTERESTS" },
    },
    scales: {
      r: {
        ticks: { beginAtZero: true },
      },
    },
  };

  return (
    <div className="h-[80vh] w-full flex items-center justify-center bg-gray-100">
      <div className="h-full bg-white p-6 rounded-xl shadow-lg">
        <PolarArea data={data} options={options} />
      </div>
    </div>
  );
}
