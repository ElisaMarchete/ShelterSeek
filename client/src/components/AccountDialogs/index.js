import { useDialogs, DialogTypes } from "../../utils/contexts/DialogsContext";
import LoginDialog from "./LoginDialog";
import UserSignupDialog from "./UserSignupDialog";
import ShelterSignupDialog from "./ShelterSignupDialog";
import CompleteYourProfileDialog from "./CompleteYourProfile";

export default function DialogsContainer() {
  const { openDialog } = useDialogs();

  return (
    <>
      {openDialog === DialogTypes.LOGIN && <LoginDialog />}
      {openDialog === DialogTypes.USER_SIGNUP && <UserSignupDialog />}
      {openDialog === DialogTypes.SHELTER_SIGNUP && <ShelterSignupDialog />}
      {openDialog === DialogTypes.COMPLETE_YOUR_PROFILE && (
        <CompleteYourProfileDialog />
      )}
    </>
  );
}
