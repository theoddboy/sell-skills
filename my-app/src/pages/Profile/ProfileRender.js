import React from "react";

const ProfileRender = (props) => {
  return (
    <div>
      <div>
        <img
          id="profileRender"
          style={{ height: 150 }}
          src={props.profile.profilePicture}
          alt="Ingen profilbild tillagd"
        ></img>
        <h3>
          {props.profile.firstName} {props.profile.lastName}
        </h3>
        <br />
      </div>
      <div>
        <br />
        <h4>Kontaktuppgifter:</h4>
        <p>Telefon: {props.profile.telephoneNumber}</p>
        <br />
        <p>Email: {props.profile.email} </p>
        <br />
        <p>Adress: {props.profile.address}</p>
        <br />
        <p>Postnummer: {props.profile.postNumber}</p>
        <br />
        <p>Postort: {props.profile.postTown}</p>
        <br />
      </div>
    </div>
  );
};
export default ProfileRender;
