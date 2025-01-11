// This will make the individual projects that protfolio.jsx pulls in
//needs an name, image, a live link, and a github link
//feed it an object, and destructure it



export default function projectCard(project) {
    //all things will be strings

    //create the return where if clauses work
    // project will always have a name

    return(
        <>
            <div className="projectCard">
                <h2 className="fw-bold mb-1">{project.children.name}</h2>
                {/* <img src={image}> </img> */}
                {project.children.image ? (
                    // <img src={project.children.image}> </img>
                    <img className="projectImg" src={project.children.image}></img>
                    
                  ) : (
                    <p className="mb-1">There currently is no imgae</p>
                )}
                <br></br>
                <a href={project.children.gitHub}>Find it on Github</a>
                {/* line break */}
                <br></br>
                {/* this is an if block to manage live site */}
                {project.children.live ? (
                    <a href={project.children.live}>Check out the live site!</a>
                  ) : (
                    <p className="mb-1">There currently is no live site</p>
                )}
                {project.children.notes ? (
                    <p> {project.children.notes} </p>
                  ) : (
                    // <p className="mb-1">There currently is no live site</p>
                    <p className="mb-1"></p>
                )}
            </div>
        </>
    )
};