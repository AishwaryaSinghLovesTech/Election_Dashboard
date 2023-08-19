import DynamicCard from "./Card";
function Dashboard() {
  return (
    <div className="content">
        
    <div className="d-flex flex-row bd-highlight mb-3">
  <div className="col-4 p-3 bd-highlight"><DynamicCard name = "raceDivision"/></div>
  <div className="col-4 p-3  bd-highlight"><DynamicCard name = "genderDivison"/></div>
  <div className="col-4 p-3 bd-highlight"><DynamicCard name = "genderDivisonByState"/></div>
</div>
<div className="d-flex flex-row bd-highlight mb-3">
  <div className="col-4 p-3 bd-highlight"><DynamicCard name = "votesByRace"/></div>
  <div className="col-4 p-3 bd-highlight"><DynamicCard name = "votesByGender"/></div>
  <div className="col-4 p-3 bd-highlight"><DynamicCard name = "votesByState"/></div>
</div>
<div className="d-flex flex-row bd-highlight mb-3">
  <div className="col-4 p-3 bd-highlight"></div>
  <div className="col-4 p-3 bd-highlight"><DynamicCard name = "genderVotesByState"/></div>
  <div className="col-4 p-3 bd-highlight"></div>
</div>
</div>

  );
}

export default Dashboard;
