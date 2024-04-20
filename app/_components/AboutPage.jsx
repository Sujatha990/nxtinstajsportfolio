function AboutPage() {
  return (
    <div className="about">
      <div id="about">
        <div className="head">
          <h2 style={{ color: "#9c506e" }} className="sub-head">
            Personal Summary
          </h2>
        </div>
        <div className="">
          <div className="aboutText">
            <div className="para">
              <h1 style={{ color: "#362262" }}>Skills</h1>

              <ul className="bullet-list">
                <br />

                <li>Frontend Technologies: HTML, CSS, JavaScript</li>
                <li>Frameworks/Libraries: Bootstrap, React.js</li>
                <li>Version Control:Git</li>
                <li>
                  Web Development Tools: Visual Studio Code Problem-solving and
                  Debugging
                </li>
                <br />
              </ul>
              <br />

              <h1 style={{ color: "#362262" }}>Timeline</h1>
              <div>
                <p>
                  <b>2023:&nbsp;&nbsp;&nbsp;&nbsp; </b> Completed an internship
                  program with Besant Technologies, Bengaluru, as a Full Stack
                  Developer-Intern.
                </p>

                <p>
                  <b>2019:&nbsp;&nbsp;&nbsp;&nbsp; </b> Completed a Bachelor of
                  Engineering degree program at Bengaluru&apos;s DR. Sri
                  Shivakumara Mahaswamy College of Engineering, obtaining a 70
                  percent overall grade in computer science.
                </p>

                <p>
                  <b>2014:&nbsp;&nbsp;&nbsp;&nbsp; </b> Completed an
                  Intermediate program at Vijaya Chetana PU College,
                  Chikkabalapura obtaining a total score of 59 percent.
                </p>

                <p>
                  <b>2012:&nbsp;&nbsp;&nbsp;&nbsp; </b> Completed SSLC at
                  Srimathi Stella Convent in Gowribidanur, Karnataka, with a
                  overall grade of 64 percent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
