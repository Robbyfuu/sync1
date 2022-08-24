import logo from './logo.svg';
import './App.css';
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let node = [{
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: {
      fill: '#6BA5D7',
      strokeColor: 'white'
  },
}];

function App() {
  
  return (
    <div className="App">
      <DiagramComponent id="container" width={'100%'} height={'600px'} 
// Add node
      nodes={node}/>
    </div>
  );
}

export default App;
