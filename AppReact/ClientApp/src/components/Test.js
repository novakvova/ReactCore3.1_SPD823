import React, { Component } from 'react';

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
            }
        ]
     }
    render() { 
        const content=this.state.animals.map(
            (animal)=>{
                return <h1 key={animal.id}>{animal.name}</h1>            
            }
        );

        return ( <div>
            {content}
        </div> );
    }
}
 
export default Test;