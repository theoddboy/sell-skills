import React from "react";
import SaveEditButton from "../Profile Components/SaveEditButton"


const ProfileEditRender = ({
  picture,
  firstName,
  lastName,
  telephoneNumber,
  email,
  address,
  postNumber,
  postTown,
  updateProfile
}) => {
  return (
    <div>
    <form onSubmit={updateProfile}>
      <div>
        <img
          id="profileRender"
          style={{ height: 150 }}
          src={picture}
          alt="Ingen profilbild tillagd"
        ></img>
        <h3>
          <input type="text" placeholder={firstName}></input>
          <input type="text" placeholder={lastName}></input>
        </h3>
        <br />
      </div>
      <div>
        <br />
        <h4>Kontaktuppgifter:</h4>
        <p>
          Telefon: <input type="text" placeholder={telephoneNumber}></input>
        </p>
        <br />
        <p>
          Mail:
          <input type="text" placeholder={email}>
            {email}
          </input>
        </p>
        <br />
        <p>
          Adress: <input type="text" placeholder={address}></input>
        </p>
        <br />
        <p>
          Postnummer: <input type="text" placeholder={postNumber}></input>
        </p>
        <br />
        <p>
          Postort: <input type="text" placeholder={postTown}></input>
        </p>
        <br />
      </div>
      <SaveEditButton/>
      </form>
    </div>
  );
};
export default ProfileEditRender;
