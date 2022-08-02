import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const Name = 'Sergey'
const Age = '28'

const FunctionalComponent = (props) => {
  return <div>
    props.Name = {Name}
    props.Age = {Age}
  </div>
}

const Parent = () => {

  return (
    <div className="test">
      <FunctionalComponent
        Age={Age} Name={Name} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);

