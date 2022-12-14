import imageHero from './images/illustration-hero.svg';
import imageIconMusic from './images/icon-music.svg';
import './app.scss';

function App() {
  return (
    <div className="app">
      <img className="imageHero" src={imageHero} alt="image hero" />
      <main className="containerData">
        <h1 className="title">Order Summary</h1>
        <p className="text">
          You can now listen to millons of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="containerPlan">
          <div className="containerInfoPlan">
            <img
              className="imageLogoMusic"
              src={imageIconMusic}
              alt="logo music"
            />
            <h3>
              Annual Plan
              <span>$59.99/year</span>
            </h3>
          </div>
          <a href="#">Change</a>
        </div>
        <button className="btnPayment">Proceed to Payment</button>
        <button className="btnCancelOrder">Cancel Order</button>
      </main>
    </div>
  );
}

export default App;
