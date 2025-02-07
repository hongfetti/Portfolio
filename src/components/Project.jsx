import List from './List.jsx'

const projects = [
    {
      id: 1,
      projectName: "Saye's Shelter (Project 1)",
      projectImg: {},
      projectRepoLink: '',
      projectDeployedLink: '',
    },
    {
      id: 2,
      projectName: 'README Generator',
      projectImg: {},
      projectRepoLink: '',
      projectDeployedLink: '',
    },
    {
      id: 3,
      projectName: 'Vehicle Builder',
      projectImg: {},
      projectRepoLink: '',
      projectDeployedLink: '',
    },
    {
      id: 4,
      projectName: 'Weather Dashboard',
      projectImg: {},
      projectRepoLink: '',
      projectDeployedLink: '',
    },
    {
      id: 5,
      projectName: 'Employee Tracker',
      projectImg: {},
      projectRepoLink: '',
      projectDeployedLink: '',
    },
    {
      id: 6,
      projectName: 'Portfolio',
      projectImg: {},
      projectRepoLink: '',
      projectDeployedLink: '',
    },
  ];
export default function Project() {
    return (
        <div className="card">
            <List projects={projects}/>
        </div>
    );
}