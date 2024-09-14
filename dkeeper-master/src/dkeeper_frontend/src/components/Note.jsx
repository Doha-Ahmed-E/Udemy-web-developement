import React from "react";
import PropTypes from "prop-types";

const Note = ({ title, content, id, delClick }) => {
  function handleClick() {
    delClick(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
};
Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  delClick: PropTypes.func,
  id: PropTypes.any,
};

export default Note;
