import React, { useState } from 'react'

const SelectDropdown = () => {
    let [car, setCar] = useState("");
    let [selectedCar, setSelectedCar] = useState("");

    let handleInputChange = (e) => {
        setCar(e.target.value);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        setSelectedCar(car);
        setCar("");
    };
        
  return (
    <div>
        <h1>Form Handling - Select Dropdown</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="cars">Select Car:</label>
            <select name="cars" id="cars" onChange={handleInputChange}>
                <option value="">--Select a Car--</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <br />
            <button type="submit">Submit</button>
            {selectedCar && <h1>Your Selected Car is: {selectedCar}</h1>}
        </form>
    </div>
  )
}

export default SelectDropdown;