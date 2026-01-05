import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

export const DashboardChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const data: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        label: "Dataset 2",
        data: [85, 53, 85, 93, 42, 25, 32],
        borderColor: "#b778f0",
      },
    ],
  };
  return (
    <>
      <div className="dash-right-bottom-chart">
        <Line options={options} data={data} />;
      </div>
    </>
  );
};
