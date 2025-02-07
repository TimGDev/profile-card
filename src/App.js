import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="tim.jpeg" alt="me" />;
}
function Intro() {
  return (
    <div>
      <h1>Timothy Gregory</h1>
      <p>
        A senior conslutant at Sogeti with over 10 years of Web/Software
        development. When not coding/studing for my carrer I love to play video
        games and make music
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML+CSS" emoji="💪" color="red" />
      <Skill name="React" emoji="👶" color="yellow" />
      <Skill name="C#" emoji="💪" color="orange" />
      <Skill name=".Net" emoji="💪" color="purple" />
      <Skill name="Javascript" emoji="💪" color="red" />
      <Skill name="Azure" emoji="👶" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
