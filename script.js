//resources: https://www.youtube.com/watch?v=v6Q5NryHN5s&t=671s
//https://www.youtube.com/watch?v=3HMtarQAt3A&t=1193s
let ButtonToolbar = ReactBootstrap.ButtonToolbar;
let Button = ReactBootstrap.Button;
let Panel = ReactBootstrap.Panel;
let Accordion = ReactBootstrap.Accordion;
let Modal = ReactBootstrap.Modal;
let FormGroup = ReactBootstrap.FormGroup;
let ControlLabel = ReactBootstrap.ControlLabel;
let FormControl = ReactBootstrap.FormControl;


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
    showAdd: false,
    newShape:{shape:"", attributes:[]},
};
  }
  
//close the modal
close = () => {
    if(this.state.showAdd){
      this.setState({showAdd: false})
    }
  }

//open the modal
open = (state) =>{
    this.setState({[state]: true});
  }

//DELETE a shape by making a copy, splicing, updating state
delete = index => {
  let shapesCopy = this.state.shapes.slice();
  shapesCopy.splice(index, 1);
  this.setState({ shapes: shapesCopy });
}

//update new Shape, so it can be added to the shapes array
updateNewShape(shape, attributes){
  this.setState({ newShape:{shape: shape, attributes: attributes} });
  //console.log(newShape);
} 

//New Shape has been updated. Add it to the shapes array and reset newshape
saveNewShape(newShape){
  let shapesCopy = this.state.shapes.slice();
  //shapesCopy.push({shape: this.state.newShape.shape, attributes: this.state.newShape.attributes});
  shapesCopy.push(this.state.newShape)
  this.setState({ shapes: shapesCopy});
  this.setState({newShape: {shape: '', attributes: []}});
  this.close();
}

render (){
  //console.log(this.state.newShape);
  const {shapes, newShape} = this.state;
  return(
    <div>
      {shapes.map((shape, index) =>(
        <Panel className = "category" header={shape.shape} eventKey = {index} key = {index}>
          <Panel.Heading>
            <Panel.Title toggle>{shape.shape}</Panel.Title>
          </Panel.Heading>
            <Panel.Collapse>
            <Panel.Body>
              <ul> 
              {shape.attributes.map((item)=>(
                <li key={item}>{item}</li>
              ))}
              </ul> 
              <button onClick = {() => this.delete(index)}>DELETE shape</button>
            </Panel.Body>
            </Panel.Collapse>
        </Panel>
      ))}
  
      <Modal show={this.state.showAdd} onHide={this.close}>
      <Modal.Header closeButton>
        <Modal.Title>Add Shape</Modal.Title>
        <Modal.Body>
          <form>
          <FormGroup controlID="formgroup">
            <ControlLabel>Shape Name</ControlLabel>
            <FormControl 
              type="text" 
              placeholder="Enter Shape Name"
              value = {newShape.shape}
              onChange = {(event) => this.updateNewShape(event.target.value, newShape.attributes)}
              ></FormControl>
             </FormGroup>
                
          <FormGroup controlID="formgroup2">
            <ControlLabel>Shape Name</ControlLabel>
            <FormControl 
              type="textarea" 
              placeholder="Enter Attributes (Separate by Commas)"
              onChange = {(event) => this.updateNewShape(newShape.shape, event.target.value.split(","))}
              value = {newShape.attributes}
              ></FormControl>
          </FormGroup>
          </form>
          
        </Modal.Body>
        <Modal.Footer>
          <button onClick= {(event) =>this.saveNewShape(newShape)}>Save New Shape</button>
        </Modal.Footer>
        </Modal.Header>
      </Modal>
      
      <button onClick = {(event) =>this.open("showAdd")}>Add a New Shape!</button>
    </div>
  );
}
}

ReactDOM.render(
  <div>
    <Shapes></Shapes>
  </div>, document.getElementById('root'))
