import React from "react";

export function ProjectCards() {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <img src="../../../public/imgs/story-mashups-sc.png" alt="story mashups" />
                    <h1>Project 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
                <div className="card">
                    {/* <img /> */}
                    <h1>Project 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
                <div className="card">
                    {/* <img /> */}
                    <h1>Project 3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                </div>
            </div>
        </>
    )
}
