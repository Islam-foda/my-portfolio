import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p> Made with ❤️ by Islam Foda &copy; {year}</p>
    </footer>
  );
}
