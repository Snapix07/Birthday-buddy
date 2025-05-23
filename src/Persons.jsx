import React from 'react'

const Persons = (person) => {
    const {id,name,age,image}=person;
    return (
      <article key={id} className="person">
        <img src={image} alt={name} className="img" />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    )
}

export default Persons