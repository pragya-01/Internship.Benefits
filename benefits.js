import { Component } from "react";
import { FaRegHandPointRight} from "react-icons/fa";
import './benefits.css';
import ImageBenefits from './benefitsImage.jpg';


class benefits extends Component {
  render() {
  return (
    <div className="benefits">
    <div className="imageBenefits">
       <img src={ImageBenefits}/>
    </div>
    <div className="textBenefits">
     <div classNamenane="titleBenefits">
         <h1>
         Going Virtual With Tech
         </h1>
         <p className="subtextTitleBenefits">
         Untap your business potential with wide variety of test support 
         suitable for every budget
         </p>
     </div>
     <div className="boxPointsBenefits">
        <div className="pointsBenefits">
              <div className="iconsPointsBenefits">
              <FaRegHandPointRight className="iconsPointsBenefits"/>
                 </div>
                 <div className="rowPointsBenefits">
                       <h2>
                       An investement for your business
                       </h2>
                       <p
                       className="descriptionPointsBenefits">
                       Use this space to describe this benefit
                     </p>
                 </div>
         </div>
         <div className="pointsBenefits">
             <div className="iconsPointsBenefits">
             <FaRegHandPointRight className="iconsPointsBenefits"/>
                </div>
                <div className="rowPointsBenefits">
                      <h2>
                      Connect, meet and rise together
                      </h2>
                      <p
                      className="descriptionPointsBenefits">
                      Use this space to describe this benefit
                    </p>
                </div>
        </div>
        <div className="pointsBenefits">
         <div className="iconsPointsBenefits">
         <FaRegHandPointRight className="iconsPointsBenefits"/>
            </div>
            <div className="rowPointsBenefits">
                  <h2>
                  Customized tools for your business management
                  </h2>
                  <p
                  className="descriptionPointsBenefits">
                  Use this space to describe this benefit
                </p>
            </div>
    </div>
    </div>
    </div>
</div>
        );
}
};

export default benefits;