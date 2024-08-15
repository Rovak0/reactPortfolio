// This will make the individual projects that protfolio.jsx pulls in
//needs an name, image, a live link, and a github link
//feed it an object, and destructure it
export default function projectCard({project: {name, image, github, live}}) {
    //all things will be strings
    return(
        <>
            <div className="ms-2 me-auto">
                <h2 className="fw-bold mb-1">{name}</h2>
                <img src={image}> </img>
                <a href={live}>Check out the live site!</a>
                <a href={github}>Or find it on Github</a>
            </div>
        </>
    )
};