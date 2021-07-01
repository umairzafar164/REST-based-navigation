import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getAlbums } from "../actions/getAlbums";

const Albums = (props) => {
  const [albumList, setAlbumList] = useState([]);
  useEffect(() => props.getAlbums());
  const getAlbums = () => {
    setAlbumList(props.albums);
    console.log(albumList);
  };
  return (
    <div>
      <button onClick={getAlbums} className="ui button red">
        Fetch Albums
      </button>

      <div>
        {albumList.map((m) => (
          <li>{m.title}</li>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};
export default connect(mapStateToProps, { getAlbums })(Albums);
