import React from "react";

const ProfileRender = ({
  picture,
  firstName,
  lastName,
  telephoneNumber,
  email,
  address,
  postNumber,
  postTown,
}) => {
  return (
      <div>
        <div>
          <img
            id="profileRender"
            style={{ height: 150 }}
            src={picture}
            alt="Ingen profilbild tillagd"
          ></img>
          <h3>
            {firstName} {lastName}
          </h3>
          <br />
        </div>
        <div>
          <br />
          <h4>Kontaktuppgifter:</h4>
          <p>Telefon: {telephoneNumber}</p>
          <br />
          <p>Mail: {email} </p>
          <br />
          <p>Adress: {address}</p>
          <br />
          <p>Postnummer: {postNumber}</p>
          <br />
          <p>Postort: {postTown}</p>
          <br />
        </div>
      </div>
    );
    }
export default ProfileRender;
