import React from "react";

const Jumbotron = () => {
    return(
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">Welcome to my site!</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, deserunt atque consectetur molestiae aliquam quam vel veniam, est reprehenderit vero obcaecati ad magni rem repudiandae! Exercitationem nihil consectetur asperiores! Exercitationem.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    );
};

export default Jumbotron;