import React from "react";

import RepoItem from "./../../components/RepoItem/RepoItem";

const Repos = ({ Repos }) => {
  const ReposList = Repos?.map((repo, index, Repos) => (
    <div key={repo.username + repo.repositoryName}>
      <RepoItem repo={repo} />
      {index !== Repos.length - 1 ? <hr /> : null}
    </div>
  ));

  return <ul>{ReposList}</ul>;
};

export default Repos;
