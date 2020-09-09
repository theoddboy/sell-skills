import React from "react";

const UpdateProfileButton = (props) => {
    return(
            <div>
            <button onClick={props.save}>Spara</button>
            </div>
    );
}

export default UpdateProfileButton;