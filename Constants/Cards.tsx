import ColumnChart from "../components/Charts/ColumnChart";
import LineChart from "../components/Charts/LineChart";
import PieChart from "../components/Charts/PieChart";
import RadarChart from "../components/Charts/RadarChart";

export const cards = [
  {
    id: 0,
    title: "super plus",
    tag: "sales",
    price: 24780,
    percentage: 49,
    chart:<LineChart/>
  },
  {
    id: 1,
    title: "super pro",
    tag: "discount",
    price: 14580,
    percentage: -4,
    chart:<ColumnChart/>
  },
  {
    id: 2,
    title: "super plus",
    tag: "crypto currency",
    price: 16780,
    percentage: -9,
    chart:<PieChart/>
  },
  {
    id: 3,
    title: "super pro",
    tag: "inflation",
    price: 230,
    percentage: 12,
    chart:<RadarChart/>
  },
];
