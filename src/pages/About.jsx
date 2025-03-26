import profilePic from "../assets/images/me.jpg";

export default function About() {
  return (
    <div>
      <h1 className="about-me">About Me</h1>
      <div className="d-flex">
        <div className="row-4" id="img-container">
          <img id="profile-pic" src={profilePic} alt="photo of me" />
        </div>
        <p className="row-8">
          Thank you for visiting my Portfolio! lots of experiment text to test
          out things gotta keep typing things to seee the changes.
        </p>
        <article className="row-8">
          testing this now
        </article>
      </div>
    </div>
  );
}
