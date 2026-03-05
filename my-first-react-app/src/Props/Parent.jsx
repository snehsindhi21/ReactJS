import React from 'react';
import Child from './Child';

const Parent = () =>{
    let sayHello = ()=>{
        alert("Hello from Parent Component");
    }
    return(
        <div>
            <h1>Parent Component</h1>
            <hr />
                {/* Passing a props */}
                <child 
                  name={"John"}
                  age={21}
                  skills={["WebTech","ReactJs"]}
                  status={true}
                  jobHaiKya={null}
                  isMarried={undefined}
                  address={{city:"Delhi",country:"India"}}
                  sayHello={sayHello}
                  />
        </div>
    );
}