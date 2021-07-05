import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getPhotos } from "../actions/getPhotos";
import Pagination from "./paginate";
const Photos = (props) => {
  const [photoList, setPhotoList] = useState([]);
  const [photosPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => props.getPhotos(), []);
  const getPhotos = () => {
    setPhotoList(props.photos);
  };
  const photoss = photoList.slice(0, 50);
  const iOfLastPhoto = currentPage * photosPerPage;
  const iOfFirstPhoto = iOfLastPhoto - photosPerPage;
  const currentPhotos = photoss.slice(iOfFirstPhoto, iOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <button onClick={getPhotos} className="ui button red">
        Fetch Photos
      </button>

      <div>
        {currentPhotos.map((m) => (
          <div className="ui card">
            <div className="image">
              <img src={m.url}></img>
            </div>
            <div class="content">
              <a class="header">Kristy</a>
              <div class="meta">
                <span class="date">Joined in 2013</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        photosPerPage={photosPerPage}
        totalPhotos={photoss.length}
        paginate={paginate}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};
export default connect(mapStateToProps, { getPhotos })(Photos);
