import "./featuredInfo.css";
import {
  TableChart,
  AddToQueue,
  AttachFile,
} from "@material-ui/icons";

export default function FeaturedInfo({title,imageUrl,body}) {
  return (
  <div className='card-container'>
    <div className='image-container'>
      <img src ={imageUrl} alt='' />
    </div>
    <div className='card-content'>
 <div className='title-container'>
     <h1>{title} </h1>
    </div>
 <div className='body-container'>
      <p> {body} </p>
    </div>

    </div>
    
<div className="btn">
  <button>
    <a>Enroll</a>
  </button>
</div>

  </div>



    // <div className="featured">
    //   <div className="featuredItem">
    //   <span className="featuredMoneyRate">
    //         <TableChart  className="featuredIcon negative"/>
    //       </span>
    //     <span className="featuredTitle">Courses</span>
    //     <div className="featuredMoneyContainer">
    //       <span className="featuredMoney">15</span>
          
    //     </div>
    //   </div>
       
    //   <div className="featuredItem">
    //   <span className="featuredMoneyRate">
    //         <AddToQueue className="featuredIcon negative"/>
    //       </span>
    //     <span className="featuredTitle">Students</span>
    //     <div className="featuredMoneyContainer">
    //       <span className="featuredMoney">100</span>
          
    //     </div>
        
    //   </div>
    //   <div className="featuredItem">
    //       <span className="featuredMoneyRate">
    //         <AttachFile className="featuredIcon"/>
    //       </span>
    //     <span className="featuredTitle">Assignments</span>
    //     <div className="featuredMoneyContainer">
    //       <span className="featuredMoney">10</span>
          
    //     </div>
       
    //   </div>
    // </div>
  )
};
