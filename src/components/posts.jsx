import React from "react";

const Posts = props => {
  const { annee, mois } = props.match.params;
  return (
    <div>
      <h1>Posts</h1>
      Year: {annee}, Month:{mois}
    </div>
  );
};

export default Posts;
