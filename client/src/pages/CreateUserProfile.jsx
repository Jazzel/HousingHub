import AddEducation from "./profileForms/AddEducation";
import AddExperience from "./profileForms/AddExperience";
import AddHobby from "./profileForms/AddHobby";
import CreateProfile from "./profileForms/CreateProfile";

const CreateUserProfile = () => {
  return (
    <div>
      <CreateProfile />
      <AddEducation />
      <AddExperience />
      <AddHobby />
    </div>
  );
};

export default CreateUserProfile;
