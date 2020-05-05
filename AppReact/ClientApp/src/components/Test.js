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
                image: "https://a.radikal.ru/a18/1909/0d/789214076ffd.jpg",
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