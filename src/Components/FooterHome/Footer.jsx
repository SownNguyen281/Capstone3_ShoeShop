import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <table>
          <thead>
            <tr>
              <th>GET HELP</th>
              <th>SUPPORT</th>
              <th>REGISTER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NavLink to="">Home</NavLink>
              </td>
              <td>
                <NavLink to="">About</NavLink>
              </td>
              <td>
                <NavLink to="/register">Register</NavLink>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="">Nike</NavLink>
              </td>
              <td>
                <NavLink to="">Contact</NavLink>
              </td>
              <td>
                <NavLink to="/login">Login</NavLink>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="">Adidas</NavLink>
              </td>
              <td>
                <NavLink to="">Help</NavLink>
              </td>
              
            </tr>
            <tr>
              <td>
                <NavLink to="">Contact</NavLink>
              </td>
              <td>
                <NavLink to="">Phone</NavLink>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer-bot">
        <p>
          © 2022 Cybersoft All Rights Reserved | Design Theme by Nguyễn Quốc Hoàng Sơn.
        </p>
      </div>
    </div>
  );
}
