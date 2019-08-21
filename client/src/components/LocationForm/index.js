import React from "react";

const LocationForm = ({ location, handleInputChange, handleFormSubmit }) => (
    <form>
        <div className="form-group">
            <label htmlFor="ArtistName">
                <strong>Location</strong>
            </label>
            <input 
                className="form-control"
                id="Location"
                type="text"
                value={location}
                placeholder="Search location"
                name="location"
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="pull-right">
            <button 
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-danger float-right">Search
            </button>
        </div>
    </form>
);

export default LocationForm;