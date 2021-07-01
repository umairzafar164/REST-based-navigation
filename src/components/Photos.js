import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getPhotos } from "../actions/getPhotos";

const Photos = (props) => {
  const [photoList, setPhotoList] = useState([]);
  useEffect(() => props.getPhotos());
  const getPhotos = () => {
    setPhotoList(props.photos);
  };
  return (
    <div>
      <button onClick={getPhotos} className="ui button red">
        Fetch Photos
      </button>

      <div>
        {photoList.map((m) => (
         <div><img src={m.url}></img></div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};
export default connect(mapStateToProps, { getPhotos })(Photos);
