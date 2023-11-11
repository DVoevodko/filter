import React from 'react';

export const Toolbar = (props) => {
    return (
        <>
        <div className="text-center my-4">
        {props.filters.map((category, index)=>{
            return (
                <button className={(category===props.selected)?"btn btn-outline-primary mx-2 text-capitalize":""}
                        onClick={()=> props.onSelectFilter(category)}
                        key={index}>{category}
                </button>
            )
        })
        }   
        </div>
        </>
    )
}
