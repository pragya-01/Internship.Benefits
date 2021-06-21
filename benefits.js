import { Component } from "react";
import { FaRegHandPointRight} from "react-icons/fa";
import './App.css';
import imageBenefits from './benefitsImage';


class App extends Component {
  render() {
  return (
           <div classname="benefits">
       <div classname="imageBenefits">
          <img src={imageBenefits}/>
       </div>
       <div classname="textBenefits">
        <div classname="titleBenefits">
            <h1>
            Going Virtual With Tech
            </h1>
            <p classname="subtextTitleBenefits">
            Untap your business potential with wide variety of test support 
            suitable for every budget
            </p>
        </div>
        <div classname="boxPointsBenefits">
           <div classname="pointsBenefits">
                 <FaRegHandPointRight classname="iconsPointsBenefits"/>
                    <div classname="rowPointsBenefits">
                          <h2>
                          It is an investement for your business
                          </h2>
                          <p
                          classname="descriptionPointsBenefits">
                          Use this space to describe this benefit
                        </p>
                    </div>
            </div>
            <div classname="pointsBenefits">
                <FaRegHandPointRight classname="iconsPointsBenefits"/>
                   <div classname="rowPointsBenefits">
                         <h2>
                         Connect, meet and rise together
                         </h2>
                         <p
                         classname="descriptionPointsBenefits">
                         Use this space to describe this benefit
                       </p>
                   </div>
           </div>
           <div classname="pointsBenefits">
          <FaRegHandPointRight classname="iconsPointsBenefits"/>
               <div classname="rowPointsBenefits">
                     <h2>
                     Customized tools for your business management
                     </h2>
                     <p
                     classname="descriptionPointsBenefits">
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

export default App;
