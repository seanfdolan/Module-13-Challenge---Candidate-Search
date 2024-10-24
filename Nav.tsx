import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const Nav = () => {
 
// const location = useLocation();

  const navLinks = [
    {
      name: 'CandidateSearch',
      url: '/candidate-search',
    },
    {
      name: 'SavedCandidates',
      url: '/saved-candidates',
    }
  ];

  // return (
  //   <nav>
  //     <ul>
  //       {navLinks.map((link) => (
  //         <li key={link.url}>
  //           <Link to={link.url} className={currentPage === link.url ? 'active' : ''}>
  //             {link.name}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </nav>
  // );
  // TODO: Add necessary code to display the navigation bar and link between the pages
  // const navLinks = [
  //   {
  //     name: 'CandidateSearch',
  //     url: '/candidate-search',
  //   },
  //   {
  //     name: 'SavedCandidates',
  //     url: '/saved-candidates',
  //   }
  // ];

  const currentPage = useLocation().pathname;


  return (
    <div>Nav</div>
  );
};

export default Nav;
