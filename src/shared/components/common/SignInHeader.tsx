"use client";

import { RootState, useAppSelector } from "@config/redux-store";

export default function Header() {
  const { isLoggedIn, currentUser } = useAppSelector(
    (state: RootState) => state.auth,
  );

  if (isLoggedIn === undefined) {
    return <span></span>;
  }

  if (isLoggedIn) {
    return (
      <>
        {currentUser?.name}
        <a href="/login">Logout</a>
      </>
    );
  }

  return <a href="/login">Sign in</a>;
}
