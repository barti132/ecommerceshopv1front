import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check this popular products!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem src="/images/img1.jpg" text="Consectetur bibendum, ipsum arcu tempus ipsum, nec rhoncus" label='Electronics' path='/services'/>
                        <CardItem src="/images/img2.png" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." label='Book' path='/services'/>
                        <CardItem src="/images/img1.jpg" text="Mauris ac ante dictum ultricies nec et massa. Phasellus sit amet suscipit dui" label='Pets' path='/services'/>
                        <CardItem src="/images/img2.png" text="Erat convallis gravida. Aenean ornare lacus id elementum laoreet" label='Health' path='/services'/>
                        <CardItem src="/images/img1.jpg" text="Consectetur bibendum, ipsum arcu tempus ipsum, nec rhoncus" label='Electronics' path='/services'/>
                        <CardItem src="/images/img2.png" text="Consectetur bibendum, ipsum arcu tempus ipsum, nec rhoncus" label='Book' path='/services'/>
                        <CardItem src="/images/img1.jpg" text="Erat convallis gravida. Aenean ornare lacus id elementum laoreet" label='Book' path='/services'/>
                        <CardItem src="/images/img2.png" text="Consectetur bibendum, ipsum arcu tempus ipsum, nec rhoncus" label='Book' path='/services'/>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;