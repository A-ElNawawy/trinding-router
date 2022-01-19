import { useEffect, useState, Suspense, lazy } from "react";
import { Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";

const repos = "https://gh-trending-api.herokuapp.com/repositories";
const devs = "https://gh-trending-api.herokuapp.com/developers";

const getData = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Sorry, We have an error");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    alert(error.message);
  }
};

const App = () => {
  const [Repos, setRepos] = useState([]);
  const [Devs, setDevs] = useState([]);

  const DevsPage = lazy(() => import("./pages/DevsPage/DevsPage"));
  const ReposPage = lazy(() => import("./pages/ReposPage/ReposPage"));

  useEffect(() => {
    getData(repos).then((repos) => setRepos(repos));
    getData(devs).then((devs) => setDevs(devs));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Layout>
        <Route path={process.env.PUBLIC_URL + "/developers"}>
          <Suspense fallback={<Loading />}>
            <DevsPage Devs={Devs} />
          </Suspense>
        </Route>

        <Route path={process.env.PUBLIC_URL + "/repos"}>
          <Suspense fallback={<Loading />}>
            <ReposPage Repos={Repos} />
          </Suspense>
        </Route>

        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Redirect to={process.env.PUBLIC_URL + "/repos"} />
        </Route>

        <Route exact path='/'>
          <Redirect to={process.env.PUBLIC_URL + "/repos"} />
        </Route>
      </Layout>
    </div>
  );
};

export default App;
