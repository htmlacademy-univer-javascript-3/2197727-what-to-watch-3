import { Link } from 'react-router-dom';
import { useAppDispatch } from '../index';
import { AppRoute } from '../const';
import { logoutAction } from '../components/api-action';

export default function SignOutButton() {
  const dispatch = useAppDispatch();
  return(
    <Link
      className="user-block__link"
      to={AppRoute.SignIn}
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
    >
      Sign out
    </Link>
  );
}
