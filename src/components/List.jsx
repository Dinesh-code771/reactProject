import React from "react";

export default function List(props) {
let listItems = [];

  if(props.items){
     listItems = props.items.map((name, index) => {
      return <li key={index} onClick={()=>{console.log(name)}}>{name}</li>;
    });
  }
  

  return (
    <div>
      <h1>ListItems</h1>
      {listItems.length > 0 ? <ul>{listItems}</ul> : <h3>no data</h3>}
    </div>
  );
}
