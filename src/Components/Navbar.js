function Navbar() {
  return (
    <div className = "Navbar_Main">
      <header>
        <a href="#home" class="logo">
          ReUnion
        </a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#challages">Challages</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
