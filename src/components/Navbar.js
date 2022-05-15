import React from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import pokeball from '../images/pokeball.png'
export default function () {
  return (
    <header>
      <div className="nav-area">
        <Link to="/">
          <img src={pokeball} alt="pokeball" className="icon"></img>
          The Pokémon Center
          </Link>
        <nav>
          <ul className="menus">
            {NavItems.map((item, index) => {
              return (
                // <li className="navItem" key={index}>
                //   <a href="#">{item.title}</a>
                // </li>
                <Link to={item.link} key={index}>{item.title}</Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
