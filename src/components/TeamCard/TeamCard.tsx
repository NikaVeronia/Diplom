
import "./TeamCard.modules.css";

interface TeamCardProps {
  imgUrl:string;
  name: string;
  role: string;
}
const TeamCard: React.FC<TeamCardProps> = ({ imgUrl,name , role }) => {

  return (
    <div className="team-content">
      <div className="team-card">
        <img src={imgUrl} alt="" className="teamImg"/>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
// https://87c4e51ebc337641.mokky.dev/team