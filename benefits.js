import { Component } from "react";
import { FaRegHandPointRight} from "react-icons/fa";
import './App.css';
import imageBenefits from './benefitsImage.jpg';


class App extends Component {
  render() {
  return (
           <div class="benefits">
       <div class="imageBenefits">
          <img src="pexels-maxime-francis-2246476.jpg">
       </div>
       <div class="textBenefits">
        <div classnane="titleBenefits">
            <h1>
            Going Virtual With Tech
            </h1>
            <p class="subtextTitleBenefits">
            Untap your business potential with wide variety of test support 
            suitable for every budget
            </p>
        </div>
        <div class="boxPointsBenefits">
           <div class="pointsBenefits">
                 <div class="iconsPointsBenefits">
                        <i class="far fa-hand-point-right"></i>
                    </div>
                    <div class="rowPointsBenefits">
                          <h2>
                          It is an investement for your business
                          </h2>
                          <p
                          class="descriptionPointsBenefits">
                          Use this space to describe this benefit
                        </p>
                    </div>
            </div>
            <div class="pointsBenefits">
                <div class="iconsPointsBenefits">
                       <i class="far fa-hand-point-right"></i>
                   </div>
                   <div class="rowPointsBenefits">
                         <h2>
                         Connect, meet and rise together
                         </h2>
                         <p
                         class="descriptionPointsBenefits">
                         Use this space to describe this benefit
                       </p>
                   </div>
           </div>
           <div class="pointsBenefits">
            <div class="iconsPointsBenefits">
                   <i class="far fa-hand-point-right"></i>
               </div>
               <div class="rowPointsBenefits">
                     <h2>
                     Customized tools for your business management
                     </h2>
                     <p
                     class="descriptionPointsBenefits">
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
