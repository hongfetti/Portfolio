import underDev from '../assets/images/under-development.jpg'

export default function Resume() {
    return (
      <main>
        <h1>Resume</h1>
         <img src= {underDev} alt='photo of me'/>

         <h2>Proficiencies</h2>
         <ul>Full Stack Web Development including:</ul>
         <li>HTML</li>
         <li>CSS</li>
         <li>JavaScript</li>
         <li>Typescript</li>
         <li>Node</li>
         <li>Express</li>
         <li>SQL</li>
         <li>React</li>
      </main>
    );
  }