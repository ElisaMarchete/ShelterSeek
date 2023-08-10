import AccountMenu from "./AccountMenu/";

// check if the user is logged in
// TODO: replace this with a real function

// Get this from the global context.
function isLoggedIn() {
  return false;
}

function Header({ children }) {
  return (
    <header className="Header">
      <h1>ShelterSeek</h1>
      {children}
      <AccountMenu isLoggedIn={isLoggedIn()} />
    </header>
  );
}

export default Header;
