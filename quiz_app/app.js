// Screen elements
const homeScreen = document.getElementById("home-screen");
const userDetailsScreen = document.getElementById("user-details-screen");
const quizScreen = document.getElementById("quiz-screen");
const scoreScreen = document.getElementById("score-screen");

// Buttons and inputs
const categorySlider = document.getElementById("category-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const startQuizBtn = document.getElementById("start-quiz-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");
const nextQuestionBtn = document.getElementById("next-btn");
const reattemptBtn = document.getElementById("reattempt-btn");
const goHomeBtn = document.getElementById("go-home-btn");

// Display elements
const usernameInput = document.getElementById("username");
const usernumberInput = document.getElementById("usernumber");
const userInfoDisplay = document.getElementById("user-info");
const attemptInfoDisplay = document.getElementById("attempt-info");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const finalScoreDisplay = document.getElementById("final-score");
const correctAnswersDisplay = document.getElementById("correct-answers");
const incorrectAnswersDisplay = document.getElementById("incorrect-answers");
const totalQuestionsDisplay = document.getElementById("total-questions");
const totalQuestionsDisplay2 = document.getElementById("total-questions-2");

// Quiz state variables
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let attemptCount = 0;
let selectedCategory = null;

// Corrected Quiz data (with 10 categories)
const quizData = {
    gk: {
        title: "GK & GS",
        image:"images/gk.jpg",
        questions: [
            {
                question: "Who is the Father of the Indian Constitution?",
                answers: [
                    { text: "Jawaharlal Nehru", correct: false },
                    { text: "B. R. Ambedkar", correct: true },
                    { text: "Sardar Patel", correct: false },
                    { text: "Mahatma Gandhi", correct: false },
                ]
            },
            {
                question: "Which Indian state has the longest coastline?",
                answers: [
                    { text: "Maharashtra", correct: false },
                    { text: "Tamil Nadu", correct: false },
                    { text: "Gujarat", correct: true },
                    { text: "Andhra Pradesh", correct: false },
                ]
            },
            {
                question: "Which of these is the largest river in India by volume?",
                answers: [
                    { text: "Yamuna", correct: false },
                    { text: "Ganga", correct: false },
                    { text: "Godavari", correct: false },
                    { text: "Brahmaputra", correct: true },
                ]
            },
            {
                question: "The 'Quit India' movement was launched in which year?",
                answers: [
                    { text: "1940", correct: false },
                    { text: "1942", correct: true },
                    { text: "1945", correct: false },
                    { text: "1947", correct: false },
                ]
            },
            {
                question: "What is the primary function of the Indian Space Research Organisation (ISRO)?",
                answers: [
                    { text: "Military defense", correct: false },
                    { text: "Space exploration and satellite technology", correct: true },
                    { text: "Nuclear research", correct: false },
                    { text: "Agricultural research", correct: false },
                ]
            },
            {
                question: "In which city is the famous Victoria Memorial located?",
                answers: [
                    { text: "Mumbai", correct: false },
                    { text: "Delhi", correct: false },
                    { text: "Kolkata", correct: true },
                    { text: "Chennai", correct: false },
                ]
            },
            {
                question: "The 'Golden Temple' of Amritsar is the most sacred site for which religion?",
                answers: [
                    { text: "Buddhism", correct: false },
                    { text: "Jainism", correct: false },
                    { text: "Sikhism", correct: true },
                    { text: "Hinduism", correct: false },
                ]
            },
            {
                question: "Which mountain range is the source of the Ganges and Yamuna rivers?",
                answers: [
                    { text: "Himalayas", correct: true },
                    { text: "Aravalli Range", correct: false },
                    { text: "Western Ghats", correct: false },
                    { text: "Satpura Range", correct: false },
                ]
            },
            {
                question: "Which Indian city is known as the 'Silicon Valley of India'?",
                answers: [
                    { text: "Hyderabad", correct: false },
                    { text: "Chennai", correct: false },
                    { text: "Pune", correct: false },
                    { text: "Bengaluru", correct: true },
                ]
            },
            {
                question: "What is the scientific name of the national tree of India, the Banyan?",
                answers: [
                    { text: "Ficus benghalensis", correct: true },
                    { text: "Mangifera indica", correct: false },
                    { text: "Azadirachta indica", correct: false },
                    { text: "Shorea robusta", correct: false },
                ]
            },
            {
                question: "The first Indian to win the Nobel Prize was...",
                answers: [
                    { text: "C.V. Raman", correct: false },
                    { text: "Rabindranath Tagore", correct: true },
                    { text: "Mother Teresa", correct: false },
                    { text: "Amartya Sen", correct: false },
                ]
            },
            {
                question: "Which of the following is a classical dance form from North India?",
                answers: [
                    { text: "Kathak", correct: true },
                    { text: "Bharatanatyam", correct: false },
                    { text: "Kathakali", correct: false },
                    { text: "Odissi", correct: false },
                ]
            },
            {
                question: "The famous 'Sunderbans' forest is known for which animal?",
                answers: [
                    { text: "Asiatic Lion", correct: false },
                    { text: "One-horned Rhino", correct: false },
                    { text: "Royal Bengal Tiger", correct: true },
                    { text: "Snow Leopard", correct: false },
                ]
            },
            {
                question: "The 'Father of Indian Cinema' is a title given to which person?",
                answers: [
                    { text: "Satyajit Ray", correct: false },
                    { text: "Dadasaheb Phalke", correct: true },
                    { text: "Raj Kapoor", correct: false },
                    { text: "Guru Dutt", correct: false },
                ]
            },
            {
                question: "What is the main source of vitamin D?",
                answers: [
                    { text: "Fruits", correct: false },
                    { text: "Vegetables", correct: false },
                    { text: "Sunlight", correct: true },
                    { text: "Water", correct: false },
                ]
            },
            {
                question: "Which monument was built to commemorate the visit of King George V and Queen Mary to Mumbai?",
                answers: [
                    { text: "Gateway of India", correct: true },
                    { text: "India Gate", correct: false },
                    { text: "Charminar", correct: false },
                    { text: "Qutub Minar", correct: false },
                ]
            },
            {
                question: "The 'Rani ki Vav' stepwell, a UNESCO World Heritage site, is located in which state?",
                answers: [
                    { text: "Rajasthan", correct: false },
                    { text: "Gujarat", correct: true },
                    { text: "Karnataka", correct: false },
                    { text: "Maharashtra", correct: false },
                ]
            },
            {
                question: "Which vitamin is crucial for blood clotting?",
                answers: [
                    { text: "Vitamin A", correct: false },
                    { text: "Vitamin C", correct: false },
                    { text: "Vitamin K", correct: true },
                    { text: "Vitamin D", correct: false },
                ]
            },
            {
                question: "The currency of India is the Rupee. What is its symbol?",
                answers: [
                    { text: "₹", correct: true },
                    { text: "$", correct: false },
                    { text: "€", correct: false },
                    { text: "£", correct: false },
                ]
            },
            {
                question: "Who was the first woman Prime Minister of India?",
                answers: [
                    { text: "Sarojini Naidu", correct: false },
                    { text: "Sonia Gandhi", correct: false },
                    { text: "Indira Gandhi", correct: true },
                    { text: "Pratibha Patil", correct: false },
                ]
            },
            {
                question: "The first successful nuclear test in India was conducted in which state?",
                answers: [
                    { text: "Maharashtra", correct: false },
                    { text: "Gujarat", correct: false },
                    { text: "Rajasthan", correct: true },
                    { text: "Tamil Nadu", correct: false },
                ]
            },
            {
                question: "What is the full form of 'BSE' in the context of the Indian stock market?",
                answers: [
                    { text: "Bank of Standard Exchange", correct: false },
                    { text: "Bombay Stock Exchange", correct: true },
                    { text: "Bharat Stock Exchange", correct: false },
                    { text: "Basic Stock Exchange", correct: false },
                ]
            },
            {
                question: "The 'Konark Sun Temple' is located in which state?",
                answers: [
                    { text: "Odisha", correct: true },
                    { text: "Karnataka", correct: false },
                    { text: "Tamil Nadu", correct: false },
                    { text: "West Bengal", correct: false },
                ]
            },
            {
                question: "Which famous desert is located in Rajasthan?",
                answers: [
                    { text: "Kutch Desert", correct: false },
                    { text: "Thar Desert", correct: true },
                    { text: "Gobi Desert", correct: false },
                    { text: "Sahara Desert", correct: false },
                ]
            },
            {
                question: "Which gas is responsible for the greenhouse effect?",
                answers: [
                    { text: "Oxygen", correct: false },
                    { text: "Nitrogen", correct: false },
                    { text: "Carbon Dioxide", correct: true },
                    { text: "Hydrogen", correct: false },
                ]
            },
            {
                question: "The 'Mughal Gardens' are located inside the premises of which famous building?",
                answers: [
                    { text: "Humayun's Tomb", correct: false },
                    { text: "Red Fort", correct: false },
                    { text: "Rashtrapati Bhavan", correct: true },
                    { text: "Taj Mahal", correct: false },
                ]
            },
            {
                question: "What is the name of India's first satellite?",
                answers: [
                    { text: "Bhaskara", correct: false },
                    { text: "Chandrayaan", correct: false },
                    { text: "Rohini", correct: false },
                    { text: "Aryabhata", correct: true },
                ]
            },
            {
                question: "Which state is known as the 'Land of Five Rivers'?",
                answers: [
                    { text: "Haryana", correct: false },
                    { text: "Himachal Pradesh", correct: false },
                    { text: "Uttarakhand", correct: false },
                    { text: "Punjab", correct: true },
                ]
            },
            {
                question: "The 'Red Fort' of Delhi was built by which Mughal emperor?",
                answers: [
                    { text: "Akbar", correct: false },
                    { text: "Humayun", correct: false },
                    { text: "Shah Jahan", correct: true },
                    { text: "Aurangzeb", correct: false },
                ]
            },
            {
                question: "What is the primary gas in the air we breathe?",
                answers: [
                    { text: "Oxygen", correct: false },
                    { text: "Nitrogen", correct: true },
                    { text: "Carbon Dioxide", correct: false },
                    { text: "Argon", correct: false },
                ]
            }
        ]
    },
    coding: {
        title: "Coding",
        image: "images/coding.jpg",
        questions: [
            {
                question: "What is the primary function of CSS?",
                answers: [
                    { text: "Managing databases", correct: false },
                    { text: "Adding interactivity to websites", correct: false },
                    { text: "Structuring web content", correct: false },
                    { text: "Styling web pages", correct: true },
                ]
            },
            {
                question: "Which of the following is NOT a programming language?",
                answers: [
                    { text: "Java", correct: false },
                    { text: "HTML", correct: true },
                    { text: "Python", correct: false },
                    { text: "C++", correct: false },
                ]
            },
            {
                question: "What is a 'variable' in programming?",
                answers: [
                    { text: "A type of loop", correct: false },
                    { text: "A container for storing data values", correct: true },
                    { text: "A mathematical operator", correct: false },
                    { text: "A fixed value", correct: false },
                ]
            },
            {
                question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?",
                answers: [
                    { text: "Queue", correct: false },
                    { text: "Array", correct: false },
                    { text: "Stack", correct: true },
                    { text: "Linked List", correct: false },
                ]
            },
            {
                question: "What does 'API' stand for?",
                answers: [
                    { text: "Application Protocol Interface", correct: false },
                    { text: "Application Programming Interface", correct: true },
                    { text: "Advanced Programming Instruction", correct: false },
                    { text: "Automated Program Integration", correct: false },
                ]
            },
            {
                question: "Which of these is used for version control in software development?",
                answers: [
                    { text: "Adobe Photoshop", correct: false },
                    { text: "Git", correct: true },
                    { text: "Microsoft Excel", correct: false },
                    { text: "Google Docs", correct: false },
                ]
            },
            {
                question: "What is a 'bug' in programming?",
                answers: [
                    { text: "A physical insect in the computer", correct: false },
                    { text: "An error or defect in a program", correct: true },
                    { text: "A type of software", correct: false },
                    { text: "A user complaint", correct: false },
                ]
            },
            {
                question: "Which term refers to the process of finding and fixing errors in code?",
                answers: [
                    { text: "Compiling", correct: false },
                    { text: "Debugging", correct: true },
                    { text: "Executing", correct: false },
                    { text: "Syntax", correct: false },
                ]
            },
            {
                question: "What is the purpose of a 'for' loop?",
                answers: [
                    { text: "To declare a new variable", correct: false },
                    { text: "To execute a block of code a specific number of times", correct: true },
                    { text: "To check a condition", correct: false },
                    { text: "To define a function", correct: false },
                ]
            },
            {
                question: "Which symbol is used for a single-line comment in Python?",
                answers: [
                    { text: "//", correct: false },
                    { text: "/* */", correct: false },
                    { text: "#", correct: true },
                    { text: "--", correct: false },
                ]
            },
            {
                question: "What is a 'Boolean' data type?",
                answers: [
                    { text: "A number with decimals", correct: false },
                    { text: "A sequence of characters", correct: false },
                    { text: "A value that can be true or false", correct: true },
                    { text: "A whole number", correct: false },
                ]
            },
            {
                question: "Which term describes a reusable block of code designed to perform a specific task?",
                answers: [
                    { text: "Variable", correct: false },
                    { text: "Function", correct: true },
                    { text: "Loop", correct: false },
                    { text: "Class", correct: false },
                ]
            },
            {
                question: "In JavaScript, what keyword is used to declare a variable that cannot be reassigned?",
                answers: [
                    { text: "var", correct: false },
                    { text: "let", correct: false },
                    { text: "const", correct: true },
                    { text: "static", correct: false },
                ]
            },
            {
                question: "What is the main purpose of a database?",
                answers: [
                    { text: "To write code", correct: false },
                    { text: "To store, manage, and retrieve data", correct: true },
                    { text: "To design user interfaces", correct: false },
                    { text: "To create network connections", correct: false },
                ]
            },
            {
                question: "Which of these is an example of an algorithm?",
                answers: [
                    { text: "A piece of software", correct: false },
                    { text: "A set of step-by-step instructions to solve a problem", correct: true },
                    { text: "A computer language", correct: false },
                    { text: "A hardware component", correct: false },
                ]
            },
            {
                question: "What does 'HTTP' stand for?",
                answers: [
                    { text: "Hyper Text Transfer Protocol", correct: true },
                    { text: "High Technology Transfer Process", correct: false },
                    { text: "Hyperlink and Text Protocol", correct: false },
                    { text: "Home Text Transfer Protocol", correct: false },
                ]
            },
            {
                question: "Which language is primarily used for creating Android mobile apps?",
                answers: [
                    { text: "C#", correct: false },
                    { text: "Python", correct: false },
                    { text: "Swift", correct: false },
                    { text: "Kotlin/Java", correct: true },
                ]
            },
            {
                question: "What is a 'compiler'?",
                answers: [
                    { text: "A program that translates source code into machine code", correct: true },
                    { text: "A tool for fixing bugs", correct: false },
                    { text: "A web browser", correct: false },
                    { text: "A type of database", correct: false },
                ]
            },
            {
                question: "Which of the following is a key concept of Object-Oriented Programming (OOP)?",
                answers: [
                    { text: "Procedural programming", correct: false },
                    { text: "Structured programming", correct: false },
                    { text: "Inheritance", correct: true },
                    { text: "Linear programming", correct: false },
                ]
            },
            {
                question: "What does a 'front-end' developer primarily work on?",
                answers: [
                    { text: "Server logic and databases", correct: false },
                    { text: "The user-facing part of a website", correct: true },
                    { text: "Network security", correct: false },
                    { text: "Operating systems", correct: false },
                ]
            },
            {
                question: "What is the purpose of an 'if-else' statement?",
                answers: [
                    { text: "To create a loop", correct: false },
                    { text: "To make a decision based on a condition", correct: true },
                    { text: "To declare a new function", correct: false },
                    { text: "To store data", correct: false },
                ]
            },
            {
                question: "In programming, what is an 'array'?",
                answers: [
                    { text: "A single piece of data", correct: false },
                    { text: "A sequence of numbers", correct: false },
                    { text: "A collection of items of the same data type", correct: true },
                    { text: "A type of bug", correct: false },
                ]
            },
            {
                question: "Which language is known as the 'mother of all languages'?",
                answers: [
                    { text: "Java", correct: false },
                    { text: "C", correct: true },
                    { text: "Assembly", correct: false },
                    { text: "Python", correct: false },
                ]
            },
            {
                question: "What is the main benefit of using a 'class' in programming?",
                answers: [
                    { text: "It simplifies loops", correct: false },
                    { text: "It allows for code reusability and organization", correct: true },
                    { text: "It makes code run faster", correct: false },
                    { text: "It manages memory automatically", correct: false },
                ]
            },
            {
                question: "What is an 'interpreter'?",
                answers: [
                    { text: "A program that translates and executes code line by line", correct: true },
                    { text: "A tool for managing versions", correct: false },
                    { text: "A physical part of a computer", correct: false },
                    { text: "A type of database", correct: false },
                ]
            },
            {
                question: "Which of these is a common framework for building websites with Python?",
                answers: [
                    { text: "Ruby on Rails", correct: false },
                    { text: "Angular", correct: false },
                    { text: "Django", correct: true },
                    { text: "Laravel", correct: false },
                ]
            },
            {
                question: "What does SQL stand for?",
                answers: [
                    { text: "Simple Query Language", correct: false },
                    { text: "Structured Question Language", correct: false },
                    { text: "Structured Query Language", correct: true },
                    { text: "Sequential Query Language", correct: false },
                ]
            },
            {
                question: "Which of these is NOT a back-end programming language?",
                answers: [
                    { text: "Node.js", correct: false },
                    { text: "Python", correct: false },
                    { text: "Java", correct: false },
                    { text: "CSS", correct: true },
                ]
            },
            {
                question: "What is the purpose of an 'object' in programming?",
                answers: [
                    { text: "To create a loop", correct: false },
                    { text: "A data structure for storing key-value pairs", correct: true },
                    { text: "To link web pages", correct: false },
                    { text: "To manage user inputs", correct: false },
                ]
            },
            {
                question: "Which of the following is a search algorithm?",
                answers: [
                    { text: "Bubble Sort", correct: false },
                    { text: "Quick Sort", correct: false },
                    { text: "Binary Search", correct: true },
                    { text: "Insertion Sort", correct: false },
                ]
            }
        ]
    },
    maths: {
        title: "Mathematics",
        image: "images/math.jpg",
        questions: [
            {
                question: "What is the sum of all angles in a quadrilateral?",
                answers: [
                    { text: "180°", correct: false },
                    { text: "360°", correct: true },
                    { text: "90°", correct: false },
                    { text: "540°", correct: false },
                ]
            },
            {
                question: "What is the formula for the area of a rectangle?",
                answers: [
                    { text: "2(length + width)", correct: false },
                    { text: "length × width", correct: true },
                    { text: "side²", correct: false },
                    { text: "πr²", correct: false },
                ]
            },
            {
                question: "What is the smallest prime number?",
                answers: [
                    { text: "1", correct: false },
                    { text: "2", correct: true },
                    { text: "3", correct: false },
                    { text: "0", correct: false },
                ]
            },
            {
                question: "What does the 'π' symbol represent in geometry?",
                answers: [
                    { text: "The ratio of a circle's diameter to its radius", correct: false },
                    { text: "The ratio of a circle's circumference to its diameter", correct: true },
                    { text: "The area of a circle", correct: false },
                    { text: "The radius of a circle", correct: false },
                ]
            },
            {
                question: "According to Pythagoras' theorem, for a right-angled triangle, what is the relationship between its sides?",
                answers: [
                    { text: "a + b = c", correct: false },
                    { text: "a² + b² = c²", correct: true },
                    { text: "a² + b² = 2c", correct: false },
                    { text: "a + b = c²", correct: false },
                ]
            },
            {
                question: "A line that touches a circle at only one point is called a...?",
                answers: [
                    { text: "Chord", correct: false },
                    { text: "Tangent", correct: true },
                    { text: "Radius", correct: false },
                    { text: "Diameter", correct: false },
                ]
            },
            {
                question: "The median of a triangle connects a vertex to the midpoint of the...?",
                answers: [
                    { text: "Opposite side", correct: true },
                    { text: "Adjacent side", correct: false },
                    { text: "Hypotenuse", correct: false },
                    { text: "Angle", correct: false },
                ]
            },
            {
                question: "What is the value of 'tan(45°)'?",
                answers: [
                    { text: "0", correct: false },
                    { text: "0.5", correct: false },
                    { text: "1", correct: true },
                    { text: "√3", correct: false },
                ]
            },
            {
                question: "What is the formula for calculating Simple Interest (SI)?",
                answers: [
                    { text: "P × R × T", correct: true },
                    { text: "P + R + T", correct: false },
                    { text: "P × R / T", correct: false },
                    { text: "P + (R × T)", correct: false },
                ]
            },
            {
                question: "A number that can be expressed in the form p/q, where p and q are integers and q ≠ 0, is called a...?",
                answers: [
                    { text: "Irrational number", correct: false },
                    { text: "Integer", correct: false },
                    { text: "Rational number", correct: true },
                    { text: "Real number", correct: false },
                ]
            },
            {
                question: "The sum of the cubes of the first 'n' natural numbers is given by the formula...?",
                answers: [
                    { text: "n(n+1)/2", correct: false },
                    { text: "[n(n+1)/2]²", correct: true },
                    { text: "n²(n+1)²", correct: false },
                    { text: "n³/3", correct: false },
                ]
            },
            {
                question: "In algebra, what is a 'monomial'?",
                answers: [
                    { text: "An expression with two terms", correct: false },
                    { text: "An expression with a single term", correct: true },
                    { text: "An expression with multiple variables", correct: false },
                    { text: "A number without a variable", correct: false },
                ]
            },
            {
                question: "The HCF of two prime numbers is always...?",
                answers: [
                    { text: "1", correct: true },
                    { text: "0", correct: false },
                    { text: "The product of the numbers", correct: false },
                    { text: "The sum of the numbers", correct: false },
                ]
            },
            {
                question: "A polygon with 8 sides is called a...?",
                answers: [
                    { text: "Hexagon", correct: false },
                    { text: "Heptagon", correct: false },
                    { text: "Octagon", correct: true },
                    { text: "Nonagon", correct: false },
                ]
            },
            {
                question: "What is the definition of a 'prime number'?",
                answers: [
                    { text: "A number with exactly two factors: 1 and itself", correct: true },
                    { text: "A number that can only be divided by 1", correct: false },
                    { text: "Any odd number", correct: false },
                    { text: "A number that is not divisible by 2", correct: false },
                ]
            },
            {
                question: "In a quadratic equation ax² + bx + c = 0, the discriminant is given by...?",
                answers: [
                    { text: "b² - 4ac", correct: true },
                    { text: "a² + b²", correct: false },
                    { text: "4ac - b²", correct: false },
                    { text: "-b / 2a", correct: false },
                ]
            },
            {
                question: "What is the formula for the volume of a sphere?",
                answers: [
                    { text: "πr²h", correct: false },
                    { text: "4/3 πr³", correct: true },
                    { text: "2πrh", correct: false },
                    { text: "πr²", correct: false },
                ]
            },
            {
                question: "The product of two consecutive integers is always divisible by...?",
                answers: [
                    { text: "3", correct: false },
                    { text: "4", correct: false },
                    { text: "2", correct: true },
                    { text: "5", correct: false },
                ]
            },
            {
                question: "The area of a triangle with a base 'b' and height 'h' is given by...?",
                answers: [
                    { text: "b × h", correct: false },
                    { text: "2(b + h)", correct: false },
                    { text: "1/2 × b × h", correct: true },
                    { text: "b + h / 2", correct: false },
                ]
            },
            {
                question: "What is the value of 5⁰?",
                answers: [
                    { text: "0", correct: false },
                    { text: "5", correct: false },
                    { text: "1", correct: true },
                    { text: "10", correct: false },
                ]
            },
            {
                question: "In trigonometry, 'sec θ' is the reciprocal of which function?",
                answers: [
                    { text: "sin θ", correct: false },
                    { text: "cos θ", correct: true },
                    { text: "tan θ", correct: false },
                    { text: "cot θ", correct: false },
                ]
            },
            {
                question: "The set of all possible outcomes of an experiment is called the...?",
                answers: [
                    { text: "Event", correct: false },
                    { text: "Sample space", correct: true },
                    { text: "Probability", correct: false },
                    { text: "Outcome", correct: false },
                ]
            },
            {
                question: "The formula for the circumference of a circle is...",
                answers: [
                    { text: "πr²", correct: false },
                    { text: "2πr", correct: true },
                    { text: "πd", correct: false },
                    { text: "π(d/2)", correct: false },
                ]
            },
            {
                question: "What is the slope of a horizontal line?",
                answers: [
                    { text: "Undefined", correct: false },
                    { text: "1", correct: false },
                    { text: "0", correct: true },
                    { text: "Negative", correct: false },
                ]
            },
            {
                question: "What is the volume of a cylinder with radius 'r' and height 'h'?",
                answers: [
                    { text: "2πrh", correct: false },
                    { text: "πr²h", correct: true },
                    { text: "2πr(r+h)", correct: false },
                    { text: "1/3πr²h", correct: false },
                ]
            },
            {
                question: "What is the formula for the nth term of an arithmetic progression?",
                answers: [
                    { text: "a + (n-1)d", correct: true },
                    { text: "arⁿ⁻¹", correct: false },
                    { text: "n/2[2a+(n-1)d]", correct: false },
                    { text: "a - (n-1)d", correct: false },
                ]
            },
            {
                question: "Which of the following is an irrational number?",
                answers: [
                    { text: "√4", correct: false },
                    { text: "22/7", correct: false },
                    { text: "0.333...", correct: false },
                    { text: "π", correct: true },
                ]
            },
            {
                question: "The property (a + b) + c = a + (b + c) is called the...",
                answers: [
                    { text: "Commutative Property", correct: false },
                    { text: "Distributive Property", correct: false },
                    { text: "Associative Property", correct: true },
                    { text: "Identity Property", correct: false },
                ]
            },
            {
                question: "What is the mode of a set of data?",
                answers: [
                    { text: "The middle value", correct: false },
                    { text: "The sum of all values", correct: false },
                    { text: "The most frequently occurring value", correct: true },
                    { text: "The average value", correct: false },
                ]
            },
            {
                question: "What is the definition of a 'polynomial'?",
                answers: [
                    { text: "An expression with exactly one term", correct: false },
                    { text: "An expression with a variable in the denominator", correct: false },
                    { text: "An expression with non-negative integer exponents of the variables", correct: true },
                    { text: "An equation with an equals sign", correct: false },
                ]
            }
        ]
    },
    science: {
        title: "Science",
        image: "images/science.jpg",
        questions: [
            {
                question: "What is the powerhouse of the cell?",
                answers: [
                    { text: "Nucleus", correct: false },
                    { text: "Ribosome", correct: false },
                    { text: "Mitochondria", correct: true },
                    { text: "Cytoplasm", correct: false },
                ]
            },
            {
                question: "What is the chemical symbol for gold?",
                answers: [
                    { text: "Ag", correct: false },
                    { text: "Au", correct: true },
                    { text: "Pb", correct: false },
                    { text: "Fe", correct: false },
                ]
            },
            {
                question: "Which gas do plants absorb during photosynthesis?",
                answers: [
                    { text: "Oxygen", correct: false },
                    { text: "Nitrogen", correct: false },
                    { text: "Carbon Dioxide", correct: true },
                    { text: "Hydrogen", correct: false },
                ]
            },
            {
                question: "The chemical formula for water is:",
                answers: [
                    { text: "$$H_3O$$", correct: false },
                    { text: "$$H_2O_2$$", correct: false },
                    { text: "$$H_2O$$", correct: true },
                    { text: "$$CO_2$$", correct: false },
                ]
            },
            {
                question: "What is the study of the universe and celestial objects called?",
                answers: [
                    { text: "Geology", correct: false },
                    { text: "Meteorology", correct: false },
                    { text: "Cosmology", correct: true },
                    { text: "Oceanography", correct: false },
                ]
            },
            {
                question: "Which of these is a good conductor of electricity?",
                answers: [
                    { text: "Wood", correct: false },
                    { text: "Plastic", correct: false },
                    { text: "Copper", correct: true },
                    { text: "Glass", correct: false },
                ]
            },
            {
                question: "What is the process by which a solid turns directly into a gas without passing through the liquid state?",
                answers: [
                    { text: "Evaporation", correct: false },
                    { text: "Condensation", correct: false },
                    { text: "Sublimation", correct: true },
                    { text: "Melting", correct: false },
                ]
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                answers: [
                    { text: "Venus", correct: false },
                    { text: "Mars", correct: true },
                    { text: "Jupiter", correct: false },
                    { text: "Mercury", correct: false },
                ]
            },
            {
                question: "What is the unit of electric current?",
                answers: [
                    { text: "Volt", correct: false },
                    { text: "Ohm", correct: false },
                    { text: "Watt", correct: false },
                    { text: "Ampere", correct: true },
                ]
            },
            {
                question: "What is the main component of natural gas?",
                answers: [
                    { text: "Propane", correct: false },
                    { text: "Butane", correct: false },
                    { text: "Methane", correct: true },
                    { text: "Ethane", correct: false },
                ]
            },
            {
                question: "What is the process of a liquid becoming a solid?",
                answers: [
                    { text: "Melting", correct: false },
                    { text: "Evaporation", correct: false },
                    { text: "Freezing", correct: true },
                    { text: "Condensation", correct: false },
                ]
            },
            {
                question: "Which of these is an example of a chemical change?",
                answers: [
                    { text: "Melting of ice", correct: false },
                    { text: "Boiling of water", correct: false },
                    { text: "Burning of wood", correct: true },
                    { text: "Cutting of paper", correct: false },
                ]
            },
            {
                question: "What is the scientific study of plants called?",
                answers: [
                    { text: "Zoology", correct: false },
                    { text: "Geology", correct: false },
                    { text: "Botany", correct: true },
                    { text: "Anatomy", correct: false },
                ]
            },
            {
                question: "Which of these is the largest planet in our solar system?",
                answers: [
                    { text: "Saturn", correct: false },
                    { text: "Earth", correct: false },
                    { text: "Uranus", correct: false },
                    { text: "Jupiter", correct: true },
                ]
            },
            {
                question: "What is the main function of red blood cells?",
                answers: [
                    { text: "Fighting infection", correct: false },
                    { text: "Transporting oxygen", correct: true },
                    { text: "Clotting blood", correct: false },
                    { text: "Filtering waste", correct: false },
                ]
            },
            {
                question: "Which of the following is a renewable source of energy?",
                answers: [
                    { text: "Coal", correct: false },
                    { text: "Petroleum", correct: false },
                    { text: "Solar power", correct: true },
                    { text: "Natural gas", correct: false },
                ]
            },
            {
                question: "What is the process of splitting a large atom's nucleus into smaller atoms?",
                answers: [
                    { text: "Nuclear fusion", correct: false },
                    { text: "Nuclear fission", correct: true },
                    { text: "Radioactive decay", correct: false },
                    { text: "Chemical reaction", correct: false },
                ]
            },
            {
                question: "Which part of the human body produces insulin?",
                answers: [
                    { text: "Liver", correct: false },
                    { text: "Stomach", correct: false },
                    { text: "Pancreas", correct: true },
                    { text: "Kidney", correct: false },
                ]
            },
            {
                question: "What is the hardest natural substance on Earth?",
                answers: [
                    { text: "Granite", correct: false },
                    { text: "Iron", correct: false },
                    { text: "Diamond", correct: true },
                    { text: "Quartz", correct: false },
                ]
            },
            {
                question: "Which of these is a vector quantity?",
                answers: [
                    { text: "Mass", correct: false },
                    { text: "Speed", correct: false },
                    { text: "Distance", correct: false },
                    { text: "Velocity", correct: true },
                ]
            },
            {
                question: "Which layer of the atmosphere is closest to Earth's surface?",
                answers: [
                    { text: "Mesosphere", correct: false },
                    { text: "Stratosphere", correct: false },
                    { text: "Exosphere", correct: false },
                    { text: "Troposphere", correct: true },
                ]
            },
            {
                question: "What is the common name for sodium chloride?",
                answers: [
                    { text: "Baking soda", correct: false },
                    { text: "Vinegar", correct: false },
                    { text: "Table salt", correct: true },
                    { text: "Sugar", correct: false },
                ]
            },
            {
                question: "Which organ in the human body is responsible for filtering blood?",
                answers: [
                    { text: "Heart", correct: false },
                    { text: "Lungs", correct: false },
                    { text: "Kidneys", correct: true },
                    { text: "Stomach", correct: false },
                ]
            },
            {
                question: "What is the process of breaking down food into smaller molecules called?",
                answers: [
                    { text: "Respiration", correct: false },
                    { text: "Photosynthesis", correct: false },
                    { text: "Digestion", correct: true },
                    { text: "Fermentation", correct: false },
                ]
            },
            {
                question: "Which of these is a vertebrate?",
                answers: [
                    { text: "Jellyfish", correct: false },
                    { text: "Earthworm", correct: false },
                    { text: "Frog", correct: true },
                    { text: "Snail", correct: false },
                ]
            },
            {
                question: "What is the SI unit for temperature?",
                answers: [
                    { text: "Celsius", correct: false },
                    { text: "Fahrenheit", correct: false },
                    { text: "Joule", correct: false },
                    { text: "Kelvin", correct: true },
                ]
            },
            {
                question: "Which layer of the Earth is responsible for generating its magnetic field?",
                answers: [
                    { text: "Crust", correct: false },
                    { text: "Mantle", correct: false },
                    { text: "Inner core", correct: false },
                    { text: "Outer core", correct: true },
                ]
            },
            {
                question: "What is the function of chlorophyll in plants?",
                answers: [
                    { text: "Absorbing water from the soil", correct: false },
                    { text: "Providing structural support", correct: false },
                    { text: "Producing oxygen", correct: false },
                    { text: "Absorbing sunlight for photosynthesis", correct: true },
                ]
            },
            {
                question: "What is the main chemical component of the Sun?",
                answers: [
                    { text: "Nitrogen", correct: false },
                    { text: "Oxygen", correct: false },
                    { text: "Helium", correct: false },
                    { text: "Hydrogen", correct: true },
                ]
            },
            {
                question: "The chemical process of rusting is also known as...?",
                answers: [
                    { text: "Oxidation", correct: true },
                    { text: "Reduction", correct: false },
                    { text: "Combustion", correct: false },
                    { text: "Photosynthesis", correct: false },
                ]
            }
        ]
    },
    history: {
    title: "History",
    image: "images/history2.jpg",
    questions: [
        {
            question: "The Indus Valley Civilization is also known as which civilization?",
            answers: [
                { text: "Vedic", correct: false },
                { text: "Harappan", correct: true },
                { text: "Mohenjo-Daro", correct: false },
                { text: "Mauryan", correct: false },
            ]
        },
        {
            question: "Who was the founder of the Mauryan Empire?",
            answers: [
                { text: "Ashoka", correct: false },
                { text: "Chandragupta Maurya", correct: true },
                { text: "Bindusara", correct: false },
                { text: "Samudragupta", correct: false },
            ]
        },
        {
            question: "The famous 'Iron Pillar' which has not rusted despite being exposed to weather for centuries is located in which city?",
            answers: [
                { text: "Mumbai", correct: false },
                { text: "Delhi", correct: true },
                { text: "Kolkata", correct: false },
                { text: "Agra", correct: false },
            ]
        },
        {
            question: "Who was the first governor-general of independent India?",
            answers: [
                { text: "Lord Mountbatten", correct: false },
                { text: "C. Rajagopalachari", correct: true },
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Dr. Rajendra Prasad", correct: false },
            ]
        },
        {
            question: "The Jallianwala Bagh massacre took place in which year?",
            answers: [
                { text: "1918", correct: false },
                { text: "1919", correct: true },
                { text: "1920", correct: false },
                { text: "1921", correct: false },
            ]
        },
        {
            question: "Which Indian freedom fighter is known as 'Netaji'?",
            answers: [
                { text: "Bhagat Singh", correct: false },
                { text: "Subhas Chandra Bose", correct: true },
                { text: "Mahatma Gandhi", correct: false },
                { text: "Sardar Vallabhbhai Patel", correct: false },
            ]
        },
        {
            question: "The 'Dandi March' was led by which freedom fighter?",
            answers: [
                { text: "Subhas Chandra Bose", correct: false },
                { text: "Mahatma Gandhi", correct: true },
                { text: "Bhagat Singh", correct: false },
                { text: "Sardar Vallabhbhai Patel", correct: false },
            ]
        },
        {
            question: "The ancient city of Pataliputra is the modern-day city of...?",
            answers: [
                { text: "Patna", correct: true },
                { text: "Lucknow", correct: false },
                { text: "Varanasi", correct: false },
                { text: "Ujjain", correct: false },
            ]
        },
        {
            question: "Who founded the 'Satyashodhak Samaj' in Maharashtra?",
            answers: [
                { text: "B. R. Ambedkar", correct: false },
                { text: "Jyotirao Phule", correct: true },
                { text: "Gopal Krishna Gokhale", correct: false },
                { text: "Mahatma Gandhi", correct: false },
            ]
        },
        {
            question: "The 'First War of Indian Independence' in 1857 is also known as the...",
            answers: [
                { text: "Sepoy Mutiny", correct: true },
                { text: "Quit India Movement", correct: false },
                { text: "Civil Disobedience Movement", correct: false },
                { text: "Non-Cooperation Movement", correct: false },
            ]
        },
        {
            question: "Which dynasty built the Khajuraho temples?",
            answers: [
                { text: "Gupta", correct: false },
                { text: "Chola", correct: false },
                { text: "Chandela", correct: true },
                { text: "Rashtrakuta", correct: false },
            ]
        },
        {
            question: "The 'Rigveda' is the oldest text of which religious tradition?",
            answers: [
                { text: "Buddhism", correct: false },
                { text: "Hinduism", correct: true },
                { text: "Jainism", correct: false },
                { text: "Sikhism", correct: false },
            ]
        },
        {
            question: "Who was the first woman President of the Indian National Congress?",
            answers: [
                { text: "Sarojini Naidu", correct: false },
                { text: "Annie Besant", correct: true },
                { text: "Indira Gandhi", correct: false },
                { text: "Vijayalakshmi Pandit", correct: false },
            ]
        },
        {
            question: "The 'Battle of Plassey' was fought in which year?",
            answers: [
                { text: "1757", correct: true },
                { text: "1764", correct: false },
                { text: "1773", correct: false },
                { text: "1857", correct: false },
            ]
        },
        {
            question: "Who founded the 'Gadar Party' in the US and Canada?",
            answers: [
                { text: "Lala Lajpat Rai", correct: false },
                { text: "Lala Har Dayal", correct: true },
                { text: "Ras Bihari Bose", correct: false },
                { text: "Sohan Singh Bhakna", correct: false },
            ]
        },
        {
            question: "The 'Sangam period' in ancient India is associated with which region?",
            answers: [
                { text: "North India", correct: false },
                { text: "Deccan", correct: false },
                { text: "South India", correct: true },
                { text: "East India", correct: false },
            ]
        },
        {
            question: "Who was the first Indian to join the Indian Civil Service (ICS)?",
            answers: [
                { text: "Surendranath Banerjee", correct: false },
                { text: "Satyendranath Tagore", correct: true },
                { text: "Aurobindo Ghosh", correct: false },
                { text: "Dadabhai Naoroji", correct: false },
            ]
        },
        {
            question: "The 'Permanent Settlement' was introduced by which British Governor-General?",
            answers: [
                { text: "Lord Wellesley", correct: false },
                { text: "Lord Cornwallis", correct: true },
                { text: "Lord Dalhousie", correct: false },
                { text: "William Bentinck", correct: false },
            ]
        },
        {
            question: "The ancient university of Nalanda was in which modern Indian state?",
            answers: [
                { text: "West Bengal", correct: false },
                { text: "Uttar Pradesh", correct: false },
                { text: "Bihar", correct: true },
                { text: "Odisha", correct: false },
            ]
        },
        {
            question: "Who was the founder of the 'Forward Bloc' political party?",
            answers: [
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Subhas Chandra Bose", correct: true },
                { text: "Sardar Vallabhbhai Patel", correct: false },
                { text: "Maulana Azad", correct: false },
            ]
        },
        {
            question: "The 'Battle of Buxar' was fought in which year?",
            answers: [
                { text: "1757", correct: false },
                { text: "1764", correct: true },
                { text: "1857", correct: false },
                { text: "1773", correct: false },
            ]
        },
        {
            question: "Which Indian leader is known as the 'Iron Man of India'?",
            answers: [
                { text: "Lal Bahadur Shastri", correct: false },
                { text: "Sardar Vallabhbhai Patel", correct: true },
                { text: "B. R. Ambedkar", correct: false },
                { text: "Subhas Chandra Bose", correct: false },
            ]
        },
        {
            question: "The 'Rigvedic' period is known for which system of governance?",
            answers: [
                { text: "Monarchy", correct: false },
                { text: "Republic", correct: false },
                { text: "Tribal chiefdoms", correct: true },
                { text: "Democracy", correct: false },
            ]
        },
        {
            question: "Who was the first President of the Indian National Congress?",
            answers: [
                { text: "A. O. Hume", correct: false },
                { text: "W. C. Bonnerjee", correct: true },
                { text: "Dadabhai Naoroji", correct: false },
                { text: "Badruddin Tyabji", correct: false },
            ]
        },
        {
            question: "Which ancient Indian ruler converted to Buddhism after the Kalinga War?",
            answers: [
                { text: "Chandragupta Maurya", correct: false },
                { text: "Bindusara", correct: false },
                { text: "Ashoka", correct: true },
                { text: "Kanishka", correct: false },
            ]
        },
        {
            question: "The 'Sati Pratha' was abolished by which British Governor-General?",
            answers: [
                { text: "Lord Dalhousie", correct: false },
                { text: "Lord William Bentinck", correct: true },
                { text: "Lord Canning", correct: false },
                { text: "Lord Ripon", correct: false },
            ]
        },
        {
            question: "The 'Harshacharita' was written by which court poet of King Harsha?",
            answers: [
                { text: "Kalidasa", correct: false },
                { text: "Banabhatta", correct: true },
                { text: "Fa Xian", correct: false },
                { text: "Xuanzang", correct: false },
            ]
        },
        {
            question: "The 'Cripps Mission' came to India in which year?",
            answers: [
                { text: "1940", correct: false },
                { text: "1942", correct: true },
                { text: "1945", correct: false },
                { text: "1946", correct: false },
            ]
        },
        {
            question: "The 'Partition of Bengal' was carried out by which Viceroy of India?",
            answers: [
                { text: "Lord Minto", correct: false },
                { text: "Lord Curzon", correct: true },
                { text: "Lord Hardinge", correct: false },
                { text: "Lord Chelmsford", correct: false },
            ]
        },
        {
            question: "The 'Khilafat Movement' was a pan-Islamic political protest campaign launched by Muslims in British India to influence which event?",
            answers: [
                { text: "The partition of Bengal", correct: false },
                { text: "The Turkish Empire post-WWI", correct: true },
                { text: "The Jallianwala Bagh massacre", correct: false },
                { text: "The Simon Commission", correct: false },
            ]
        }
    ]
},
    geography: {
    title: "Geography",
    image: "images/geography.jpg",
    questions: [
        {
            question: "Which is the largest ocean on Earth?",
            answers: [
                { text: "Atlantic", correct: false },
                { text: "Indian", correct: false },
                { text: "Arctic", correct: false },
                { text: "Pacific", correct: true },
            ]
        },
        {
            question: "Which of these is the largest continent by land area?",
            answers: [
                { text: "Africa", correct: false },
                { text: "North America", correct: false },
                { text: "Asia", correct: true },
                { text: "Europe", correct: false },
            ]
        },
        {
            question: "What is the capital of Japan?",
            answers: [
                { text: "Beijing", correct: false },
                { text: "Seoul", correct: false },
                { text: "Tokyo", correct: true },
                { text: "Bangkok", correct: false },
            ]
        },
        {
            question: "The 'Sahara Desert' is located on which continent?",
            answers: [
                { text: "Asia", correct: false },
                { text: "North America", correct: false },
                { text: "Africa", correct: true },
                { text: "Australia", correct: false },
            ]
        },
        {
            question: "Which river is the longest in the world?",
            answers: [
                { text: "Amazon", correct: false },
                { text: "Ganga", correct: false },
                { text: "Nile", correct: true },
                { text: "Yangtze", correct: false },
            ]
        },
        {
            question: "What is the name of the largest island in the world?",
            answers: [
                { text: "Madagascar", correct: false },
                { text: "Greenland", correct: true },
                { text: "Australia", correct: false },
                { text: "Borneo", correct: false },
            ]
        },
        {
            question: "Mount Everest, the world's highest peak, is located in which mountain range?",
            answers: [
                { text: "Andes", correct: false },
                { text: "Rocky Mountains", correct: false },
                { text: "Himalayas", correct: true },
                { text: "Alps", correct: false },
            ]
        },
        {
            question: "Which country is also known as the 'Land of the Rising Sun'?",
            answers: [
                { text: "China", correct: false },
                { text: "India", correct: false },
                { text: "Japan", correct: true },
                { text: "Thailand", correct: false },
            ]
        },
        {
            question: "The 'Strait of Gibraltar' separates which two continents?",
            answers: [
                { text: "Asia and Africa", correct: false },
                { text: "North America and South America", correct: false },
                { text: "Europe and Africa", correct: true },
                { text: "Asia and Europe", correct: false },
            ]
        },
        {
            question: "Which of these is the world's largest hot desert?",
            answers: [
                { text: "Gobi Desert", correct: false },
                { text: "Kalahari Desert", correct: false },
                { text: "Sahara Desert", correct: true },
                { text: "Arabian Desert", correct: false },
            ]
        },
        {
            question: "Which country is the world's largest producer of coffee?",
            answers: [
                { text: "Colombia", correct: false },
                { text: "Vietnam", correct: false },
                { text: "Brazil", correct: true },
                { text: "Ethiopia", correct: false },
            ]
        },
        {
            question: "The 'Great Barrier Reef' is located off the coast of which country?",
            answers: [
                { text: "Indonesia", correct: false },
                { text: "Australia", correct: true },
                { text: "Philippines", correct: false },
                { text: "Fiji", correct: false },
            ]
        },
        {
            question: "Which is the smallest continent by land area?",
            answers: [
                { text: "Europe", correct: false },
                { text: "Australia", correct: true },
                { text: "Antarctica", correct: false },
                { text: "South America", correct: false },
            ]
        },
        {
            question: "The 'Amazon Rainforest' is primarily located in which country?",
            answers: [
                { text: "Peru", correct: false },
                { text: "Colombia", correct: false },
                { text: "Brazil", correct: true },
                { text: "Venezuela", correct: false },
            ]
        },
        {
            question: "Which of these lines of latitude is also known as the 'Equator'?",
            answers: [
                { text: "0°", correct: true },
                { text: "23.5° N", correct: false },
                { text: "23.5° S", correct: false },
                { text: "90° N", correct: false },
            ]
        },
        {
            question: "The 'Andes Mountains' are located on which continent?",
            answers: [
                { text: "Asia", correct: false },
                { text: "North America", correct: false },
                { text: "South America", correct: true },
                { text: "Europe", correct: false },
            ]
        },
        {
            question: "Which is the largest lake in India?",
            answers: [
                { text: "Dal Lake", correct: false },
                { text: "Wular Lake", correct: true },
                { text: "Chilika Lake", correct: false },
                { text: "Sambhar Lake", correct: false },
            ]
        },
        {
            question: "The 'Chota Nagpur Plateau' is a prominent feature in which part of India?",
            answers: [
                { text: "North India", correct: false },
                { text: "South India", correct: false },
                { text: "East India", correct: true },
                { text: "West India", correct: false },
            ]
        },
        {
            question: "Which of the following is an artificial lake in India?",
            answers: [
                { text: "Dal Lake", correct: false },
                { text: "Wular Lake", correct: false },
                { text: "Sukhna Lake", correct: true },
                { text: "Chilika Lake", correct: false },
            ]
        },
        {
            question: "Which Indian state is known as the 'Spice Garden of India'?",
            answers: [
                { text: "Karnataka", correct: false },
                { text: "Kerala", correct: true },
                { text: "Assam", correct: false },
                { text: "Tamil Nadu", correct: false },
            ]
        },
        {
            question: "The 'Gir Forest' in Gujarat is the only natural habitat for which animal in India?",
            answers: [
                { text: "Bengal Tiger", correct: false },
                { text: "Asiatic Lion", correct: true },
                { text: "Indian Elephant", correct: false },
                { text: "One-horned Rhino", correct: false },
            ]
        },
        {
            question: "Which city is the capital of Australia?",
            answers: [
                { text: "Sydney", correct: false },
                { text: "Melbourne", correct: false },
                { text: "Canberra", correct: true },
                { text: "Perth", correct: false },
            ]
        },
        {
            question: "The 'Suez Canal' connects which two bodies of water?",
            answers: [
                { text: "Mediterranean Sea and Atlantic Ocean", correct: false },
                { text: "Red Sea and Indian Ocean", correct: false },
                { text: "Mediterranean Sea and Red Sea", correct: true },
                { text: "Black Sea and Caspian Sea", correct: false },
            ]
        },
        {
            question: "Which country is the largest in the world by land area?",
            answers: [
                { text: "Canada", correct: false },
                { text: "China", correct: false },
                { text: "Russia", correct: true },
                { text: "United States", correct: false },
            ]
        },
        {
            question: "The 'Great Victoria Desert' is located in which country?",
            answers: [
                { text: "Brazil", correct: false },
                { text: "Argentina", correct: false },
                { text: "Australia", correct: true },
                { text: "South Africa", correct: false },
            ]
        },
        {
            question: "Which of these is a major river flowing through China?",
            answers: [
                { text: "Nile", correct: false },
                { text: "Amazon", correct: false },
                { text: "Yangtze", correct: true },
                { text: "Volga", correct: false },
            ]
        },
        {
            question: "The 'Deccan Plateau' is a prominent geographical feature in which country?",
            answers: [
                { text: "Pakistan", correct: false },
                { text: "India", correct: true },
                { text: "Nepal", correct: false },
                { text: "Bangladesh", correct: false },
            ]
        },
        {
            question: "What is the capital of Canada?",
            answers: [
                { text: "Toronto", correct: false },
                { text: "Vancouver", correct: false },
                { text: "Ottawa", correct: true },
                { text: "Montreal", correct: false },
            ]
        },
        {
            question: "The 'Palk Strait' separates India from which country?",
            answers: [
                { text: "Pakistan", correct: false },
                { text: "Bangladesh", correct: false },
                { text: "Sri Lanka", correct: true },
                { text: "Maldives", correct: false },
            ]
        },
        {
            question: "Which of these Indian states does not share a border with Nepal?",
            answers: [
                { text: "Uttarakhand", correct: false },
                { text: "Sikkim", correct: false },
                { text: "Assam", correct: true },
                { text: "Uttar Pradesh", correct: false },
            ]
        }
    ]
},
    sports: {
    title: "Sports",
    image: "images/sports.jpg",
    questions: [
        {
            question: "How many players are on a standard basketball team on the court at one time?",
            answers: [
                { text: "6", correct: false },
                { text: "5", correct: true },
                { text: "7", correct: false },
                { text: "11", correct: false },
            ]
        },
        {
            question: "In which sport would you use a shuttlecock?",
            answers: [
                { text: "Tennis", correct: false },
                { text: "Badminton", correct: true },
                { text: "Squash", correct: false },
                { text: "Table Tennis", correct: false },
            ]
        },
        {
            question: "What is the national sport of India?",
            answers: [
                { text: "Cricket", correct: false },
                { text: "Hockey", correct: true },
                { text: "Football", correct: false },
                { text: "Kabaddi", correct: false },
            ]
        },
        {
            question: "How many players are in a cricket team on the field at one time?",
            answers: [
                { text: "9", correct: false },
                { text: "10", correct: false },
                { text: "11", correct: true },
                { text: "12", correct: false },
            ]
        },
        {
            question: "The term 'hat-trick' is commonly used in which sport?",
            answers: [
                { text: "Basketball", correct: false },
                { text: "Football (Soccer)", correct: true },
                { text: "Golf", correct: false },
                { text: "Tennis", correct: false },
            ]
        },
        {
            question: "Who is known as the 'God of Cricket'?",
            answers: [
                { text: "MS Dhoni", correct: false },
                { text: "Virat Kohli", correct: false },
                { text: "Sachin Tendulkar", correct: true },
                { text: "Rohit Sharma", correct: false },
            ]
        },
        {
            question: "The 'Dronacharya Award' is given for excellence in which field?",
            answers: [
                { text: "Coaching", correct: true },
                { text: "Playing", correct: false },
                { text: "Administration", correct: false },
                { text: "Commentary", correct: false },
            ]
        },
        {
            question: "Which country won the first-ever Cricket World Cup in 1975?",
            answers: [
                { text: "India", correct: false },
                { text: "Australia", correct: false },
                { text: "West Indies", correct: true },
                { text: "England", correct: false },
            ]
        },
        {
            question: "The term 'smash' is associated with which sport?",
            answers: [
                { text: "Cricket", correct: false },
                { text: "Tennis", correct: true },
                { text: "Football", correct: false },
                { text: "Swimming", correct: false },
            ]
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            answers: [
                { text: "UK", correct: false },
                { text: "China", correct: false },
                { text: "Brazil", correct: true },
                { text: "USA", correct: false },
            ]
        },
        {
            question: "In which sport would you find a 'gully' and a 'silly point'?",
            answers: [
                { text: "Baseball", correct: false },
                { text: "Cricket", correct: true },
                { text: "Hockey", correct: false },
                { text: "Golf", correct: false },
            ]
        },
        {
            question: "What is the standard length of a marathon race in kilometers?",
            answers: [
                { text: "21.1 km", correct: false },
                { text: "42.195 km", correct: true },
                { text: "50 km", correct: false },
                { text: "40 km", correct: false },
            ]
        },
        {
            question: "Which country won the FIFA World Cup in 2022?",
            answers: [
                { text: "France", correct: false },
                { text: "Argentina", correct: true },
                { text: "Germany", correct: false },
                { text: "Brazil", correct: false },
            ]
        },
        {
            question: "How many holes are there in a standard game of golf?",
            answers: [
                { text: "9", correct: false },
                { text: "12", correct: false },
                { text: "18", correct: true },
                { text: "20", correct: false },
            ]
        },
        {
            question: "The 'Ryder Cup' is a famous tournament in which sport?",
            answers: [
                { text: "Tennis", correct: false },
                { text: "Golf", correct: true },
                { text: "Basketball", correct: false },
                { text: "Hockey", correct: false },
            ]
        },
        {
            question: "What is the full form of 'IPL' in cricket?",
            answers: [
                { text: "International Premier League", correct: false },
                { text: "Indian Premier League", correct: true },
                { text: "India's Premier League", correct: false },
                { text: "Indian Professional League", correct: false },
            ]
        },
        {
            question: "The term 'backstroke' is associated with which sport?",
            answers: [
                { text: "Gymnastics", correct: false },
                { text: "Swimming", correct: true },
                { text: "Athletics", correct: false },
                { text: "Rowing", correct: false },
            ]
        },
        {
            question: "Who is the first Indian woman to win an Olympic medal?",
            answers: [
                { text: "Saina Nehwal", correct: false },
                { text: "Mary Kom", correct: false },
                { text: "Karnam Malleswari", correct: true },
                { text: "P.V. Sindhu", correct: false },
            ]
        },
        {
            question: "In which sport do you score a 'try'?",
            answers: [
                { text: "Rugby", correct: true },
                { text: "American Football", correct: false },
                { text: "Cricket", correct: false },
                { text: "Baseball", correct: false },
            ]
        },
        {
            question: "Which country is the birthplace of the sport 'Judo'?",
            answers: [
                { text: "China", correct: false },
                { text: "South Korea", correct: false },
                { text: "Japan", correct: true },
                { text: "India", correct: false },
            ]
        },
        {
            question: "The 'Wankhede Stadium' is located in which Indian city?",
            answers: [
                { text: "Kolkata", correct: false },
                { text: "Delhi", correct: false },
                { text: "Mumbai", correct: true },
                { text: "Chennai", correct: false },
            ]
        },
        {
            question: "What is the maximum number of times a single team can hit the ball in volleyball before it must cross the net?",
            answers: [
                { text: "2", correct: false },
                { text: "3", correct: true },
                { text: "4", correct: false },
            ]
        },
        {
            question: "In which sport would you perform a 'dunk'?",
            answers: [
                { text: "Volleyball", correct: false },
                { text: "Basketball", correct: true },
                { text: "Football", correct: false },
                { text: "Handball", correct: false },
            ]
        },
        {
            question: "Which famous athlete is known as 'The Flying Sikh'?",
            answers: [
                { text: "Milkha Singh", correct: true },
                { text: "Dhyan Chand", correct: false },
                { text: "P.T. Usha", correct: false },
                { text: "Paavo Nurmi", correct: false },
            ]
        },
        {
            question: "The term 'checkmate' is used in which game?",
            answers: [
                { text: "Carrom", correct: false },
                { text: "Chess", correct: true },
                { text: "Ludo", correct: false },
                { text: "Snooker", correct: false },
            ]
        },
        {
            question: "Which of these is a term used in wrestling?",
            answers: [
                { text: "Lob", correct: false },
                { text: "Pin", correct: true },
                { text: "Free throw", correct: false },
                { text: "Stump", correct: false },
            ]
        },
        {
            question: "The 'Oval' cricket ground is located in which city?",
            answers: [
                { text: "Sydney", correct: false },
                { text: "London", correct: true },
                { text: "Melbourne", correct: false },
                { text: "Mumbai", correct: false },
            ]
        },
        {
            question: "Who is the first Indian to win a gold medal at the Olympics for an individual event?",
            answers: [
                { text: "Major Dhyan Chand", correct: false },
                { text: "Abhinav Bindra", correct: true },
                { text: "Neeraj Chopra", correct: false },
                { text: "Sushil Kumar", correct: false },
            ]
        },
        {
            question: "How many overs are there in a T20 cricket match?",
            answers: [
                { text: "50", correct: false },
                { text: "20", correct: true },
                { text: "10", correct: false },
                { text: "30", correct: false },
            ]
        },
        {
            question: "Which sport is played at 'Wimbledon'?",
            answers: [
                { text: "Tennis", correct: true },
                { text: "Badminton", correct: false },
                { text: "Football", correct: false },
                { text: "Cricket", correct: false },
            ]
        }
    ]
},
    General: {
        title: "General Question",
        image: "images/general.jpg",
        questions: [
            {
                question: "Which is the largest animal in the world?",
                answers: [
                    { text: "Shark", correct: false },
                    { text: "Blue Whale", correct: true },
                    { text: "Elephant", correct: false },
                    { text: "Giraffe", correct: false },
                ]
            },
            {
                question: "Which is the smallest continent in the world?",
                answers: [
                    { text: "Asia", correct: false },
                    { text: "Australia", correct: true },
                    { text: "Africa", correct: false },
                    { text: "Europe", correct: false },
                ]
            },
            {
                question: "Which is the fastest animal in the world?",
                answers: [
                    { text: "Tiger", correct: false },
                    { text: "Cheetah", correct: true },
                    { text: "Lion", correct: false },
                    { text: "Leopard", correct: false },
                ]
            },
            {
                question: "Which is the largest continent in the world?",
                answers: [
                    { text: "Asia", correct: true },
                    { text: "Africa", correct: false },
                    { text: "North America", correct: false },
                    { text: "Australia", correct: false },
                ]
            },
            {
                question: "Which is the longest river in the world?",
                answers: [
                    { text: "Nile", correct: true },
                    { text: "Amazon", correct: false },
                    { text: "Ganga", correct: false },
                    { text: "Yangtze", correct: false },
                ]
            },
            {
                question: "Which planet is known as the Red Planet?",
                answers: [
                    { text: "Venus", correct: false },
                    { text: "Mars", correct: true },
                    { text: "Jupiter", correct: false },
                    { text: "Mercury", correct: false },
                ]
            },
            {
                question: "Which is the largest ocean in the world?",
                answers: [
                    { text: "Indian Ocean", correct: false },
                    { text: "Atlantic Ocean", correct: false },
                    { text: "Pacific Ocean", correct: true },
                    { text: "Arctic Ocean", correct: false },
                ]
            },
            {
                question: "Which country is called the Land of Rising Sun?",
                answers: [
                    { text: "India", correct: false },
                    { text: "Japan", correct: true },
                    { text: "China", correct: false },
                    { text: "Thailand", correct: false },
                ]
            },
            {
                question: "Which gas do plants release during photosynthesis?",
                answers: [
                    { text: "Oxygen", correct: true },
                    { text: "Carbon Dioxide", correct: false },
                    { text: "Nitrogen", correct: false },
                    { text: "Hydrogen", correct: false },
                ]
            },
            {
                question: "Which is the tallest mountain in the world?",
                answers: [
                    { text: "Mount Everest", correct: true },
                    { text: "K2", correct: false },
                    { text: "Kangchenjunga", correct: false },
                    { text: "Mount Fuji", correct: false },
                ]
            },
            {
                question: "Which is the national bird of India?",
                answers: [
                    { text: "Sparrow", correct: false },
                    { text: "Peacock", correct: true },
                    { text: "Parrot", correct: false },
                    { text: "Crow", correct: false },
                ]
            },
            {
                question: "Which is the coldest planet in our solar system?",
                answers: [
                    { text: "Neptune", correct: true },
                    { text: "Uranus", correct: false },
                    { text: "Pluto", correct: false },
                    { text: "Saturn", correct: false },
                ]
            },
            {
                question: "Which is the national animal of India?",
                answers: [
                    { text: "Elephant", correct: false },
                    { text: "Tiger", correct: true },
                    { text: "Lion", correct: false },
                    { text: "Leopard", correct: false },
                ]
            },
            {
                question: "Which is the currency of Japan?",
                answers: [
                    { text: "Yuan", correct: false },
                    { text: "Yen", correct: true },
                    { text: "Won", correct: false },
                    { text: "Dollar", correct: false },
                ]
            },
            {
                question: "Which gas is essential for breathing?",
                answers: [
                    { text: "Oxygen", correct: true },
                    { text: "Carbon Dioxide", correct: false },
                    { text: "Nitrogen", correct: false },
                    { text: "Helium", correct: false },
                ]
            },
            {
                question: "Who invented the light bulb?",
                answers: [
                    { text: "Alexander Graham Bell", correct: false },
                    { text: "Thomas Edison", correct: true },
                    { text: "Nikola Tesla", correct: false },
                    { text: "Isaac Newton", correct: false },
                ]
            },
            {
                question: "Which planet is closest to the Sun?",
                answers: [
                    { text: "Venus", correct: false },
                    { text: "Mercury", correct: true },
                    { text: "Earth", correct: false },
                    { text: "Mars", correct: false },
                ]
            },
            {
                question: "Which is the capital of India?",
                answers: [
                    { text: "Mumbai", correct: false },
                    { text: "Delhi", correct: true },
                    { text: "Kolkata", correct: false },
                    { text: "Chennai", correct: false },
                ]
            },
            {
                question: "Which is the national game of India?",
                answers: [
                    { text: "Cricket", correct: false },
                    { text: "Hockey", correct: true },
                    { text: "Football", correct: false },
                    { text: "Kabaddi", correct: false },
                ]
            },
            {
                question: "Which is the smallest planet in our solar system?",
                answers: [
                    { text: "Mercury", correct: true },
                    { text: "Mars", correct: false },
                    { text: "Venus", correct: false },
                    { text: "Pluto", correct: false },
                ]
            },
            {
                question: "Which organ purifies blood in the human body?",
                answers: [
                    { text: "Heart", correct: false },
                    { text: "Kidney", correct: true },
                    { text: "Lungs", correct: false },
                    { text: "Liver", correct: false },
                ]
            },
            {
                question: "Which is the hottest planet in our solar system?",
                answers: [
                    { text: "Mercury", correct: false },
                    { text: "Venus", correct: true },
                    { text: "Mars", correct: false },
                    { text: "Jupiter", correct: false },
                ]
            },
            {
                question: "Who is known as the Father of Computer?",
                answers: [
                    { text: "Charles Babbage", correct: true },
                    { text: "Alan Turing", correct: false },
                    { text: "Bill Gates", correct: false },
                    { text: "Steve Jobs", correct: false },
                ]
            },
            {
                question: "Which is the national flower of India?",
                answers: [
                    { text: "Lotus", correct: true },
                    { text: "Rose", correct: false },
                    { text: "Sunflower", correct: false },
                    { text: "Jasmine", correct: false },
                ]
            },
            {
                question: "Which planet is called the Earth’s Twin?",
                answers: [
                    { text: "Venus", correct: true },
                    { text: "Mars", correct: false },
                    { text: "Jupiter", correct: false },
                    { text: "Mercury", correct: false },
                ]
            },
            {
                question: "Which is the capital of Japan?",
                answers: [
                    { text: "Tokyo", correct: true },
                    { text: "Beijing", correct: false },
                    { text: "Seoul", correct: false },
                    { text: "Bangkok", correct: false },
                ]
            },
            {
                question: "Which is the smallest bone in the human body?",
                answers: [
                    { text: "Stapes", correct: true },
                    { text: "Femur", correct: false },
                    { text: "Tibia", correct: false },
                    { text: "Fibula", correct: false },
                ]
            },
            {
                question: "Which instrument measures earthquakes?",
                answers: [
                    { text: "Thermometer", correct: false },
                    { text: "Seismograph", correct: true },
                    { text: "Barometer", correct: false },
                    { text: "Hygrometer", correct: false },
                ]
            },
            {
                question: "Which planet has the most moons?",
                answers: [
                    { text: "Jupiter", correct: true },
                    { text: "Saturn", correct: false },
                    { text: "Uranus", correct: false },
                    { text: "Neptune", correct: false },
                ]
            },
            {
                question: "Which is the capital of France?",
                answers: [
                    { text: "Paris", correct: true },
                    { text: "London", correct: false },
                    { text: "Rome", correct: false },
                    { text: "Berlin", correct: false },
                ]
            }
        ]
    },
    english: {
    title: "English",
    image: "images/english.jpg",
    questions: [
        {
            question: "Which of the following is a synonym for 'happy'?",
            answers: [
                { text: "Gloomy", correct: false },
                { text: "Joyful", correct: true },
                { text: "Angry", correct: false },
                { text: "Tired", correct: false },
            ]
        },
        {
            question: "Choose the correct spelling:",
            answers: [
                { text: "Definately", correct: false },
                { text: "Definitely", correct: true },
                { text: "Definitly", correct: false },
                { text: "Definatly", correct: false },
            ]
        },
        {
            question: "What is the past tense of 'run'?",
            answers: [
                { text: "Running", correct: false },
                { text: "Ran", correct: true },
                { text: "Runned", correct: false },
                { text: "Rans", correct: false },
            ]
        },
        {
            question: "What is the plural form of 'child'?",
            answers: [
                { text: "Childs", correct: false },
                { text: "Children", correct: true },
                { text: "Childs'", correct: false },
                { text: "Child'es", correct: false },
            ]
        },
        {
            question: "Identify the noun in the sentence: 'The quick brown fox jumps over the lazy dog.'",
            answers: [
                { text: "Quick", correct: false },
                { text: "Jumps", correct: false },
                { text: "Fox", correct: true },
                { text: "Over", correct: false },
            ]
        },
        {
            question: "Which word means the opposite of 'courage'?",
            answers: [
                { text: "Bravery", correct: false },
                { text: "Fear", correct: true },
                { text: "Strength", correct: false },
                { text: "Confidence", correct: false },
            ]
        },
        {
            question: "Fill in the blank: 'I ______ to the store yesterday.'",
            answers: [
                { text: "go", correct: false },
                { text: "went", correct: true },
                { text: "gone", correct: false },
                { text: "going", correct: false },
            ]
        },
        {
            question: "What is the synonym for 'large'?",
            answers: [
                { text: "Tiny", correct: false },
                { text: "Small", correct: false },
                { text: "Big", correct: true },
                { text: "Narrow", correct: false },
            ]
        },
        {
            question: "Complete the sentence: 'She is a very ______ person.'",
            answers: [
                { text: "interest", correct: false },
                { text: "interested", correct: false },
                { text: "interesting", correct: true },
                { text: "interestingly", correct: false },
            ]
        },
        {
            question: "Identify the adjective in the sentence: 'The red car is fast.'",
            answers: [
                { text: "The", correct: false },
                { text: "Car", correct: false },
                { text: "Fast", correct: true },
                { text: "Is", correct: false },
            ]
        },
        {
            question: "What is the past participle of 'eat'?",
            answers: [
                { text: "Ate", correct: false },
                { text: "Eaten", correct: true },
                { text: "Eating", correct: false },
                { text: "Eats", correct: false },
            ]
        },
        {
            question: "Which of these is a collective noun for a group of lions?",
            answers: [
                { text: "Herd", correct: false },
                { text: "Pride", correct: true },
                { text: "Flock", correct: false },
                { text: "Pack", correct: false },
            ]
        },
        {
            question: "Fill in the blank: 'He swims ______ than me.'",
            answers: [
                { text: "good", correct: false },
                { text: "well", correct: true },
                { text: "better", correct: false },
                { text: "best", correct: false },
            ]
        },
        {
            question: "What is the antonym of 'ancient'?",
            answers: [
                { text: "Old", correct: false },
                { text: "Modern", correct: true },
                { text: "Historic", correct: false },
                { text: "Antique", correct: false },
            ]
        },
        {
            question: "Choose the correct form of the verb: 'She ______ her homework every day.'",
            answers: [
                { text: "do", correct: false },
                { text: "does", correct: true },
                { text: "doing", correct: false },
                { text: "did", correct: false },
            ]
        },
        {
            question: "What is the plural of 'story'?",
            answers: [
                { text: "Storys", correct: false },
                { text: "Stories", correct: true },
                { text: "Storyes", correct: false },
                { text: "Storyes'", correct: false },
            ]
        },
        {
            question: "Identify the verb in the sentence: 'The birds sing in the morning.'",
            answers: [
                { text: "The", correct: false },
                { text: "Birds", correct: false },
                { text: "Sing", correct: true },
                { text: "Morning", correct: false },
            ]
        },
        {
            question: "Fill in the blank: 'The sun shines ______.'",
            answers: [
                { text: "bright", correct: false },
                { text: "brightly", correct: true },
                { text: "brighter", correct: false },
                { text: "brightness", correct: false },
            ]
        },
        {
            question: "What is the superlative form of 'good'?",
            answers: [
                { text: "Gooder", correct: false },
                { text: "Best", correct: true },
                { text: "More good", correct: false },
                { text: "Most good", correct: false },
            ]
        },
        {
            question: "What is the opposite of 'brave'?",
            answers: [
                { text: "Bold", correct: false },
                { text: "Courageous", correct: false },
                { text: "Cowardly", correct: true },
                { text: "Fearless", correct: false },
            ]
        },
        {
            question: "Which of the following is a pronoun?",
            answers: [
                { text: "Table", correct: false },
                { text: "He", correct: true },
                { text: "Quickly", correct: false },
                { text: "Sing", correct: false },
            ]
        },
        {
            question: "Choose the correct form: 'The book is ______ the table.'",
            answers: [
                { text: "in", correct: false },
                { text: "on", correct: true },
                { text: "at", correct: false },
                { text: "with", correct: false },
            ]
        },
        {
            question: "What is a 'homophone'?",
            answers: [
                { text: "Words that sound different but have the same meaning.", correct: false },
                { text: "Words that sound the same but have different meanings.", correct: true },
                { text: "Words with the same spelling but different meanings.", correct: false },
                { text: "Words that are difficult to pronounce.", correct: false },
            ]
        },
        {
            question: "What is the past tense of 'go'?",
            answers: [
                { text: "Goes", correct: false },
                { text: "Gone", correct: false },
                { text: "Went", correct: true },
                { text: "Going", correct: false },
            ]
        },
        {
            question: "Which word is a preposition?",
            answers: [
                { text: "Quickly", correct: false },
                { text: "Jump", correct: false },
                { text: "Between", correct: true },
                { text: "Happily", correct: false },
            ]
        },
        {
            question: "Complete the phrase: 'As cool as a ______.'",
            answers: [
                { text: "fire", correct: false },
                { text: "cucumber", correct: true },
                { text: "rock", correct: false },
                { text: "ice", correct: false },
            ]
        },
        {
            question: "What is the synonym for 'begin'?",
            answers: [
                { text: "End", correct: false },
                { text: "Start", correct: true },
                { text: "Finish", correct: false },
                { text: "Stop", correct: false },
            ]
        },
        {
            question: "Fill in the blank: 'The cat is sitting ______ the mat.'",
            answers: [
                { text: "on", correct: true },
                { text: "at", correct: false },
                { text: "in", correct: false },
                { text: "with", correct: false },
            ]
        },
        {
            question: "What is the comparative form of 'long'?",
            answers: [
                { text: "Longer", correct: true },
                { text: "Longest", correct: false },
                { text: "More long", correct: false },
                { text: "Most long", correct: false },
            ]
        },
        {
            question: "Which word is an adverb?",
            answers: [
                { text: "Beautiful", correct: false },
                { text: "Slowly", correct: true },
                { text: "Sing", correct: false },
                { text: "Tree", correct: false },
            ]
        }
    ]
},
    Computer: {
    title: "Computer",
    image: "images/computer.jpg",
    questions: [
        {
            question: "Who is known as the 'Father of the Computer'?",
            answers: [
                { text: "Alan Turing", correct: false },
                { text: "Charles Babbage", correct: true },
                { text: "Bill Gates", correct: false },
                { text: "Steve Jobs", correct: false },
            ]
        },
        {
            question: "What is the full form of 'CPU'?",
            answers: [
                { text: "Central Power Unit", correct: false },
                { text: "Control Processing Unit", correct: false },
                { text: "Central Processing Unit", correct: true },
                { text: "Computer Personal Unit", correct: false },
            ]
        },
        {
            question: "The first mechanical calculator was developed by which scientist?",
            answers: [
                { text: "Blaise Pascal", correct: true },
                { text: "Konrad Zuse", correct: false },
                { text: "Herman Hollerith", correct: false },
                { text: "John von Neumann", correct: false },
            ]
        },
        {
            question: "What does 'RAM' stand for?",
            answers: [
                { text: "Read Access Memory", correct: false },
                { text: "Random Access Memory", correct: true },
                { text: "Read-only Memory", correct: false },
                { text: "Remote Access Module", correct: false },
            ]
        },
        {
            question: "What is the full form of 'URL'?",
            answers: [
                { text: "Uniform Resource Location", correct: false },
                { text: "Universal Reference Link", correct: false },
                { text: "Uniform Resource Locator", correct: true },
                { text: "Universal Resource Locator", correct: false },
            ]
        },
        {
            question: "Who co-founded Microsoft with Paul Allen?",
            answers: [
                { text: "Steve Jobs", correct: false },
                { text: "Larry Page", correct: false },
                { text: "Bill Gates", correct: true },
                { text: "Mark Zuckerberg", correct: false },
            ]
        },
        {
            question: "What does 'HTTP' stand for?",
            answers: [
                { text: "Hyper Text Transfer Protocol", correct: true },
                { text: "High Technology Transfer Program", correct: false },
                { text: "Hyperlink and Text Protocol", correct: false },
                { text: "Home Text Transfer Protocol", correct: false },
            ]
        },
        {
            question: "What is the function of a 'router' in a computer network?",
            answers: [
                { text: "To store data", correct: false },
                { text: "To display web pages", correct: false },
                { text: "To connect different networks", correct: true },
                { text: "To print documents", correct: false },
            ]
        },
        {
            question: "Which of these is a type of secondary storage device?",
            answers: [
                { text: "CPU", correct: false },
                { text: "RAM", correct: false },
                { text: "Hard Disk Drive", correct: true },
                { text: "Motherboard", correct: false },
            ]
        },
        {
            question: "What is the full form of 'PDF'?",
            answers: [
                { text: "Public Document Format", correct: false },
                { text: "Portable Document Format", correct: true },
                { text: "Printable Data File", correct: false },
                { text: "Program Document File", correct: false },
            ]
        },
        {
            question: "Which company created the 'Android' mobile operating system?",
            answers: [
                { text: "Apple", correct: false },
                { text: "Google", correct: true },
                { text: "Microsoft", correct: false },
                { text: "Samsung", correct: false },
            ]
        },
        {
            question: "What does 'WWW' stand for?",
            answers: [
                { text: "Wide World Web", correct: false },
                { text: "World Wide Web", correct: true },
                { text: "Web World Wide", correct: false },
                { text: "World Web Wide", correct: false },
            ]
        },
        {
            question: "The first computer virus was created in which year?",
            answers: [
                { text: "1971", correct: true },
                { text: "1984", correct: false },
                { text: "1990", correct: false },
                { text: "1995", correct: false },
            ]
        },
        {
            question: "What does 'ISP' stand for?",
            answers: [
                { text: "Internal Service Provider", correct: false },
                { text: "Internet Service Provider", correct: true },
                { text: "International Server Program", correct: false },
                { text: "Internet Security Protocol", correct: false },
            ]
        },
        {
            question: "Which of these is an input device?",
            answers: [
                { text: "Monitor", correct: false },
                { text: "Printer", correct: false },
                { text: "Speaker", correct: false },
                { text: "Keyboard", correct: true },
            ]
        },
        {
            question: "What is the full form of 'HTML'?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "High Tech Markup Language", correct: false },
                { text: "Hyperlink and Text Markup Language", correct: false },
                { text: "Home Tool Markup Language", correct: false },
            ]
        },
        {
            question: "The 'ENIAC' was the first general-purpose electronic computer. What does it stand for?",
            answers: [
                { text: "Electronic Numerical Integrator and Computer", correct: true },
                { text: "Electronic Network Integration and Calculation", correct: false },
                { text: "Electrical Numerical Instruction and Automation", correct: false },
                { text: "Electronic Numbering Interface and Calculation", correct: false },
            ]
        },
        {
            question: "What does 'VPN' stand for?",
            answers: [
                { text: "Virtual Private Network", correct: true },
                { text: "Verified Public Network", correct: false },
                { text: "Varying Protocol Network", correct: false },
                { text: "Virtual Personal Number", correct: false },
            ]
        },
        {
            question: "Which company is known for creating the 'Macintosh' computer?",
            answers: [
                { text: "Microsoft", correct: false },
                { text: "Dell", correct: false },
                { text: "Apple", correct: true },
                { text: "IBM", correct: false },
            ]
        },
        {
            question: "What does 'ROM' stand for?",
            answers: [
                { text: "Random Only Memory", correct: false },
                { text: "Read-only Memory", correct: true },
                { text: "Running On Mainframe", correct: false },
                { text: "Real-time Operating Module", correct: false },
            ]
        },
        {
            question: "A 'firewall' is used for which purpose?",
            answers: [
                { text: "To speed up the internet", correct: false },
                { text: "To protect a computer from unauthorized access", correct: true },
                { text: "To clean the hard drive", correct: false },
                { text: "To install software", correct: false },
            ]
        },
        {
            question: "What does 'LAN' stand for?",
            answers: [
                { text: "Local Area Network", correct: true },
                { text: "Large Access Network", correct: false },
                { text: "Long-range Area Node", correct: false },
                { text: "Limited Access Network", correct: false },
            ]
        },
        {
            question: "Who is credited with inventing the first 'mouse' for computers?",
            answers: [
                { text: "Steve Wozniak", correct: false },
                { text: "Bill Gates", correct: false },
                { text: "Douglas Engelbart", correct: true },
                { text: "Paul Allen", correct: false },
            ]
        },
        {
            question: "What does 'GUI' stand for?",
            answers: [
                { text: "Global User Interface", correct: false },
                { text: "General Utility Interface", correct: false },
                { text: "Graphic User Interface", correct: true },
                { text: "Graphical User Interaction", correct: false },
            ]
        },
        {
            question: "Which of these is a programming language?",
            answers: [
                { text: "HTTP", correct: false },
                { text: "HTML", correct: false },
                { text: "Python", correct: true },
                { text: "JPEG", correct: false },
            ]
        },
        {
            question: "What does 'USB' stand for?",
            answers: [
                { text: "Universal Serial Bus", correct: true },
                { text: "Unified System Bus", correct: false },
                { text: "Universal Serial Board", correct: false },
                { text: "Upgraded System Bus", correct: false },
            ]
        },
        {
            question: "What is an 'operating system'?",
            answers: [
                { text: "A computer program for games", correct: false },
                { text: "Software that manages all the hardware and software resources of a computer", correct: true },
                { text: "A physical part of the computer", correct: false },
                { text: "A type of web browser", correct: false },
            ]
        },
        {
            question: "What does 'SQL' stand for?",
            answers: [
                { text: "Sequential Query Language", correct: false },
                { text: "Structured Query Language", correct: true },
                { text: "Simple Question Language", correct: false },
                { text: "System Query Locator", correct: false },
            ]
        },
        {
            question: "The first computer hard disk drive was introduced by which company?",
            answers: [
                { text: "IBM", correct: true },
                { text: "Apple", correct: false },
                { text: "Seagate", correct: false },
                { text: "Western Digital", correct: false },
            ]
        },
        {
            question: "What is the full form of 'CD-ROM'?",
            answers: [
                { text: "Compact Disc-Read Only Memory", correct: true },
                { text: "Computer Drive-Read Once Memory", correct: false },
                { text: "Central Data-Read Only Module", correct: false },
                { text: "Compact Disc-Running Only Memory", correct: false },
            ]
        }
    ]
}
};

// --- Screen Management ---
function showScreen(screen) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

// --- Dynamic Category Card Generation and Slider Logic ---
function createCategoryCards() {
    categorySlider.innerHTML = "";
    for (const key in quizData) {
        if (quizData.hasOwnProperty(key)) {
            const category = quizData[key];
            const card = document.createElement("div");
            card.classList.add("category-card");
            card.innerHTML = `
                <img src="${category.image}" alt="${category.title}">
                <h3>${category.title}</h3>
            `;
            card.dataset.category = key;
            card.addEventListener("click", () => {
                selectedCategory = key;
                showScreen(userDetailsScreen);
            });
            categorySlider.appendChild(card);
        }
    }
}

// Slider functionality
function slide(direction) {
    const scrollAmount = 300; // Adjust as needed
    if (direction === 'next') {
        categorySlider.scrollLeft += scrollAmount;
    } else {
        categorySlider.scrollLeft -= scrollAmount;
    }
}

prevBtn.addEventListener('click', () => slide('prev'));
nextBtn.addEventListener('click', () => slide('next'));

// --- Quiz Logic ---
function startQuiz() {
    questions = quizData[selectedCategory].questions;
    if (questions.length === 0) {
        alert("No questions available for this category yet!");
        showScreen(homeScreen);
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    attemptCount++;

    userInfoDisplay.innerText = `Name: ${usernameInput.value}, Number: ${usernumberInput.value}, Category: ${quizData[selectedCategory].title}`;
    attemptInfoDisplay.innerText = `Attempt: ${attemptCount}`;

    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerText = ans.text;
        button.classList.add("btn");
        button.dataset.correct = ans.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextQuestionBtn.style.display = "none";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    nextQuestionBtn.style.display = "block";
}

function showScore() {
    resetState();
    correctAnswersDisplay.innerText = score;
    incorrectAnswersDisplay.innerText = questions.length - score;
    finalScoreDisplay.innerText = score;
    totalQuestionsDisplay.innerText = questions.length;
    totalQuestionsDisplay2.innerText = questions.length;

    showScreen(scoreScreen);
}

// --- Event Listeners ---
startQuizBtn.addEventListener("click", () => {
    if (usernameInput.value && usernumberInput.value) {
        startQuiz();
    } else {
        alert("Please enter your name and number.");
    }
});

backToHomeBtn.addEventListener("click", () => {
    showScreen(homeScreen);
});

nextQuestionBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

reattemptBtn.addEventListener("click", () => {
    startQuiz();
});

goHomeBtn.addEventListener("click", () => {
    usernameInput.value = "";
    usernumberInput.value = "";
    attemptCount = 0;
    showScreen(homeScreen);
});

// Initial setup
createCategoryCards();
showScreen(homeScreen);



