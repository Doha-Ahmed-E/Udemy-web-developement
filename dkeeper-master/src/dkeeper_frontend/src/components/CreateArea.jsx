import React from "react";
import PropTypes from "prop-types";

const CreateArea = ({ addClick }) => {
  const [text, setText] = React.useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setText((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function submitNote(event) {
    addClick(text);
    setText({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={text.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

CreateArea.propTypes = {
  addClick: PropTypes.func.isRequired,
};
export default CreateArea;
