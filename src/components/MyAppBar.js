import { NavLink } from "react-router-dom";

export default function MyAppBar() {
  return (
    <>
      <div className="container">
        <div className="col">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            ALL
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            to="/FullStackDevelopment"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            FULL STACK DEVELOPMENT
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            to="/DataScience"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            DATA SCIENCE
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            to="/CyberSecurity"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            CYBER SECURITY
          </NavLink>
        </div>
        <div className="col">
          <NavLink
            to="/Career"
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            CAREER
          </NavLink>
        </div>
      </div>
    </>
  );
}
