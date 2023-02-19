import React from "react";
import "./Banner.css";
import Avatar from "avataaars";

export default function Banner() {
  return (
    <>
      <div className="container">
        <div className="row" style={{ width: "auto", height: "300px" }}>
          <div className="card text-bg-dark" style={{ border: "0" }}>
            {/* <img src="..." className="card-img" alt="..." /> */}
            <div className="custom-shape-divider-top-1676734937">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                ></path>
              </svg>
              <div
                className="jumbotron display-2"
                style={{
                  textAlign: "center",
                  textShadow:
                    "1px 1px 2px #65c9ff, 0 0 1em blue, 0 0 0.2em blue",
                  animationName: "example",
                  animationDuration: "5s",
                  animationIterationCount: "10",
                }}
              >
                Fashion Commit
              </div>
            </div>
            <Avatar
              avatarStyle="Circle"
              topType="LongHairStraight"
              accessoriesType="Wayfarers"
              hairColor="Black"
              facialHairType="Blank"
              clotheType="CollarSweater"
              clotheColor="White"
              eyeType="Happy"
              eyebrowType="UpDownNatural"
              mouthType="Eating"
              skinColor="DarkBrown"
            />
          </div>
        </div>
      </div>
    </>
  );
}
