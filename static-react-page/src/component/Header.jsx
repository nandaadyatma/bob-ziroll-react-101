function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <img className="nav-logo" src="/src/react-logo.png" width={"40px"} alt="React Logo" />
      <nav >
        <ul className="nav=list"  style={{  display: "flex", flexDirection: "row", gap: "20px", listStyleType: "none" }}>
          <li className="text-justify">Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;