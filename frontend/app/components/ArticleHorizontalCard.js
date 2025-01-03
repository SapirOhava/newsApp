import React from "react";

const ArticleHorizontalCard = ({ article }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            {/* change to shorter content later */}
            <p className="card-text">{article.content}</p>
            <p className="card-text">
              {/* <small className="text-body-secondary">{article.date}</small> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHorizontalCard;
