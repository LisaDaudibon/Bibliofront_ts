import { useSetAtom } from 'jotai';
import { userTokenAtom } from '../../atoms/userTokenAtom';
import { userIdAtom } from '../../atoms/userIdAtom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useNavigate} from 'react-router-dom';

function Logout() {
  const setUserToken = useSetAtom(userTokenAtom);
  const setUserId = useSetAtom(userIdAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserToken(null);
    setUserId(null);
    navigate('/home')
  };

  return (
    <div>
      <button onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOut} className="icon" title="Logout" />
      </button>
    </div>
  );
}

export default Logout;