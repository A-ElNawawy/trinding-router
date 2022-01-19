import React from "react";

import Actions from "./../Actions/Actions";
import Button from "./../Button/Button";

import styles from "./DevItem.module.css";

const DevItem = ({ dev }) => {
  return (
    <li className={styles.dev_item}>
      <div className={styles.index}>{dev.rank}</div>

      <div className={styles.user}>
        <img src={dev.avatar} alt={dev.name} />
        <div>
          <a href={dev.url} target='_blank' rel='noreferrer'>
            {dev.name}
          </a>
          <p>{dev.username}</p>
        </div>
      </div>

      <div className={styles.popular}>
        <button>
          <i className={`${styles.fire} ${"fas fa-fire"}`}></i>&nbsp;
          <p>Popular Repo</p>
        </button>

        <button>
          <i className='fas fa-laptop'></i>&nbsp;
          {dev.popularRepository.repositoryName ? (
            <a
              href={dev.popularRepository.url}
              target='_blank'
              rel='noreferrer'
            >
              {dev.popularRepository.repositoryName}
            </a>
          ) : (
            <p>Not Found</p>
          )}
        </button>

        {dev.popularRepository.description ? (
          <button>
            <p>{dev.popularRepository.description}</p>
          </button>
        ) : null}
      </div>

      <Actions>
        <Button>
          <i className='heart far fa-heart'></i>&nbsp;
          <p>Sponsor</p>
        </Button>

        <Button>
          <p>Follow</p>
        </Button>
      </Actions>
    </li>
  );
};

export default DevItem;
