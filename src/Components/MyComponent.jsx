import React, {useState} from "react";
const MyComponent = () => {
    const [state, setState]= useState();
    console.log(state);// this will we a variable - state variable object
    console.log(setState);// this should be a function (this function will be update the value of state variable)
    return <div></div>
};
export default MyComponent;