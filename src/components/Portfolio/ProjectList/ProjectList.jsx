import React from 'react';

export const ProjectList = (props) => {
    return (
        <>
        {props.projects.map((project) => (
            <img src={project.img} /*className="App-logo" alt="logo"*/ />
            ))
        }
        </>
    )
}