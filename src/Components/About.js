import AboutImg from '../Assets/Software code testing-rafiki.svg';

function About(){
    return(
        <div className="About_Main">
            <section class = "about" id = "about">
        <div class = "about-img">
            <img src = {AboutImg} alt = "about-img"></img>
        </div>
        <div class = "about-text">
            <span>About Us</span>
            <h2>We speak the good <br></br> coding language</h2>
            <p>
                Our platform makes it easy for students to connect with others who have similar skills and experiences. 
                Whether you're looking for a partner for a class project, a team for a hackathon, or just someone to bounce 
                ideas off of, we've got you covered.
            </p>
            <a href = "#home" class = "btn" >Learn More</a>
        </div>
    </section>
        </div>
    );
}

export default About;