import profilePic from "../assets/images/me.jpg";

export default function About() {
  return (
    <div>
      <h1 className="about-me">About Me</h1>
      <div className="d-flex">
        <div className="col-2" id="img-container">
          <img id="profile-pic" src={profilePic} alt="photo of me" />
        </div>
        <p className="col-10 align-self-start">
          My name is Ryan Hong and I'm a recently certified full stack web developer with a background in higher education from Wilfrid Laurier University. With a strong foundation in both front-end and back-end technologies, I bring a balanced, solution-oriented approach to web development that prioritizes clean code, intuitive design, and functionality.<br /><br />

          I thrive on solving complex problems and enjoy building user-friendly applications that make a difference. My passion for development is matched by a lifelong interest in sports and gaming—two areas that have shaped how I think about teamwork, strategy, and immersive user experiences.<br /><br />

          Whether I'm coding a sleek user interface or architecting a scalable API, I'm always eager to learn, iterate, and create. I'm currently seeking opportunities to contribute to collaborative, innovative teams where I can continue to grow as a developer and make a meaningful impact.<br />
        </p>
      </div>
      <div>
        <article className="col-2">
          This should be a new section starting beneath the photo areaa 
        </article>
        </div>
    </div>
  );
}
