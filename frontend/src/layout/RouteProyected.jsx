import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RouteProtected = () => {

    const { auth, loading } = useAuth();

    if(loading) return "Cargando"

  return (
    <>
    { auth._id ? <Outlet/> : <Navigate to="/" />}
    </>
  )
}

export default RouteProtected