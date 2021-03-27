import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { deauthenticate, reauthenticate } from '../redux/actions/auth-actions';

const Layout = ({ children, isAuthenticated }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(reauthenticate(isAuthenticated));
    }
  }, []);
  return (
    <>
      <div>
        <div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            {!isAuthenticated && (
              <li>
                <Link href="/login">
                  <a>Sign In</a>
                </Link>
              </li>
            )}

            {isAuthenticated && (
              <li onClick={() => dispatch(deauthenticate())}>
                <a>Sign Out</a>
              </li>
            )}
          </ul>
        </div>

        <div className="has-text-centered">{children}</div>
      </div>
    </>
  );
};

export default Layout;