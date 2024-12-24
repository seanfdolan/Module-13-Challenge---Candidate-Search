import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";  //add searchGithub
import type Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: "",
    login: "",
    location: "",
    avatar_url: "",
    email: "",
    html_url: "",
    company: "",
    bio: "",
  });
  const [candidateList, setCandidateList] = useState<Candidate[]>([]);

  // useEffect(() => {
  //   searchGithubUser('seanfdolan').then((userData) => {
  //   setCurrentCandidate(userData);
  //   console.log(candidateList,currentCandidate);
  // });
  // },[]);

  // useEffect(() => {
  //   searchGithub().then((data) => {
  //     setCurrentCandidate(data[0]);
  //     console.log(candidateList, currentCandidate);
  //   });
  // }, []);

  useEffect(() => {
      searchGithub().then((data) => {
      setCandidateList(data);
      searchGithubUser(data[0].login).then((userData) => {
        // searchGithubUser('seanfdolan').then((userData) => {
        setCurrentCandidate(userData);
        console.log(candidateList,currentCandidate)
      });
    });
  },[]);

  const handleSelection = (isSelected: boolean) => {
    if (isSelected) {
       const savedCandidates: Candidate[] = JSON.parse(
        localStorage.getItem("SavedCandidates") || "[]"
      );
      savedCandidates.push(currentCandidate);
      localStorage.setItem("SavedCandidates", JSON.stringify(savedCandidates));
    } else {
      
     console.log("Candidate not selected")
    }
  };

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard
       currentUser={currentCandidate}
      selection={handleSelection} />
    </>
  );

};

export default CandidateSearch;
