import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  return (
    <>
      <ul className={styles.comments}>
        {comments &&
          comments.map((comment) => (
            <li key={comment.comment_id}>
              <b>{comment.comment_author}</b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
