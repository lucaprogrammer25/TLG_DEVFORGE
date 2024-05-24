import { CardProps } from "../interfaces/type";
  
  const Card: React.FC<CardProps> = ({ video, title, paragraph, linkUrl,linkLabel, }) => {
    return (
      <div className="AnimatedCard">
         <video src={video} autoPlay muted loop playsInline  disablePictureInPicture controls={false} className="animatedCardVideo"/> 
        <div className="card-content">
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <a className="cardContentA"href={linkUrl}>{linkLabel}</a>
        </div>
      </div>
    );
  };
  
  export default Card;