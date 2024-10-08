import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Nav from "./Nav.jsx";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  let [dark, setDark] = useState(false);

  function enableDark(){
    setDark(!dark);
  }
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      window.nav.classList.add("dark-nav");
    } else {
      document.body.classList.remove("dark");
      window.nav.classList.remove("dark-nav");
    }
  });
  return (
    <main>
      <Nav dark={dark} enableDark={enableDark} />

      <section className="section">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis
          unde sapiente non quod aliquam, cumque consectetur vitae inventore
          voluptatibus molestias dignissimos voluptas quam iusto ab corporis,
          eveniet at. Illum.
        </p>
      </section>
    </main>
  );
}

export default App;
