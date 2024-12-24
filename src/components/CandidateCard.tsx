import type Candidate from "../interfaces/Candidate.interface";

type CandidateProps = {
  currentUser: Candidate;
  selection: (isSelected: boolean) => void;
};

function CandidateCard({ currentUser, selection }: CandidateProps) {
  return (
    <div>
      <h1>Candidate Card</h1>
      {currentUser?.login ? (
        <section className="card">
          <h2>Github Username: {currentUser.login} </h2>
          <img src={currentUser.avatar_url || ""} alt={currentUser.login} />
          <h3>Name: {currentUser.name}</h3>
          <h4>Location: {currentUser.location}</h4>
          <p>Email: {currentUser.email}</p>
          <p>Company: {currentUser.company}</p>
          <p>Bio: {currentUser.bio}</p>
          <a href={currentUser.html_url || ""}>Github Profile</a>
          <button onClick={() => selection(true)}>Save</button>
          <button onClick={() => selection(false)}>Remove</button>
        </section>
      ) : (
        <>
          <h3>No Candidate at this moment</h3>
        </>
      )}
    </div>
  );
}

export default CandidateCard;
