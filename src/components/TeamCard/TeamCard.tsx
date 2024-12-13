
import "./TeamCard.modules.css";

interface TeamCardProps {
  imgUrl:string;
  name: string;
  role: string;
}
const TeamCard: React.FC<TeamCardProps> = ({ imgUrl,name , role }) => {

  return (
      <div className="team-card">
        <img src={imgUrl} alt="" className="teamImg"/>
        <h2 className="team-card-h2">{name}</h2>
        <p className="team-card-p">{role}</p>
      </div>
  );
};

export default TeamCard;
// https://87c4e51ebc337641.mokky.dev/team