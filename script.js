//import React from 'react';
//import ReactDOM from 'react-dom';
//resources: https://www.youtube.com/watch?v=v6Q5NryHN5s&t=671s
//https://www.youtube.com/watch?v=3HMtarQAt3A&t=1193s

let Panel = ReactBootstrap.Panel;
let Accordion = ReactBootstrap.Accordion;


class Shapes extends React.Component{

constructor(){
 super();
  this.state = {
  shapes:[
    {shape: 'Triangle', attributes: ['3 sides', '3 angles']},
    {shape: 'Quadrilateral', attributes: ['4 sides', '4 angles']},
    {shape: 'Circle', attributes: ['0 sides', '0 angles']},
  ],
    newCategory: "",
    newAttribute: "",
};
  }

//show what you're typing in the "new category" input
onInputChange = e => {
  this.setState({ newCategory: e.target.value })
}

//show what you're typing in the "new attribute" input
onAttributeChange = v => {
  this.setState({ newAttribute: v.target.value })
}

//make a copy of shapes, add new info, update state
onClick = () => {
  let shapesCopy = this.state.shapes.slice();
  shapesCopy.push({shape: this.state.newCategory, attributes: []} );
  
  this.setState({ shapes: shapesCopy, newCategory: ""});
}

delete = index => {
  let shapesCopy = this.state.shapes.slice();
  shapesCopy.splice(this.index, 1);
  
  this.setState({ shapes: shapesCopy });
}

//add Attributes to the shapes. Not working yet
addAttribute = () => {
  let aCopy = this.state.shapes.attributes.slice();
  aCopy.push(this.state.newAttribute);
  
  this.setState({ shapes: shapes, newCategory: aCopy});
  console.log(shapes);
}

render (){
  const {shapes} = this.state;
  return(
    <div>
      <Accordion>
        {shapes.map((shape, index) =>(
          <Panel className = "category" header={shape.shape} eventKey = {index} key = {index}>
            <ul> 
             {shape.attributes.map((item)=>(
               <li key={item}>{item}</li>
             ))}
               <input placeholder="Enter new attribute" value = {this.state.newAttribute} onChange={this.onAttributeChange}/>
               <button onClick = {this.addAttribute}>Add Attribute</button>
               <br />
               <button onClick = {() => this.delete()}>DELETE shape</button>
            </ul> 
          </Panel>
        ))}
      </Accordion>
      <input placeholder="Enter new category" value = {this.state.newCategory} onChange={this.onInputChange}/>
      <br />
      <button onClick= {this.onClick}>Add Category!</button>
    </div>
  );
}
}

ReactDOM.render(
  <div>
    <Shapes></Shapes>
  </div>, document.getElementById('root'))
