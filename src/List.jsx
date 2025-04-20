import React from 'react'
import Persons from './Persons'

const List = ({people}) => {
  return (
    <div>
        {people.map((info)=>{
            return <Persons {...info} key={info.id} />;
        })}
    </div>
  )
}

export default List