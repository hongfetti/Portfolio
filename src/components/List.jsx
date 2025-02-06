export default function List(props) {
    return (
        <ul className='list-group'>
        {props.projects.map(item => (
            <li className='list-group-item' key={item.id}>{item.projectName}</li>
        ))}
        </ul>
    );
}