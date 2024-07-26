import { useDispatch, useSelector } from 'react-redux';

import { selectSnackbarMessage } from 'store/selectors';
import { setSnackbarMessage } from 'store/uiSlice';

import { Icon12Cancel } from '@vkontakte/icons';
import { Snackbar } from '@vkontakte/vkui';

export const InfoSnackbar = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSnackbarMessage(undefined));
  };

  const message = useSelector(selectSnackbarMessage);

  if (!message) {
    return null;
  }

  return (
    <Snackbar duration={3000} onClose={handleClose} after={<Icon12Cancel onClick={handleClose} />}>
      {message}
    </Snackbar>
  );
};
