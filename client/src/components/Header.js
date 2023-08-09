function Header({ children }) {
  return (
    <header className="Header">
      <h1>ShelterSeek</h1>
      {children}
      <div className="header-button">Signup / Login</div>
    </header>
  );
}

export default Header;
