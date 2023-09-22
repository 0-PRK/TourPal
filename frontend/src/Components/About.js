import React from "react";
import "../App.css"; // Import the CSS file
// import Footer from "./footer";
// import Navbar from "./Navbar";

export default function About(props) {
  return (
    <div className="aligncenter1">
      {/* <Navbar/> */}
      <div className="quicksand18">
        <h1 style={{ fontSize: "100px" }}>ABOUT US</h1>
        <p>
          Welcome to TourPal! We're thrilled to be your travel companion on your
          next adventure. Whether you're an experienced traveler or setting out
          on your first journey, our mission is to make trip planning simple and
          provide you with personalized travel recommendations tailored to your
          interests. Get ready to embark on unforgettable journeys with TourPal.
        </p>
      </div>
      <div id="about-2">
        <br />
        <div className="content-box-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="about-item text-center">
                  <h1>OUR MISSION</h1>
                  <hr />
                  <p className="quicksand10">
                    At TourPal, we aim to streamline the trip planning process
                    and offer you personalized travel recommendations. We
                    understand that every traveler has unique preferences and
                    desires, so we leverage data analysis and algorithms to
                    understand your travel preferences and suggest the perfect
                    destinations and experiences for you. Our goal is to inspire
                    and guide travelers, helping them discover new destinations
                    and effortlessly create memorable travel experiences.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <h1>FEATURES</h1>
                  <hr />
                  <p className="quicksand10">
                    TourPal offers a variety of features to enhance your travel
                    planning experience. Users can search for destinations based
                    on their interests, whether it's adventure, culture, nature,
                    or relaxation. Registered users can save and rate their
                    favorite trips, enabling them to build personalized travel
                    itineraries and keep track of their past adventures. With
                    features like "Recommended Trips," we strive to provide a
                    diverse selection of travel options to cater to every
                    traveler's preferences. Our user-friendly interface ensures
                    that finding and selecting your dream destinations is quick
                    and hassle-free.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-item text-center">
                  <h1>FUTURE PLANS</h1>
                  <hr />
                  <p className="quicksand10">
                    We have exciting plans for the future of TourPal. Our
                    potential enhancements include integrating with renowned
                    travel services, allowing users to seamlessly book flights,
                    accommodations, and activities directly through our
                    platform. We also aspire to create a community of passionate
                    travelers who can share their travel stories, tips, and
                    recommendations. Additionally, we plan to expand our
                    offerings beyond traditional trips and incorporate unique
                    travel experiences such as eco-tours, culinary adventures,
                    and wellness retreats. Stay tuned for these exciting
                    updates!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <br />
      <h1 className="quicksand20" style={{ marginTop: "0" }}>
        <i>*We Hope You Enjoy Your Journeys with TourPal*</i>
      </h1>
      {/* <Footer /> */}
    </div>
  );
}
