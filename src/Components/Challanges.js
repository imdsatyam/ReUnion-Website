import ChallangesImg_1 from "../Assets/Business challenge-bro.svg";
import ChallangesImg_2 from "../Assets/Next steps-rafiki.svg";
import ChallangesImg_3 from "../Assets/Next steps-bro.svg";

function Challages() {
  return (
    <div className="Challanges_Main">
      <section class="challages" id="challages">
        <div class="heading">
          <span>Challages</span>
          <h2>Today's Challages</h2>
        </div>
        <div class="challages-container">
          <div class="box">
            <div class="box-img">
              <img src={ChallangesImg_1} alt="challage-img"></img>
            </div>
            <h2>Software Development</h2>
            <h3>Achieve Your Goal</h3>
            <span>09:00 AM</span>
          </div>
          <div class="box">
            <div class="box-img">
              <img src={ChallangesImg_2} alt="challage-img"></img>
            </div>
            <h2>Web Development</h2>
            <h3>Achieve Your Goal</h3>
            <span>01:00 PM</span>
          </div>
          <div class="box">
            <div class="box-img">
              <img src={ChallangesImg_3} alt="challage-img"></img>
            </div>
            <h2>Software Testing</h2>
            <h3>Achieve Your Goal</h3>
            <span>06:00 PM</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Challages;
