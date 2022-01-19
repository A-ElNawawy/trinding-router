import { memo } from "react";
import { NavLink, Route } from "react-router-dom";

import Container from "./../Container/Container";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <div className={styles.layout}>
        <nav className={styles.nav}>
          <div className={styles.links}>
            <NavLink
              to={process.env.PUBLIC_URL + "/repos"}
              activeclassname='active'
              className={styles.repos}
            >
              Repositories
            </NavLink>

            <NavLink
              to={process.env.PUBLIC_URL + "/developers"}
              activeclassname='active'
              className={styles.devs}
            >
              Developers
            </NavLink>
          </div>

          <div className={styles.filters}>
            <Route path={process.env.PUBLIC_URL + "/repos"}>
              <label>
                Spoken Languages:
                <select name='spokenLangs'>
                  <option value='any'>Any</option>
                </select>
              </label>
            </Route>

            <label>
              Languages:
              <select name='langs'>
                <option value='any'>Any</option>
              </select>
            </label>

            <label>
              Date Range:
              <select name='dateRange'>
                <option value='today'>Today</option>
              </select>
            </label>
          </div>
        </nav>

        <main className={styles.main}>{children}</main>
      </div>
    </Container>
  );
};

export default memo(Layout);
