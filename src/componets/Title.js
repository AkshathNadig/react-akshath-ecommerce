import React from 'react'

 function Title ({name,title}) {
    return (
        <div className="col">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold  text-center">
                     {name} <span> </span>
                        <strong className="text-blue">
                            {title}
                        </strong>
                </h1>
            </div>            
        </div>
    )
}

export default Title