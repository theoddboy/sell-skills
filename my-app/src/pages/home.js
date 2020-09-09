import React from "react";
import {NavLink} from "react-router-dom";

const Start = () => {
    return(
            <div id="startpage">
                <h1>hello user</h1>
                <NavLink to="/profile" activeClassName="is-active">this is a link to another page</NavLink>
            </div>
    );
}

export default Start;