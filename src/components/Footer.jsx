import React from "react";

 function Footer() {
  return (
    <footer>
      <div>
        <ul className="horizontal-list text-center social-icons">
          <li><a href="https://www.linkedin.com/in/varsha-gp2622b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://github.com/Varsha12113" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://youtube.com/@dachu409/" target="_blank" rel="noreferrer"><i className="fas fa-code"></i></a></li>
          <li><a href="mailto:gpvarsha0930@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a></li>
        </ul>
      </div>
      <span>&copy;2024 Coded By <a href="https://www.linkedin.com/in/varsha-gp2622b/" target="_blank" rel="noreferrer">G.P Varsha</a> | All rights reserved.</span>
    </footer>
  );
}
export default Footer;