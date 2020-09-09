import React, { useState } from "react";
import ProfileRender from "./ProfileRender";
import UpdateProfileButton from "./Profile Components/UpdateProfileButton";
import ProfileEditRender from "./Profile Components/ProfileEditRender";
import Mock from "../../data/MockUser.json"

const HomeProfile = () => {
  let [edit, setEdit] = useState(false);
  let profilePicture = "http://dummyimage.com/124x214.jpg/dddddd/000000"
  let firstName
  let lastName
  let address
  let postTown
  let postNumber
  let phoneNumber
  let email

  let [profile, setProfile] = useState([
    {
      profilePicture,
      firstName,
      lastName,
      address,
      postTown,
      postNumber,
      phoneNumber,
      email,
    },
  ]);
  let updateProfile = (e) => {
    e.preventDefault();
    alert("Profil har uppdaterats");
    setProfile({
      firstName: e.target.elements.firstNameInput.value,
      lastName: e.target.elements.lastNameInput.value,
      address: e.target.elements.adressInput.value,
      postTown: e.target.elements.postTownInput.value,
      postNumber: e.target.elements.postNumberInput.value,
      phoneNumber: e.target.elements.telephoneNumberInput.value,
      email: e.target.elements.emailInput.value,
    });
  };
  const turnOnEdit = () => {
    const current = edit;
    setEdit(!current);
  };

  if (edit) {
    return (
      <div>
        <ProfileEditRender profile={profile} updateProfile={updateProfile}/>
        <UpdateProfileButton edit={turnOnEdit} />
      </div>
    );
  }
  return (
    <div>
      <ProfileRender profile={profile}/>
      <UpdateProfileButton edit={turnOnEdit} />
    </div>
  );
};
export default HomeProfile;
