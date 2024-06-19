interface skilListProps {
    src: string;
    skill: string;
}

function SkillList({ src, skill }:skilListProps ) {
    return (
      <span>
        <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>
      </span>
    );
  }
  
  export default SkillList;
  