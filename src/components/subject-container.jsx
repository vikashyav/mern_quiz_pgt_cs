import { useState } from "react";

const SubjectList = () => {
  const [expanded, setExpanded] = useState(null); // Track the expanded subject

  // Example data
  const subjects = [
    { name: "Mathematics", subsections: ["Algebra", "Geometry", "Calculus"] },
    { name: "Science", subsections: ["Physics", "Chemistry", "Biology"] },
    { name: "History", subsections: ["Ancient", "Medieval", "Modern"] },
  ];

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expand state
  };

  return (
    <div className="max-w-lg mx-auto mt-10 space-y-4">
      {subjects.map((subject, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-lg bg-white"
        >
          {/* Subject Header */}
          <h2 className="text-lg font-semibold">{subject.name}</h2>

          <div
            className="p-4 cursor-pointer flex justify-between items-center hover:bg-gray-100"
            onClick={() => toggleExpand(index)}
          >
            <h2 className="text-lg font-semibold">{subject.name}</h2>
            <span className={`transform transition-transform ${expanded === index ? "rotate-180" : ""}`}>
              ▼
            </span>
          </div>

          {/* Subsections */}
          {expanded === index && (
            <div className="p-4 bg-gray-50">
              <ul className="space-y-2">
                {subject.subsections.map((sub, subIndex) => (
                  <li key={subIndex} className="text-gray-700 pl-4 border-l-2 border-gray-300">
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SubjectList;
