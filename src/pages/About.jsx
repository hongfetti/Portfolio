import profilePic from '../assets/images/me.jpg'

export default function About() {
    return (
      <div>
        <h1>About Me</h1>
        <div id='img-container'>
        <img id='profile-pic' src= {profilePic} alt='photo of me'/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias excepturi facilis consequatur quae ipsa sapiente nemo impedit ducimus quod, officia perferendis aspernatur odit magnam amet, itaque iure esse aperiam. Quo?</p>
      </div>
    );
  }