import React from "react";
import "../utils/index.css"


function Project(props) {
    return (
<section>
{props.projects.map((project) => (
    <div key={project.id}>
             <a href={project.url}>
                <img src={project.image}/>
            </a>
                <p>
                {project.title} 
                <br/> 
                {project.description}
            </p>
    </div>
))}
</section>
)}

    export default Project;