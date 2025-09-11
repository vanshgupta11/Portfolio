// App.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const data = {
    labels: ["basketball", "web D", "vibe-coding", "reading", "nothing"],
    datasets: [
      {
        label: "%",
        data: [98, 80, 55, 38, 75 ],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(250,20,25)",
        tension:1.5,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: true, text: "INTRESTS" },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
