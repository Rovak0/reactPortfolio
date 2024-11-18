// This will make the individual projects that protfolio.jsx pulls in
//needs an name, image, a live link, and a github link
//feed it an object, and destructure it
export default function projectCard(project) {
    //all things will be strings
    // console.log("in card");
    // console.log(props.children);
    // console.log(props.children[0]);
    // console.log(props.children[1]);
    return(
        <>
            <div className="ms-2 me-auto">
                <h2 className="fw-bold mb-1">{project.children[0]}</h2>
                {/* <img src={image}> </img> */}
                {/* <a href={live}>Check out the live site!</a> */}
                <a href={project.children[1]}>Or find it on Github</a>
            </div>
        </>
    )
};