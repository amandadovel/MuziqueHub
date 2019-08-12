import React from "react";

// Function for searching for videos form

const VideoForm = ({ videos, handleInputChange, handleFormSubmit }) => (
    <form>
        <div className="form-group">
            <label htmlFor="Videos">
                <strong>Videos</strong>
            </label>
            <input 
                className="form-control"
                id="videos"
                type="text"
                value={videos}
                placeholder="Search videos here"
                name="videos"
                onChange={handleInputChange}
                required
            />
            <div className="pull-right">
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn-danger float-right">Search
                </button>
            </div>
        </div>
    </form>
)

export default VideoForm;