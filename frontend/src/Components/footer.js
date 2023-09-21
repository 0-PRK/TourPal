import React from "react";
import logo from "./images/Logo.png";

export default function Footer(props) {
  return (
    <footer className="container1 footerbg">
      <div className="column">
        <br />
        <br />
        <br />
        <br />
        <br />
        <img
          src={logo}
          alt="Logo"
          width="150"
          height="150"
          style={{
            borderRadius: 250,
          }}
        />
      </div>
      <div className="column">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Contact Us</h2>
        <p className="quicksand " style={{ fontSize: 20 }}>
          9861-000-0000
          <br />
          contact@tourpal.com
        </p>
      </div>
      <div className="column">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>TourPal</h2>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 quicksand">
          <li className="nav-item">
            <a className="nav-link" style={{ fontSize: 20 }} href="/blogs">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ fontSize: 20 }}
              href="https://www.sparkcar.org/"
              target="_blank"
              rel="noreferrer"
            >
              Car Rental
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ fontSize: 20 }}
              href="https://www.magicalnepal.com/blog/best-treks-nepal/"
              target="_blank"
              rel="noreferrer"
            >
              Trekking Routes
            </a>
          </li>
        </ul>
      </div>
      <div className="column">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Guides and Resources</h2>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 quicksand">
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ fontSize: 20 }}
              href="https://www.google.com/travel/explore?hl=en-NP&gl=np"
              target="_blank"
              rel="noreferrer"
            >
              Best Places to Visit
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ fontSize: 20 }} href="/faq">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ fontSize: 20 }}
              href="http://nepal.gov.np:8080/NationalPortal/view-page?id=89"
              target="_blank"
              rel="noreferrer"
            >
              Heritage Sites
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ fontSize: 20 }}
              href="https://weather.com/weather/today/l/47da5d036151c88cb7c11179f0a193adbee6dd3d9a197240483506f5f1d23963"
              target="_blank"
              rel="noreferrer"
            >
              Weather In Nepal
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ fontSize: 20 }}
              href="https://www.google.com/search?rlz=1C1BNSD_enNP986NP986&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=APwXEddpbk9AJ-ewddg2S6tOZzZcoAyfbg:1683001318338&q=restaurant+in+nepal&rflfq=1&num=10&sa=X&ved=2ahUKEwjBoPG95NX-AhWMS2wGHdjtAe8QjGp6BAgREAE&biw=1396&bih=656&dpr=1.38#rlfi=hd:;si:;mv:[[27.716610451206623,85.54976583488033],[27.564235563020176,85.26618124015377]]"
              target="_blank"
              rel="noreferrer"
            >
              Restaurants in Nepal
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
