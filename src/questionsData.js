
const questionsData = [
  {
    question: "What is a computer system primarily comprised of?",
    options: ["CPU, memory, input/output devices, storage devices", "Monitor, keyboard, mouse, printer", "Operating system, applications, peripherals", "None of the above"],
    correctAnswer: "CPU, memory, input/output devices, storage devices"
  },
  {
    question: "What is the physical representation of a CPU?",
    options: ["Integrated circuits", "Memory chips", "Input devices", "Output devices"],
    correctAnswer: "Integrated circuits"
  },
  {
    question: "What are the two main components of a CPU?",
    options: ["ALU and CU", "RAM and ROM", "Hard drive and SSD", "Monitor and keyboard"],
    correctAnswer: "ALU and CU"
  },
  {
    question: "Which of the following is NOT an input device?",
    options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
    correctAnswer: "Monitor"
  },
  {
    question: "What does ALU stand for?",
    options: ["Arithmetic Logical Unit", "Advanced Logic Unit", "Arithmetic Logic Utility", "None of the above"],
    correctAnswer: "Arithmetic Logical Unit"
  },
  {
    question: "What is the primary function of the Control Unit (CU)?",
    options: ["Execute arithmetic operations", "Store data", "Control sequential instruction execution", "Manage input/output devices"],
    correctAnswer: "Control sequential instruction execution"
  },
  {
    question: "Which of the following devices converts input data into digital form?",
    options: ["Output device", "Input device", "Storage device", "None of the above"],
    correctAnswer: "Input device"
  },
  {
    question: "What is an example of a voice input method?",
    options: ["Keyboard", "Google voice search", "Mouse", "Printer"],
    correctAnswer: "Google voice search"
  },
  {
    question: "What is an example of a secondary storage device?",
    options: ["RAM", "Hard disk drive", "CPU", "ALU"],
    correctAnswer: "Hard disk drive"
  },
  {
    question: "Which term refers to the permanent storage of data, instructions, and results?",
    options: ["Primary memory", "Secondary memory", "Registers", "Cache memory"],
    correctAnswer: "Secondary memory"
  },
  {
    question: "Who introduced Moore's Law?",
    options: ["Gordon Moore", "Bill Gates", "Steve Jobs", "Alan Turing"],
    correctAnswer: "Gordon Moore"
  },
  {
    question: "According to Moore's Law, how often would the number of transistors on a chip double?",
    options: ["Every year", "Every two years", "Every five years", "Every decade"],
    correctAnswer: "Every two years"
  },
  {
    question: "What type of user interface contributed to the popularity of PCs in the 1980s?",
    options: ["Command line interface", "Graphical user interface", "Voice interface", "Touch interface"],
    correctAnswer: "Graphical user interface"
  },
  {
    question: "What is the full form of WWW?",
    options: ["World Wide Web", "Web Wide World", "Wide Web World", "None of the above"],
    correctAnswer: "World Wide Web"
  },
  {
    question: "Which of the following devices leverages processor miniaturization?",
    options: ["Desktops", "Laptops", "Smartphones", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What technology allows smart appliances to become part of the Internet of Things (IoT)?",
    options: ["Artificial Intelligence (AI)", "Virtual Reality (VR)", "Augmented Reality (AR)", "None of the above"],
    correctAnswer: "Artificial Intelligence (AI)"
  },
  {
    question: "What is the basic unit of memory in a computer system?",
    options: ["Byte", "Bit", "Nibble", "Word"],
    correctAnswer: "Byte"
  },
  {
    question: "How many bits are there in a byte?",
    options: ["4", "8", "16", "32"],
    correctAnswer: "8"
  },
  {
    question: "What is an example of a volatile memory?",
    options: ["RAM", "ROM", "Hard disk", "DVD"],
    correctAnswer: "RAM"
  },
  {
    question: "What type of memory is used for permanent storage?",
    options: ["Primary memory", "Secondary memory", "Cache memory", "Register memory"],
    correctAnswer: "Secondary memory"
  },
  {
    question: "Which unit of memory is the smallest?",
    options: ["Bit", "Nibble", "Byte", "Kilobyte"],
    correctAnswer: "Bit"
  },
  {
    question: "How many bytes are there in a kilobyte (KB)?",
    options: ["1000", "1024", "2048", "4096"],
    correctAnswer: "1024"
  },
  {
    question: "What type of memory is typically used to store the BIOS?",
    options: ["RAM", "ROM", "Hard drive", "SSD"],
    correctAnswer: "ROM"
  },
  {
    question: "What type of memory is cache memory?",
    options: ["Primary memory", "Secondary memory", "Volatile memory", "Non-volatile memory"],
    correctAnswer: "Volatile memory"
  },
  {
    question: "What is structured data?",
    options: ["Data organized in a predefined format", "Data with no specific format", "Data with internal tags", "None of the above"],
    correctAnswer: "Data organized in a predefined format"
  },
  {
    question: "Which of the following is an example of unstructured data?",
    options: ["HTML page", "Audio files", "CSV file", "SQL database"],
    correctAnswer: "Audio files"
  },
  {
    question: "What is an example of semi-structured data?",
    options: ["Text document", "HTML page", "Audio file", "Image file"],
    correctAnswer: "HTML page"
  },
  {
    question: "What does the term 'data' refer to?",
    options: ["Raw facts and figures", "Processed information", "Instructions for the CPU", "Output from the computer"],
    correctAnswer: "Raw facts and figures"
  },
  {
    question: "What does 'information' refer to?",
    options: ["Processed data", "Storage media", "Raw data", "Input device"],
    correctAnswer: "Processed data"
  },
  {
    question: "Which of the following is an example of structured data?",
    options: ["Database records", "Email messages", "Social media posts", "Video files"],
    correctAnswer: "Database records"
  },
  {
    question: "What is software?",
    options: ["A set of instructions to perform tasks", "Peripheral devices", "Network equipment", "Physical components of a computer"],
    correctAnswer: "A set of instructions to perform tasks"
  },
  {
    question: "Which type of software is an operating system?",
    options: ["System software", "Application software", "Utility software", "Development software"],
    correctAnswer: "System software"
  },
  {
    question: "What type of software is used to write and compile programs?",
    options: ["Programming tools", "System software", "Application software", "Utility software"],
    correctAnswer: "Programming tools"
  },
  {
    question: "What is an example of system software?",
    options: ["Windows OS", "Microsoft Word", "Adobe Photoshop", "Google Chrome"],
    correctAnswer: "Windows OS"
  },
  {
    question: "What is an example of application software?",
    options: ["Spreadsheet program", "Antivirus program", "Operating system", "Device driver"],
    correctAnswer: "Spreadsheet program"
  },
  {
    question: "Which software manages the hardware and software of a computer system?",
    options: ["System software", "Application software", "Utility software", "Network software"],
    correctAnswer: "System software"
  },
  {
    question: "What is the primary role of an operating system?",
    options: ["Manage hardware resources", "Run application programs", "Provide a user interface", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "Which of the following is NOT a function of an operating system?",
    options: ["File management", "Device management", "Word processing", "Memory management"],
    correctAnswer: "Word processing"
  },
  {
    question: "What type of operating system interface uses graphical elements?",
    options: ["Graphical user interface", "Command line interface", "Voice interface", "Text interface"],
    correctAnswer: "Graphical user interface"
  },
  {
    question: "What is an example of a device management task?",
    options: ["Creating files", "Formatting text", "Installing drivers", "Editing images"],
    correctAnswer: "Installing drivers"
  },
  {
    question: "Which operating system component manages the main memory of a computer system?",
    options: ["Memory management system", "File management system", "Device management system", "Security"],
    correctAnswer: "Memory management system"

}];

export default questionsData;