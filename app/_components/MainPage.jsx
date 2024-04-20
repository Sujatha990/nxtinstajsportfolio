"use client";

export default function MainPage() {
  
  return (
    <div className="container">
      <div className="">
        <div className="main">
          <div className="mainText">
            <h3 style={{ color: "#9c506e" }}>Hello! I am</h3>
            <h1 style={{ color: "#9c506e" }}>Sujatha V</h1>
            <p>
              Developing user-friendly web interfaces is my passion as a
              front-end developer. <br />
              I&apos;m looking for an entry-level job where I can use my talents
              in HTML, CSS, JavaScript,
              <br /> Bootstrap, and React.js to create responsive websites.
            </p>
            <button onClick={() => alert("Resume Downloaded")}>Download CV</button>
          </div>
          <img src="./images/img1.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
