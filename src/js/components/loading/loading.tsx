import * as React from "react";

const LoadingComp = () =>{
    const strings = "loading".split("");
    const loading = strings.map(s=><span key={s}>{s}</span>);
    return(
        <div className="loading unbisible" id="loadingPanel">
            <ul className="bars">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <div className="loading__text">
                    {loading}
                </div>
            </ul>
        </div>
    )
}

export default LoadingComp;