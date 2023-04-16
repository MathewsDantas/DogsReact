import React from "react";
import { PHOTO_GET } from "../../api";
import styles from "./FeedModal.module.css";
import useFetch from "../../hooks/useFetch";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const { response, json } = request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if(event.target ===  event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
