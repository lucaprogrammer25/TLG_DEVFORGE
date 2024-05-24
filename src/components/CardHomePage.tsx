import { CardProps } from "../interfaces/type";
  
  const Card: React.FC<CardProps> = ({ imageUrl, title, paragraph, linkUrl,linkLabel, }) => {
    return (
      <div className="AnimatedCard">
        <img src={imageUrl} alt={title} />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <a href={linkUrl}>{linkLabel}</a>
        </div>
      </div>
    );
  };
  
  export default Card;