import Date from "./Date";
import Guest from "./Guest";
import Location from "./Location";


export default function Hero() {
  return (
    <>
    <div className='hero'>
        <div className="hero-container">
            <h1>Start Your Journey With Us</h1>
            <p>Find what makes you happy anytime,anywhere</p>
            <div className="hero-search-container">
                <div className="hero-search">
                    <div className="hero-wrapper">
                       <Location/>
                        <Date/>
                        <Guest/>
                        <div className="search-button">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}
