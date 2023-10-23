import React from "react";
import './Card.css';


function Card()
{
    return(
        <div>

                <div className="multiple_use">
                        <div className="card">
                            <div className="card-inner">
                                <div className="front">
                                    <div className="cardnumbers">
                                        <p>8041</p>
                                        <p>1235</p>
                                        <p>3546</p>
                                        <p>2345</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className="single_use">
                    <div className="card">
                        <div className="card-inner2">
                            <div className="front2">
                                <div className="cardnumbers">
                                    <p>8041</p>
                                    <p>1235</p>
                                    <p>3546</p>
                                    <p>2345</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );

}

export default Card;