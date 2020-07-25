import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchImagesRequest } from "../store/actions/images";

class Home extends Component {
  componentDidMount() {
    this.props.searchImagesRequest('apple')
  }


  render() {
    const { images } = this.props;
    console.log(images);
    return (
      <div className="home">
        <input type="text" />
        <div className="imagesList">
          {images.map((i) => (
            <img className="imageItem" key={i.id} src={i.urls.thumb} alt={i.alt_description} />
          ))}
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    );
  }
}

const mapSateToProps = (state) => ({
  images: state.images.images
})
const mapDispatchToProps = {
  searchImagesRequest
}

const Container = connect(
  mapSateToProps,
  mapDispatchToProps
)(Home)

export default Container;
