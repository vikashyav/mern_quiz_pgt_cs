import { useNavigate, useLocation, useParams } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // React Router's navigation hook
  const location = useLocation(); // Get the current route
  const { subject_code, section_id  }=useParams();


  const isHomePage = location.pathname === "/"; // Check if it's the home page

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-50">
      <div className="flex items-center justify-between h-12 px-4">
        {/* Go Back Button */}
        {
          !isHomePage && 
          <button
          onClick={() => navigate(-1)}
          disabled={isHomePage}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Go Back
        </button>
        }

      { subject_code ?
        <h1 className="text-sm font-semibold">{subject_code}</h1> :
        <>
        <h1 className="text-md font-semibold">BPSC TRE COMPUTER SCIENCE PGT TEST SERIES </h1>
        made with ❤️❤️❤️ vikas kumar
        </>        
        }
      </div>
    </header>
  );
};

export default Header;
