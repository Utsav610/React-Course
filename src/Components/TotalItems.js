import React from 'react'
import FrequentlyItem from './FrequentlyItem';

const TotalItems=(props)=>{
    return(
        <ul>
        {props.data.map((item)=>{
           return (
            <FrequentlyItem
              key={item.id}
              title={item.title}
              info={item.info}
            />
          );
        })}
    </ul>
    );
}
export default TotalItems;