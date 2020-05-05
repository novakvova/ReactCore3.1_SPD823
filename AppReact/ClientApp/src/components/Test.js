import React, { Component } from 'react';
import AnimalItem from './AnimalItem';

class Test extends Component {
    state = { 
        animals: [
            {
                id: 1,
                name: "Носоріг",
                image: "https://ichef.bbci.co.uk/images/ic/720x405/p061q6g2.jpg",
                age: 5
            },
            {
                id: 2,
                name: "Носоріг2",
                image: "https://ichef.bbci.co.uk/images/ic/720x405/p061q6g2.jpg",
                age: 5
            },
            {
                id: 3,
                name: "Бегемот",
                image: "https://lh3.googleusercontent.com/proxy/qqniCG6y4Vk2sDHRPt9W1MwUjsGXE77aBBeP9jamjHFraX_lYsAM18iSYUJgpKcvJjwIvmXGtbnnkydj3XNy4RqRzrIr51d-YoFP0a7J3hZ04K9QWiecdZaplG7FXXrcixVrxVR6frVrJuUYgYr8UIoLJWVp_HA",
                age: 5
            }
        ]
     }
    render() { 
        const content=this.state.animals.map(
            (animal)=>{
                return (
                    <div className="col-md-4">
                    <AnimalItem animal={animal}/>
                    </div>
                );
            }
        );

        return ( <div>
            <div className="row">
                {content}
            </div>
        </div> );
    }
}
 
export default Test;