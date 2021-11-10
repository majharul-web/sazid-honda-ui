import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/FqtpDs6/b1.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Switzerland</h2>
                        <p>Switzerland lies in the heart of the Alps, its massive mountains dominating the southern region of the country; the rolling hills and expansive lakes of the Swiss Plateau are home to the country's most populous cities. Further north, the lesser-known Jura Mountains line the border between Switzerland and France.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/nCvsGbK/b2.webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Indonesia</h2>
                        <p >More than 17,000 islands make up a star-studded landscape home to volcanoes, jungles, lakes, grasslands, mangroves, exquisite coral gardens and even snow-capped mountains. With such a spellbinding variety of flora and fauna, Indonesia is an Eden of natural wonders just waiting to be explored.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/w0KwsyT/b3.webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Australia</h2>
                        <p>Australia is full of mind-blowing landscapes and natural wonders that are perfect for outdoor adventures. The most famous, of course, is the Great Barrier Reef—but there are also dramatic mountain ranges, bubblegum pink lakes, and tropical islands filled with unique wildlife.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/mXmrxc5/b4.webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Bangladesh</h2>
                        <p>Bangladesh has a land of enormous beauty, hundreds of serpentine rivers, crystal clear water lakes surrounded by ever green hills, luxuriant tropical rain forests, beautiful cascades of green tea gardens, world's largest mangrove forest preserved as World Heritage, home of the Royal Bengal Tiger and the wild lives.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;