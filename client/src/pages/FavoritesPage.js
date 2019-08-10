import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import VideoDetail from "../components/VideoDetail";

class Favorites extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    // handleSubmit = async (termFromSearchBar) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: termFromSearchBar
    //         }
    //     })
    //     this.setState({
    //         videos: response.data.items
    //     })
    // };
    // handleVideoSelect = (video) => {
    //     this.setState({selectedVideo: video})
    // }

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Favorites</h1>
                </Jumbotron>
                <div className='ui container' style={{marginTop: '1em'}}>
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                    <div className='ui grid'>
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className="five wide column">
                                {/* <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Favorites;