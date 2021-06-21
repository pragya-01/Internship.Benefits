import { Component } from "react";
import { FaArrowCircleRight} from "react-icons/fa";
import './App.css';
import imageBenefits from './benefitsImage.jpg';


class App extends Component {
  render() {
  return (
          
    <div classname="benefits">
         
          <div classname="textBenefits">
                <div classnane="titleBenefits">
                          <p>
                          Going Virtual With Tech
                          </p>
                          <p classname="subtextTitleBenefits">
                          Untap your business potential with wide variety of test support 
                          suitable for every budget
                          </p>
                </div>
            <div classname="pointsBenefits">
                  <table classname="rowPointsBenefits">
                        <tr>  
                          <td>
                            <FaArrowCircleRight classname="iconPointsBenefits"/>
                            </td>
                            <td>
                                <p classname="pointsBenefits">
                                It is an investement for your business
                                </p>
                                <p
                                classname="descriptionPointsBenefits">
                                Use this space to describe this benefit
                              </p>
                            </td>
                        </tr>
                    </table>
                    <table classname="rowPointsBenefits">
                        <tr>  
                          <td>
                            <FaArrowCircleRight classname="iconPointsBenefits"/>
                            </td>
                            <td>
                                <p classname="pointsBenefits">
                                It is an investement for your business
                                </p>
                                <p
                                classname="descriptionBenefits">
                                Use this space to describe this benefit
                              </p>
                            </td>
                        </tr>
                    </table>
                    <table classname="rowPointsBenefits">
                        <tr>  
                          <td>
                            <FaArrowCircleRight classname="iconPointsBenefits"/>
                            </td>
                            <td>
                                <p classname="pointsBenefits">
                                It is an investement for your business
                                </p>
                                <p
                                classname="descriptionPointsBenefits">
                                Use this space to describe this benefit
                              </p>
                            </td>
                        </tr>
                    </table>
           </div>
      </div>
      </div>
           );
}
};

export default App;
