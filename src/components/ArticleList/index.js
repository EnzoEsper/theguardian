import React from 'react';

const ArticleList = ({articles}) => {

  return(
      <div className="ui list">
        {articles.map(({webUrl, webTitle, webPublicationDate}) => (
          <a className="item" key={webUrl}>
            <i className="right triangle icon"></i>
            <div className="content">
              <a className="header" href={webUrl} target="_blank" rel="noopener noreferrer">
                {webTitle}
              </a>
            </div>
            
          </a>
        ))}
      </div>
  );
};

export default ArticleList;