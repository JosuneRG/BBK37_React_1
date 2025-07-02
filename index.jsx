// 7 - Create a Stateless Functional Component
const MyComponent7 = function() {
    return(
      <div>Completed challenge!</div>
  );
}

// 8 - Create a React Component
class MyComponent8 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   
    return(
      <div>
        <h1>Hello React!</h1>
      </div>
    );

  }
};

// 9 - Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
          <ChildComponent/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

// 10 - Use React to Render Nested Components
const TypesOfFruit10 = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits10 = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit10/>
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood10 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
          <Fruits10/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

// 11 - Compose React Components
class Fruits11 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
          <NonCitrus11/>
          <Citrus11/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood11 extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
          <Fruits11/>
        { /* Change code above this line */ }
        <Vegetables11/>
      </div>
    );
  }
};

// 12 - Render a Class Component to the DOM
class TypesOfFood12 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='challenge-node'>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
          <Fruits12/>
          <Vegetables12/>
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood12/>, document.getElementById('challenge-node'));

// 13 - Write a React Component from Scratch
// Change code below this line
class MyComponent extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'));

// 14 - Pass Props to a Stateless Functional Component

// 15 - Pass an Array as Props
// 16 - Use Default Props
// 17 - Override Default Props
// 18 - Use PropTypes to Define the Props You Expect
// 19 - Access Props Using this.props
// 20 - Review Using Props with Stateless Functional Components
// 21- Create a Stateful Component
// 22 - Render State in the User Interface
// 23 - Render State in the User Interface Another Way
// 24 - Set State with this.setState
// 25 - Bind 'this' to a Class Method
// 26 - Use State to Toggle an Element
// 27 - Write a Simple Counter
// 28 - Create a Controlled Input
// 29 - Create a Controlled Form
// 30 - Pass State as Props to Child Components
// 31 - Pass a Callback as Props
// 32 - Use the Lifecycle Method componentWillMount
// 33 - Use the Lifecycle Method componentDidMount
