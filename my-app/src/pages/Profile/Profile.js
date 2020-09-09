import React, { useState } from "react";
import ProfileRender from "./ProfileRender";
import UpdateProfileButton from "./Profile Components/UpdateProfileButton";
import ProfileEditRender from "./Profile Components/ProfileEditRender";
import Mock from "../../data/MockUser.json"

const HomeProfile = (props) => {
  let [edit, setEdit] = useState(false);
  let profilePicture;
  let firstName;
  let lastName;
  let address;
  let postTown;
  let postNumber;
  let phoneNumber;
  let email;

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
  const showProfile = () => {
    return (
      <ProfileRender
        picture={profile.profilePicture}
        firstName={profile.firstName}
        lastName={profile.lastName}
        telephoneNumber={profile.phoneNumber}
        email={profile.email}
        address={profile.address}
        postNumber={profile.postNumber}
        postTown={profile.postTown}
      />
    );
  };
  const turnOnEdit = () => {
    const current = edit;
    setEdit(!current);
  };

  if (edit) {
    return (
      <div>
        <ProfileEditRender showProfile={showProfile} setProfile= {setProfile} />
        <UpdateProfileButton edit={turnOnEdit} />
      </div>
    );
  }
  return (
    <div>
      <ProfileRender showProfile={showProfile} />
      <UpdateProfileButton edit={turnOnEdit} />
    </div>
  );
};
export default HomeProfile;
