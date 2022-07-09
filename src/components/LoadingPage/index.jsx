import React from "react";
import { PropagateLoader } from "react-spinners";

export default function LoadingPage() {
    return (
        <div className="loading">
        <PropagateLoader
            color={"#ffffff"}
            speedMultiplier={0.5}/>
        </div>
    );
}

