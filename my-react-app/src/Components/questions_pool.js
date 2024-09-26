// questions_pool.js
const questions_pool = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest planet in the solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "What is the speed of light?",
      options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
      answer: "300,000 km/s",
    },
    {
      question: "Which element is known by the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Oganesson", "Oxonium"],
      answer: "Oxygen",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Saturn", "Venus"],
      answer: "Mars",
    },
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      answer: "France",
    },
    {
      question: "What is the capital city of Japan?",
      options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
      answer: "Tokyo",
    },
    {
      question: "Which scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: "Albert Einstein",
    },
    {
      question: "Which metal is liquid at room temperature?",
      options: ["Mercury", "Gold", "Silver", "Aluminum"],
      answer: "Mercury",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1905", "1923", "1898"],
      answer: "1912",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: "Vatican City",
    },
    {
      question: "Who invented the telephone?",
      options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
      answer: "Alexander Graham Bell",
    },
    {
      question: "Which country is the largest by land area?",
      options: ["China", "Russia", "Canada", "United States"],
      answer: "Russia",
    },
    {
      question: "Which author wrote '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
      answer: "George Orwell",
    },
    {
      question: "What is the chemical formula for water?",
      options: ["H2O", "O2", "CO2", "H2SO4"],
      answer: "H2O",
    },
    {
      question: "Who was the first man to walk on the moon?",
      options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
      answer: "Neil Armstrong",
    },
    {
      question: "Which country is home to the Great Barrier Reef?",
      options: ["Australia", "South Africa", "Brazil", "Indonesia"],
      answer: "Australia",
    },
    {
      question: "In which year did World War I begin?",
      options: ["1914", "1939", "1918", "1945"],
      answer: "1914",
    },
    {
      question: "Which language is the most spoken worldwide?",
      options: ["English", "Spanish", "Chinese", "Hindi"],
      answer: "Chinese",
    },
    {
      question: "Who discovered penicillin?",
      options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
      answer: "Alexander Fleming",
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
      answer: "Hydrogen",
    },
    {
      question: "Which famous scientist introduced the concept of natural selection?",
      options: ["Charles Darwin", "Gregor Mendel", "Alfred Wegener", "Albert Einstein"],
      answer: "Charles Darwin",
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Antarctic Desert", "Kalahari"],
      answer: "Antarctic Desert",
    },
    {
      question: "Who composed the Four Seasons?",
      options: ["Johann Sebastian Bach", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Antonio Vivaldi"],
      answer: "Antonio Vivaldi",
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Earth", "Mercury", "Venus", "Mars"],
      answer: "Mercury",
    },
    {
      question: "In what year did humans first land on the moon?",
      options: ["1969", "1965", "1972", "1980"],
      answer: "1969",
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Earth"],
        answer: "Mercury",
      },
      {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington",
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        answer: "Japan",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Granite"],
        answer: "Diamond",
      },
      {
        question: "Who discovered gravity after seeing a falling apple?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
        answer: "Isaac Newton",
      },
      {
        question: "In what year did World War II end?",
        options: ["1940", "1945", "1939", "1950"],
        answer: "1945",
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: "Blue Whale",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        answer: "Au",
      },
      {
        question: "Which organ in the human body is responsible for pumping blood?",
        options: ["Brain", "Heart", "Lungs", "Liver"],
        answer: "Heart",
      },
      {
        question: "In what year did humans first land on Mars?",
        options: ["2000", "1969", "2025", "Humans have not landed on Mars"],
        answer: "Humans have not landed on Mars",
      },
      {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Michelangelo", "Raphael"],
        answer: "Michelangelo",
      },
      {
        question: "Which country is the largest producer of coffee in the world?",
        options: ["Vietnam", "Colombia", "Ethiopia", "Brazil"],
        answer: "Brazil",
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "120°C", "150°C"],
        answer: "100°C",
      },
      {
        question: "In what year did the Berlin Wall fall?",
        options: ["1961", "1979", "1989", "1991"],
        answer: "1989",
      },
      {
        question: "Which element is commonly found in pencils?",
        options: ["Lead", "Graphite", "Charcoal", "Magnesium"],
        answer: "Graphite",
      },
      {
        question: "Which continent is the Sahara Desert located on?",
        options: ["South America", "Africa", "Australia", "Asia"],
        answer: "Africa",
      },
      {
        question: "Which company is known for the iPhone?",
        options: ["Google", "Samsung", "Microsoft", "Apple"],
        answer: "Apple",
      },
      {
        question: "Who wrote the novel 'Pride and Prejudice'?",
        options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Mary Shelley"],
        answer: "Jane Austen",
      },
      {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["Russia", "China", "Brazil", "United Kingdom"],
        answer: "Brazil",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Won", "Yen", "Rupee", "Dollar"],
        answer: "Yen",
      },
      {
        question: "Who is known as the 'Father of Computers'?",
        options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Steve Jobs"],
        answer: "Charles Babbage",
      },
      {
        question: "Which country is home to the kangaroo?",
        options: ["South Africa", "Australia", "New Zealand", "India"],
        answer: "Australia",
      },
      {
        question: "In which year did the first manned moon landing occur?",
        options: ["1965", "1969", "1972", "1980"],
        answer: "1969",
      },
      {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa",
      },
      {
        question: "Which organ is responsible for filtering blood in the human body?",
        options: ["Heart", "Lungs", "Liver", "Kidneys"],
        answer: "Kidneys",
      },
      {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
        answer: "Margaret Thatcher",
      },
      {
        question: "Which planet in our solar system is known for its rings?",
        options: ["Mars", "Saturn", "Venus", "Jupiter"],
        answer: "Saturn",
      },
      {
        question: "Which country is known for inventing pizza?",
        options: ["France", "USA", "Italy", "Greece"],
        answer: "Italy",
      },
      {
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Ir", "I", "In"],
        answer: "Fe",
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["F. Scott Fitzgerald", "Harper Lee", "Ernest Hemingway", "Mark Twain"],
        answer: "Harper Lee",
      },
      {
        question: "What is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Humerus", "Radius"],
        answer: "Stapes",
      },
      {
        question: "Which U.S. state is known as the 'Sunshine State'?",
        options: ["California", "Florida", "Hawaii", "Texas"],
        answer: "Florida",
      },
      {
        question: "Who was the first person to win two Nobel Prizes?",
        options: ["Albert Einstein", "Marie Curie", "Isaac Newton", "James Watson"],
        answer: "Marie Curie",
      },
      {
        question: "Which country is famous for the Great Wall?",
        options: ["India", "China", "Japan", "Mongolia"],
        answer: "China",
      },
      {
        question: "What is the longest river in South America?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Amazon River",
      },
      {
        question: "Which U.S. President delivered the Gettysburg Address?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt"],
        answer: "Abraham Lincoln",
      },
      {
        question: "Which language is primarily spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Portuguese",
      },
      {
        question: "What is the currency of the United Kingdom?",
        options: ["Dollar", "Euro", "Yen", "Pound Sterling"],
        answer: "Pound Sterling",
      },
      {
        question: "Who was the lead singer of Queen?",
        options: ["David Bowie", "Freddie Mercury", "Mick Jagger", "Elton John"],
        answer: "Freddie Mercury",
      },
      {
        question: "What is the capital of South Korea?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        answer: "Seoul",
      },
      {
        question: "Who directed the movie 'Titanic'?",
        options: ["Steven Spielberg", "Martin Scorsese", "James Cameron", "Quentin Tarantino"],
        answer: "James Cameron",
      },
      {
        question: "Which U.S. city is known for hosting the annual Mardi Gras celebration?",
        options: ["Los Angeles", "Miami", "New Orleans", "Chicago"],
        answer: "New Orleans",
      },
      {
        question: "Which element is necessary for the process of photosynthesis?",
        options: ["Carbon", "Nitrogen", "Hydrogen", "Chlorophyll"],
        answer: "Chlorophyll",
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Mount Kilimanjaro"],
        answer: "Mount Everest",
      },
      {
        question: "In which country was the first modern Olympic Games held?",
        options: ["France", "Greece", "USA", "United Kingdom"],
        answer: "Greece",
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Cell membrane"],
        answer: "Mitochondria",
      },
      {
        question: "Which book is known as the 'holy book' of Islam?",
        options: ["Torah", "Bible", "Quran", "Bhagavad Gita"],
        answer: "Quran",
      },
      {
        question: "Who invented the World Wide Web?",
        options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        answer: "Tim Berners-Lee",
      },
      {
        question: "In which year was the first Harry Potter book published?",
        options: ["1995", "1997", "1999", "2001"],
        answer: "1997",
      },
      {
        question: "Which country is the leading producer of oil in the world?",
        options: ["Russia", "United States", "Saudi Arabia", "China"],
        answer: "United States",
      },
      {
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Lead", "Gold", "Iron"],
        answer: "Mercury",
      }
  ];
  
  export default questions_pool;
  