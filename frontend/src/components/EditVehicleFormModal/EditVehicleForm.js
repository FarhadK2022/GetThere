import React, { useState } from "react";
import * as vehicleActions from "../../store/vehicles";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function EditVehicleForm({ vehicle, setShowModal }) {
  const dispatch = useDispatch();
  const params = useParams();
  const { vehicleId } = params;
  const [address, setAddress] = useState(vehicle.address);
  const [city, setCity] = useState(vehicle.city);
  const [state, setState] = useState(vehicle.state);
  const [latitude, setLatitude] = useState(vehicle.latitude);
  const [longitude, setLongitude] = useState(vehicle.longitude);
  const [type, setType] = useState(vehicle.type);
  const [category, setCategory] = useState(vehicle.category);
  const [make, setMake] = useState(vehicle.make);
  const [model, setModel] = useState(vehicle.model);
  const [year, setYear] = useState(vehicle.year);
  const [trim, setTrim] = useState(vehicle.trim);
  const [doors, setDoors] = useState(vehicle.doors);
  const [drivetrain, setDrivetrain] = useState(vehicle.drivetrain);
  const [MPG, setMPG] = useState(vehicle.MPG);
  const [transmission, setTransmission] = useState(vehicle.transmission);
  const [numSeats, setNumSeats] = useState(vehicle.numSeats);
  const [petFriendly, setPetFriendly] = useState(vehicle.petFriendly);
  const [description, setDescription] = useState(vehicle.description);
  const [price, setPrice] = useState(vehicle.price);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const vehicle = {
      address,
      city,
      state,
      latitude,
      longitude,
      type,
      category,
      make,
      model,
      year,
      trim,
      doors,
      drivetrain,
      MPG,
      transmission,
      numSeats,
      petFriendly,
      description,
      price,
    };
    const edittedVehicle = await dispatch(vehicleActions.editVehicleThunk(vehicleId, vehicle));
    if (edittedVehicle) setShowModal(false);
  };

  return (
    <form className="formModal" onSubmit={handleSubmit}>
      <h1>Edit Vehicle</h1>
      <label>
        Address
        <input
          className="inputField"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        City
        <input
          className="inputField"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label>
        State
        <input
          className="inputField"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label>
        Type
        <input
          className="inputField"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </label>
      <label>
        Category
        <input
          className="inputField"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>
      <label>
        Make
        <input
          className="inputField"
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        />
      </label>
      <label>
        Model
        <input
          className="inputField"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </label>
      <label>
        Year
        <input
          className="inputField"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </label>
      <label>
        Trim
        <input
          className="inputField"
          type="text"
          value={trim}
          onChange={(e) => setTrim(e.target.value)}
          required
        />
      </label>
      <label>
        Number of Doors
        <input
          className="inputField"
          type="text"
          value={doors}
          onChange={(e) => setDoors(e.target.value)}
          required
        />
      </label>
      <label>
        Drivetrain
        <input
          className="inputField"
          type="text"
          value={drivetrain}
          onChange={(e) => setDrivetrain(e.target.value)}
          required
        />
      </label>
      <label>
        MPG
        <input
          className="inputField"
          type="text"
          value={MPG}
          onChange={(e) => setMPG(e.target.value)}
          required
        />
      </label>
      <label>
        Transmission
        <input
          className="inputField"
          type="text"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          required
        />
      </label>
      <label>
        Number of Seats
        <input
          className="inputField"
          type="text"
          value={numSeats}
          onChange={(e) => setNumSeats(e.target.value)}
          required
        />
      </label>
      <label>
        Pet Friendly?
        <input
          className="inputField"
          type="text"
          value={petFriendly}
          onChange={(e) => setPetFriendly(e.target.value)}
          required
        />
      </label>
      <label>
        Description
        <input
          className="inputField"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Price
        <input
          className="inputField"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <button className="button" type="submit">
        Edit This Vehicle
      </button>
    </form>
  );
}

export default EditVehicleForm;