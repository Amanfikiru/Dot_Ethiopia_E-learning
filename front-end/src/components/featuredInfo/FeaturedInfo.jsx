import "./featuredInfo.css";
import {
  TableChart,
  AddToQueue,
  AttachFile,
} from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
      <span className="featuredMoneyRate">
            <TableChart  className="featuredIcon negative"/>
          </span>
        <span className="featuredTitle">Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">15</span>
          
        </div>
      </div>
       
      <div className="featuredItem">
      <span className="featuredMoneyRate">
            <AddToQueue className="featuredIcon negative"/>
          </span>
        <span className="featuredTitle">Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">100</span>
          
        </div>
        
      </div>
      <div className="featuredItem">
          <span className="featuredMoneyRate">
            <AttachFile className="featuredIcon"/>
          </span>
        <span className="featuredTitle">Assignments</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10</span>
          
        </div>
       
      </div>
    </div>
  );
}
