import { useSnackbars, SnackbarTypes } from "../../utils/contexts";
import ErrorSnackbar from "./ErrorSnackbar";
import SuccessSnackbar from "./SuccessSnackbar";

export default function DialogsContainer() {
  const { openSnackbar } = useSnackbars();

  return (
    <>
      {openSnackbar === SnackbarTypes.ERROR_SNACKBAR && <ErrorSnackbar />}
      {openSnackbar === SnackbarTypes.SUCCESS_SNACKBAR && <SuccessSnackbar />}
    </>
  );
}
