import React, { Component } from 'react';
class AnimalItem extends Component {
    state = {  }
    render() {
        const {animal}=this.props; 
        return ( 
            <div key={animal.id} className="card" style={{width:"18em"}}>
                <img src={animal.image} className="card-img-top" alt="image"/>
                <div className="card-body">
                  <h5 className="card-title">{animal.name}</h5>
        <p className="card-text">Age : {animal.age}</p>
                </div>
              </div>
         );
    }
}
 
export default AnimalItem;