import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjectCollection } from '../data'; // Import questions and answers array
import cx from '../utility/cx';
import SubjectList from '../components/subject-container';

function App() {
  const navigate= useNavigate();
  const [expanded, setExpanded] = useState(null); // Track the expanded subject
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expand state
  };

  const handleNavigate = (subject_code, section_id)=>()=>{
    navigate(`${subject_code}/${section_id}`);
  }


  return (
    // items-center justify-center max-w-md w-full
    <div className="bg-gray-100 min-h-[calc(100vh-3rem)] p-8 flex  justify-center flex-wrap gap-2">
      {subjectCollection.map((item, index) => {
        return (
          // eslint-disable-next-line react/jsx-key 
          <div key={index} className="max-w-sm max-h-min w-full p-4  rounded shadow-md">
            <h1 className="text-3xl font-bold text-center text-red"></h1>

            <div
              key={index}
              className="border rounded-lg shadow-md"
            >
              <div
                className="p-2 cursor-pointer flex justify-between items-center hover:bg-gray-100"
                onClick={() => toggleExpand(index)}
              >
                <h2 className="text-lg font-semibold">{item.subject}</h2>
                <span className={`transform transition-transform ${expanded === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </div>

              {/* Subsections */}
              {expanded === index && (
                <div className="p-4 bg-gray-50 cursor-pointer">
                  <ul className="space-y-2">
                    {item.subsections.map((sub, subIndex) => (
                      <li key={subIndex} 
                      className="text-gray-700 pl-4 border-l-2 border-gray-300  hover:text-blue-500"
                      onClick={handleNavigate(item.subject_code, sub)}
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* <SubjectList /> */}
    </div>
  );
}

export default App;
