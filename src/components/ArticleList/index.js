import React from 'react';

const ArticleList = ({articles}) => {

  return(
      <ul className="ui list">
        {articles.map(({ webUrl, webTitle }) => (
          <li key={webUrl}>
            <a href={webUrl} target="_blank" rel="noopener noreferrer">
              {webTitle}
            </a>
          </li>
        ))}
      </ul>
  );
};

export default ArticleList;