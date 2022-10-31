import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData, userDatas } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Student Analytics" grid dataKey="Active Students"/>
      <Chart data={userDatas} title="Courses Analytics" grid dataKey="Active Courses"/>
    </div>
  );
}
