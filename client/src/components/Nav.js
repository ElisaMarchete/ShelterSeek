function Nav(props) {
  return (
    <nav className="Nav">
      {props.pages.map((page) => {
        return (
          <div
            className={`Nav-button ${
              props.currentPage.name === page.name ? "active" : ""
            }`}
            key={page.name}
            onClick={() => props.setCurrentPage(page)}
          >
            {page.name}
          </div>
        );
      })}
    </nav>
  );
}

export default Nav;
