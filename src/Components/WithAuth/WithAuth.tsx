import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ReactNode } from 'react';

interface WithAuthProps {
    redirectPath: string;
    children: ReactNode;
}

function WithAuth ({redirectPath, children}: WithAuthProps) : JSX.Element {
    const navigate = useNavigate();
    const { isAuth } = useSelector((state: RootState) => state.authorisation);

    useEffect(() => {
        if(!isAuth) {
            navigate(redirectPath)
        }
    },[isAuth, redirectPath, navigate])

    return <>{children}</>;
}


export default WithAuth;