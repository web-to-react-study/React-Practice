function RepoCard({ image_url,title, description, eps }) {
    return (
        <div>
            <img src={image_url}></img>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{eps}화</p>
      </div>
    );
  }

  export default RepoCard;