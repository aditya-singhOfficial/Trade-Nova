import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return (
    <div className="flex justify-center items-center w-full h-full mt-12 mb-12">
      <div className="w-full">
        <Doughnut data={data} />
      </div>
    </div>
  );
}
