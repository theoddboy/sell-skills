import React from "react";

const UpdateProfileButton = (props) => {
    return(
            <div>
            <button onClick={props.edit}>Edit</button>
            </div>
    );
}

export default UpdateProfileButton;