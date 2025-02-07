export default function List(props) {
    return (
        <>
        {props.projects.map(item => (
            <div className='col-md-4 mb-4' key={item.id}>
                <div className='card shadow-sm'>
                    <img src={item.projectImg} className='card-img-top' alt={item.projectName} />
                    <div className='card-body'>
                        <h5 className='card-title'>{item.projectName}</h5>
                        <div className='d-flex justify-content-between'>
                            <a href={item.projectRepoLink} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
                            Github Repo
                            </a>
                            {item.projectDeployedLink && (
                            <a href={item.projectDeployedLink} className='btn btn success' target='_blank' rel='noopener noreferrer'>
                                Live Demo
                            </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}