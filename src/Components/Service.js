import ServicesImg_1 from "../Assets/Launching-amico.svg";
import ServicesImg_2 from "../Assets/Website Creator-cuate.svg";
import ServicesImg_3 from "../Assets/Milestones of business projects-pana.svg";

function Service() {
  return (
    <div className = "Services_Main">
      <section class="Services" id="Services">
        <div class="heading">
          <span>Services</span>
          <h2>We Provide Best Quality Skills</h2>
        </div>
        <div class="services-container">
          <div class="s-box">
            <img src={ServicesImg_1} alt="start"></img>
            <h3>Start</h3>
            <p>
              Meet to discuss your learning goals and success criteria. Find a
              small to medium-sized problem or process that could be
              accommodated in a Hackathon.
            </p>
          </div>
          <div class="s-box">
            <img src={ServicesImg_2} alt="learn"></img>
            <h3>learnt</h3>
            <p>
              With ReUnion, You can create posts detailing what you're looking
              for and what skills you have to offer.
            </p>
          </div>
          <div class="s-box">
            <img src={ServicesImg_3} alt="Achieve"></img>
            <h3>grow</h3>
            <p>
              Join our community of ambious and motivated students today and
              start building your network, gaining practical Knowladge and
              preparing for your future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
