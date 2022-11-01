import "./adminfeat.css";
import {
  TableChart,
  AddToQueue,
  AttachFile,
  
} from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="adminfeatured">
      <div className="adminfeaturedItem">
        <span className="adminadminfeaturedMoneyRate">
            <TableChart  className="adminfeaturedIcon negative"/>
          </span>
        <span className="adminfeaturedTitle">Instructor</span>
        <div className="adminfeaturedMoneyContainer">
          <span className="adminfeaturedMoney">5</span>
        </div>
      </div>

      <div className="adminfeaturedItem">
      <span className="adminfeaturedMoneyRate">
            <AddToQueue className="adminfeaturedIcon negative"/>
          </span>
        <span className="adminfeaturedTitle">Students</span>
        <div className="adminfeaturedMoneyContainer">
          <span className="adminfeaturedMoney">100</span>
        </div>
      </div>

      <div className="adminfeaturedItem">
      <span className="adminadminfeaturedMoneyRate">
            <TableChart  className="adminfeaturedIcon negative"/>
          </span>
        <span className="adminfeaturedTitle">Courses</span>
        <div className="adminfeaturedMoneyContainer">
          <span className="adminfeaturedMoney">15</span>
        </div>
      </div>
        
      <div className="adminfeaturedItem">
          <span className="adminfeaturedMoneyRate">
            <AttachFile className="adminfeaturedIcon"/>
          </span>
        <span className="adminfeaturedTitle">Certificate request</span>
        <div className="adminfeaturedMoneyContainer">
          <span className="adminfeaturedMoney">10</span>
          
        </div>
       
      </div>
    </div>
  );
}
