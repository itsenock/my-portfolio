import "./styles.css";
import FadeInSection from "./FadeInSection";
import TypewriterOnScroll from "./TypewriterOnScroll";

export default function App() {
  return (
    <div id="">
      <nav id="nav">
        <div className="logo">Welcome</div>
        <ul id="nav-ul">
          <li>
            <a href="Skills.html">Skills</a>
          </li>
          <li>
            <a href="Projects.Html">Projects</a>
          </li>
          <li>
            <a href="Contacts.html">Contacts</a>
          </li>
          <li>
            <a href="bio.html">AboutMe</a>
          </li>
        </ul>
      </nav>
      <FadeInSection>
        <main>
          <section id="intro">
            <img src="profile2.jpg" alt="profile" />
            <div className="intro-content">
              <TypewriterOnScroll text="Welcome to my Portfolio 👋" />
              <p>
                Hi there! i'm a passionate computer Scientist and programming
                ethusiast <br /> with a talent for building meaningful solutions
                through code. <br />
                From crafting sleek, responsive websites to stimulating
                enterprise-grade <br /> network topologies, I blend creativity
                with logic to bring ideas to life. <br />
                In this space, you will find a showcase of my Projects, skills,
                nad technical explorations. <br />
                From algorithm development and dynamic routing setups to
                visually striking web designs. <br />
                Whether it's behind-the-scenes logic or front-end-elegance, i
                thrive on solving problems and pushing boundaries.
              </p>
              <button type="button">Download Resume</button>
            </div>
          </section>
          <section id="summary" className="fade-in">
            <FadeInSection>
              <img src="profile2.jpg" alt="background" id="fade-in-back" />
            </FadeInSection>
            <FadeInSection>
              <div id="bio" className="card">
                <img src="profile1.jpg" alt="image" id="bio-img" />
                <div className="bio-content">
                  <TypewriterOnScroll text="Bio" />
                  <p>
                    i'm a results driven computer Scientist with expert-level
                    prgramming skills and a passion for soliving complex
                    problems through clean, efficient code. <br /> I specialize
                    in languages like python , C++ , JavaScript, and thrive in
                    building everything from roubust algorithms to dynamic web
                    interfaces.
                  </p>
                  <a href="bio.html" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="card" id="skills">
                <TypewriterOnScroll text="Skills" />
                <div id="skills-content">
                  <div className="skill">
                    <p className="skill-title">🧑‍💻 Technical Skills</p>
                    <div className="skill-progress">
                      <p className="skill-bar"></p>
                    </div>
                  </div>
                  <div className="skill">
                    <p className="skill-title">🕸️ Web Development</p>
                    <div className="skill-progress">
                      <p className="skill-bar"></p>
                    </div>
                  </div>
                  <div className="skill">
                    <p className="skill-title">🌐 Networking and systems</p>
                    <div className="skill-progress">
                      <p className="skill-bar"></p>
                    </div>
                  </div>
                  <div className="skill">
                    <p className="skill-title">⚙️ technologies</p>
                    <div className="skill-progress">
                      <p className="skill-bar"></p>
                    </div>
                  </div>
                  <div className="skill">
                    <p className="skill-title">📂 Projects </p>
                    <div className="skill-progress">
                      <p className="skill-bar"></p>
                    </div>
                  </div>
                  <div className="skill">
                    <p className="skill-title">🧠 Soft skills</p>
                    <div className="skill-progress">
                      <p className="skill-bar"></p>
                    </div>
                  </div>
                </div>
                <a href="Skills.html" className="btn">
                  View Applications
                </a>
              </div>
            </FadeInSection>

            {/* --- Languages Section --- */}
            <FadeInSection>
              <div className="card" id="languages">
                <TypewriterOnScroll text="Languages" />

                <div id="languages-content">
                  <div className="language">
                    <p>python</p>
                    <img src="profile1.jpg" alt="icon" />
                  </div>
                  <div className="language">
                    <p>Javascript</p>
                    <img src="profile1.jpg" alt="icon" />
                  </div>
                  <div className="language">
                    <p>HtML</p>
                    <img src="profile1.jpg" alt="icon" />
                  </div>
                  <div className="language">
                    <p>CSS</p>
                    <img src="profile1.jpg" alt="icon" />
                  </div>
                  <div className="language">
                    <p>Java</p>
                    <img src="profile1.jpg" alt="icon" />
                  </div>
                  <div className="language">
                    <p>C++</p>
                    <img src="profile1.jpg" alt="icon" />
                  </div>
                  <div className="language">
                    <p>Reactjs</p>
                    <img src="profile1.jpg" alt="icon" />
                  </div>
                </div>
                <a href="Languages.html" className="btn">
                  View Details
                </a>
              </div>
            </FadeInSection>
            {/* --- Education Section --- */}
            <FadeInSection>
              <div className="card" id="education">
                <TypewriterOnScroll text="Education" />

                <div id="education-content">
                  <div className="program">
                    <h3>Degree</h3>
                    <p>Bsc. Computer Science</p>
                    <p className="inst">Laikipia university</p>
                  </div>
                  <div className="program">
                    <p>Cyber security</p>
                    <p className="inst">CISCO International Academy</p>
                  </div>
                  <div className="program">
                    <p>Networking and communication</p>
                    <p className="inst">Cisco Networking Academy</p>
                  </div>
                  <div className="program">
                    <p>Electronics, hardware</p>
                    <p className="inst">Cisco International Academy</p>
                  </div>
                  <div className="program">
                    <p>KCSE Certificate</p>
                    <p className="inst">St John School, Kanunga</p>
                  </div>
                </div>
                <a href="Education.html" className="btn">
                  View Details
                </a>
              </div>
            </FadeInSection>
            {/* --- Projects Section --- */}
            <FadeInSection>
              <div className="card" id="projects">
                <TypewriterOnScroll text="Projects" />

                <div id="projects-content">
                  <div id="project-1" className="project">
                    <p>OSPF,MD5 auth, redudancy</p>
                    <img src="profile3.jpg" alt="dashbord" />
                    <a href="Visit Project">Visit Project</a>
                  </div>
                  <div id="project-1" className="project">
                    <p>OSPF,MD5 auth, redudancy</p>
                    <img src="profile3.jpg" alt="dashbord" />
                    <a href="Visit Project">Visit Project</a>
                  </div>
                  <div id="project-2" className="project">
                    <p>OSPF,MD5 auth, redudancy</p>
                    <img src="profile3.jpg" alt="dashbord" />
                    <a href="Visit Project">Visit Project</a>
                  </div>
                  <div id="project-3" className="project">
                    <p>OSPF,MD5 auth, redudancy</p>
                    <img src="profile3.jpg" alt="dashbord" />
                    <a href="Visit Project">Visit Project</a>
                  </div>
                  <div id="project-4" className="project">
                    <p>OSPF,MD5 auth, redudancy</p>
                    <img src="profile3.jpg" alt="dashbord" />
                    <a href="Visit Project">Visit Project</a>
                  </div>
                </div>
              </div>
            </FadeInSection>
            {/* --- Contacts Section --- */}
            <FadeInSection>
              <div className="card" id="contacts">
                <TypewriterOnScroll text="Contacts" />

                <div id="contacts-content">
                  <div className="icon">
                    <img src="profile1.jpg" alt=" facebook" />
                    <p>
                      <a href="facebook.com">Facebook</a>
                    </p>
                  </div>
                  <div className="icon">
                    <img src="profile1.jpg" alt=" twitter" />
                    <p>
                      <a href="twiter.com">twitter</a>
                    </p>
                  </div>
                  <div className="icon">
                    <img src="profile1.jpg" alt=" linkedin" />
                    <p>
                      <a href="linkedin.com">linkedin</a>
                    </p>
                  </div>
                  <div className="icon">
                    <img src="profile1.jpg" alt=" instagram" />
                    <p>
                      <a href="instagram.com">instagram</a>
                    </p>
                  </div>
                  <div className="icon">
                    <img src="profile1.jpg" alt=" whatsapp" />
                    <p>
                      <a href="whatsapp.com">whatsapp</a>
                    </p>
                  </div>
                </div>
                <a href="Contacts.html" className="btn">
                  Send Message
                </a>
              </div>
            </FadeInSection>
          </section>
        </main>
      </FadeInSection>

      {/* --- Footer with Quick Links --- */}
      <FadeInSection>
        <footer>
          <div id="footer-content">
            <TypewriterOnScroll text="Quick links" />

            <a href="#intro">read resume</a>
            <a href="#contacts">Contact me</a>
            <a href="#skills">my skills</a>
          </div>
          <p>
            &gt; &gt; &gt; &copy; 2025 Enock. All right Reserved &gt; &gt; &gt;
          </p>
        </footer>
      </FadeInSection>
    </div>
  );
}
