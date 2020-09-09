import React from "react";

const UpdateProfileButton = (props) => {
    return(
            <div>
            <button onClick={props.save}>Save</button>
            </div>
    );
}

export default UpdateProfileButton;