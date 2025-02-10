import List from './List.jsx'
import shelter from '../assets/images/sayes-shelter.png'
import README from '../assets/images/README.jpg'
import vehicleBuilder from '../assets/images/vehicle-builder.jpg'
import empTracker from '../assets/images/employee-tracker.jpg'
import weather from '../assets/images/weather.jpg'
import portfolio from '../assets/images/portfolio.jpg'

const projects = [
  {
    id: 1,
    projectName: "Saye's Shelter (Project 1)",
    projectImg: shelter,
    projectRepoLink: 'https://github.com/je210506/Project-1-Group-6',
    projectDeployedLink: '',
  },
  {
    id: 2,
    projectName: 'README Generator',
    projectImg: README,
    projectRepoLink: 'https://github.com/hongfetti/README-generator',
    projectDeployedLink: 'https://youtu.be/0Bcxe6drRiY',
  },
  {
    id: 3,
    projectName: 'Vehicle Builder',
    projectImg: vehicleBuilder,
    projectRepoLink: 'https://github.com/hongfetti/Vehicle-Builder',
    projectDeployedLink: 'https://youtu.be/qD4sCNJhR2k',
  },
  {
    id: 4,
    projectName: 'Weather Dashboard',
    projectImg: weather,
    projectRepoLink: 'https://github.com/hongfetti/weather-dashboard',
    projectDeployedLink: 'https://weather-dashboard-fvb6.onrender.com',
  },
  {
    id: 5,
    projectName: 'Employee Tracker',
    projectImg: empTracker,
    projectRepoLink: 'https://github.com/hongfetti/employee-tracker',
    projectDeployedLink: 'https://youtu.be/OuKMgkM4JYg',
  },
  {
    id: 6,
    projectName: 'Portfolio',
    projectImg: portfolio,
    projectRepoLink: 'https://github.com/hongfetti/Portfolio',
    projectDeployedLink: 'https://portfolio-a2lw.onrender.com/',
  },
];

export default function Project() {
  return (
    <div className="container">
      <div className="row">
        <List projects={projects} />
      </div>
    </div>
  );
}