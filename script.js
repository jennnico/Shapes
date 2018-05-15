//resources: https://www.youtube.com/watch?v=v6Q5NryHN5s&t=671s
//https://www.youtube.com/watch?v=3HMtarQAt3A&t=1193s

let Panel = ReactBootstrap.Panel;
let Accordion = ReactBootstrap.Accordion;

class Shapes extends React.Component{

//set the state
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

//Add a shape by making a copy of shapes, adding new info, updating state
onClick = () => {
  let shapesCopy = this.state.shapes.slice();
  shapesCopy.push({shape: this.state.newCategory, attributes: []} );
  this.setState({ shapes: shapesCopy, newCategory: ""});
}

//DELETE a shape by making a copy, splicing, updating state
delete = index => {
  let shapesCopy = this.state.shapes.slice();
  shapesCopy.splice(index, 1);
  this.setState({ shapes: shapesCopy });
}

//add Attributes to the shapes. Not working yet
addAttribute(attribute, index){
  let shapesCopy = this.state.shapes.slice();
  shapesCopy[index] = {shape:shapesCopy[index].shape, attribute: attribute};
  this.setState({shapesCopy});
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
            </ul> 
            <input placeholder="Enter new attribute" value = {this.state.newAttribute} onChange={this.onAttributeChange}/>
            <button onClick = {() => this.addAttribute(newAttribute, index)}>Add Attribute</button>
            <br />
            <button onClick = {() => this.delete(index)}>DELETE shape</button>
          </Panel>
        ))}
      </Accordion>
      <input placeholder="Enter new shape" value = {this.state.newCategory} onChange={this.onInputChange}/>
      <br />
      <button onClick= {this.onClick}>Add Shape!</button>
    </div>
  );
}
}

ReactDOM.render(
  <div>
    <Shapes></Shapes>
  </div>, document.getElementById('root'))
