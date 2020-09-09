import React from "react";
import SaveEditButton from "../Profile Components/SaveEditButton";

const ProfileEditRender = (props) => {
  return (
    <div>
      <form onSubmit={props.updateProfile}>
        <div>
          <img
            id="profileRender"
            style={{ height: 150 }}
            src={props.profile.picture}
            alt="Ingen profilbild tillagd"
          ></img>
          <h3>
            <input
              type="text"
              id="firstNameInput"
              placeholder={props.profile.firstName}
            ></input>
            <input
              type="text"
              id="lastNameInput"
              placeholder={props.profile.lastName}
            ></input>
          </h3>
          <br />
        </div>
        <div>
          <br />
          <h4>Kontaktuppgifter:</h4>
          <p>
            Telefon:{" "}
            <input
              type="text"
              id="telephoneNumberInput"
              placeholder={props.profile.telephoneNumber}
            ></input>
          </p>
          <br />
          <p>
            Email:
            <input
              type="text"
              id="emailInput"
              placeholder={props.profile.email}
            ></input>
          </p>
          <br />
          <p>
            Adress:{" "}
            <input
              type="text"
              id="adressInput"
              placeholder={props.profile.address}
            ></input>
          </p>
          <br />
          <p>
            Postnummer:{" "}
            <input
              type="text"
              id="postNumberInput"
              placeholder={props.profile.postNumber}
            ></input>
          </p>
          <br />
          <p>
            Postort:{" "}
            <input
              type="text"
              id="postTownInput"
              placeholder={props.profile.postTown}
            ></input>
          </p>
          <br />
        </div>
        <SaveEditButton type="submit"/> 
      </form>
    </div>
  );
};
export default ProfileEditRender;
