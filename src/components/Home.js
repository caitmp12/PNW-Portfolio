import React from "react"
import { LInk } from "react-router-dom"

const Home = (props) => {
    return (
        <>
        {/* Carousel */}
        <div className="carousel">
            <div className="image">
                <div className="carousel-title">
                    <h1>Pacific North West Photography</h1>
                </div>
                <div className="gallery-prompt">
                    <div className="gallery-text">
                        <h2>See More</h2>
                    </div>
                    <div className="gallery-image">
                        <h2>#</h2>
                    </div>
                </div>
            </div>
        </div>  

        {/* About */}
        <div className="about">
            <div className="about-image">
                <h3>picture of Brendan</h3>
            </div>
            <div className="about-text">
                <h1>About PNW</h1>
                <p>Brendan and Ashley are super wonderful and take amazing pictures and can you tell this is all a placeholder?</p>
            </div>
        </div>

        {/* Contact Me */}
        <div className="contact">
            <h1>Contact Me</h1>
        </div>

        </>
    )
}

export default Home;