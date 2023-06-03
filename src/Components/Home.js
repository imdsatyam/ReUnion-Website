import HomeImg from '../Assets/Software code testing-amico.svg';

function Home() {
  return (
    <div className="Home_Main">
      <section class="home" id="home">
        <div class="home-text">
          <h1>ReUnion</h1>
          <h2>
            Knowladge The <br></br>Most Precious Things
          </h2>
          <a href="#home" class="btn">
            Today's Challages
          </a>
        </div>
        <div class="home-img">
          <img src={HomeImg} alt="home-img"></img>
        </div>
      </section>
    </div>
  );
}

export default Home;
