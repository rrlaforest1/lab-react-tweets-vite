function ProfileImage(props) {
  const image = props.image;
  //   console.log("image props", props);
  return <img src={image} className="profile" alt="profile" />;
}

export default ProfileImage;
