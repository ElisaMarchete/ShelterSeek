import AccountMenu from "./AccountMenu";

function Header({ children }) {
  return (
    <header className="Header">
      <h1>ShelterSeek</h1>
      {children}
      <AccountMenu />
    </header>
  );
}

export default Header;
