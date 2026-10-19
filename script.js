// The bank stores the correct option's original index; displayed options are shuffled per quiz.
const QUESTION_BANK = [
  { id: "html-01", category: "HTML", question: "Which element creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1, explanation: "The anchor element creates hyperlinks, with href specifying the destination." },
  { id: "html-02", category: "HTML", question: "Which element is the top-level heading on a page?", options: ["<head>", "<h6>", "<h1>", "<header>"], answer: 2, explanation: "The h1 element represents the highest-level heading." },
  { id: "html-03", category: "HTML", question: "Which attribute provides alternative text for an image?", options: ["title", "src", "alt", "label"], answer: 2, explanation: "The alt attribute describes an image for assistive technology and when it cannot load." },
  { id: "html-04", category: "HTML", question: "Which element represents a paragraph?", options: ["<p>", "<para>", "<text>", "<pg>"], answer: 0, explanation: "The p element represents a paragraph of text." },
  { id: "html-05", category: "HTML", question: "Which element is used to create an unordered list?", options: ["<ol>", "<li>", "<list>", "<ul>"], answer: 3, explanation: "The ul element creates a bulleted, unordered list." },
  { id: "html-06", category: "HTML", question: "Which element contains the page's visible main content?", options: ["<main>", "<meta>", "<style>", "<title>"], answer: 0, explanation: "The main element identifies the primary content of the document." },
  { id: "html-07", category: "HTML", question: "Which attribute specifies the destination of a link?", options: ["src", "href", "action", "target"], answer: 1, explanation: "The href attribute provides a hyperlink's destination URL." },
  { id: "html-08", category: "HTML", question: "Which element embeds an image in a page?", options: ["<picture-src>", "<image>", "<img>", "<photo>"], answer: 2, explanation: "The img element embeds an image and usually uses src and alt attributes." },
  { id: "html-09", category: "HTML", question: "Which declaration tells the browser to use modern HTML?", options: ["<html5>", "<!DOCTYPE html>", "<doctype=5>", "<version html='5'>"], answer: 1, explanation: "The HTML doctype declaration tells browsers to render the document in standards mode." },
  { id: "html-10", category: "HTML", question: "Which element gives a table column header semantic meaning?", options: ["<td>", "<tr>", "<th>", "<thead-cell>"], answer: 2, explanation: "The th element marks a header cell in a table." },
  { id: "html-11", category: "HTML", question: "Which attribute connects a label to a form input by its id?", options: ["for", "name", "value", "placeholder"], answer: 0, explanation: "A label's for attribute should match the associated input's id." },
  { id: "html-12", category: "HTML", question: "Which input type provides a checkbox?", options: ["type='tick'", "type='check'", "type='radio'", "type='checkbox'"], answer: 3, explanation: "Use input type checkbox for an independently selectable checkbox." },
  { id: "html-13", category: "HTML", question: "Which semantic element is intended for navigation links?", options: ["<nav>", "<aside>", "<summary>", "<address>"], answer: 0, explanation: "The nav element identifies a section containing navigation links." },
  { id: "html-14", category: "HTML", question: "Which element sets the text shown in a browser tab?", options: ["<caption>", "<title>", "<header>", "<label>"], answer: 1, explanation: "The title element supplies the document title displayed in the browser tab." },
  { id: "html-15", category: "HTML", question: "Which element creates a numbered list?", options: ["<ul>", "<dl>", "<ol>", "<li>"], answer: 2, explanation: "The ol element represents an ordered, typically numbered list." },
  { id: "html-16", category: "HTML", question: "Which attribute makes a form control mandatory before submission?", options: ["needed", "validate", "required", "must"], answer: 2, explanation: "The boolean required attribute enables built-in form validation." },
  { id: "html-17", category: "HTML", question: "Which element is used to play video in a browser?", options: ["<media>", "<movie>", "<video>", "<play>"], answer: 2, explanation: "The video element embeds video content and can provide browser playback controls." },
  { id: "html-18", category: "HTML", question: "Which element groups related controls in a form?", options: ["<fieldset>", "<formgroup>", "<section>", "<legend>"], answer: 0, explanation: "Fieldset groups related form controls; legend can provide a caption for the group." },

  { id: "css-01", category: "CSS", question: "Which property changes the text colour?", options: ["font-style", "text-color", "color", "background-color"], answer: 2, explanation: "The color property sets an element's foreground colour, including its text." },
  { id: "css-02", category: "CSS", question: "Which selector targets an element with id='banner'?", options: [".banner", "#banner", "banner()", "*banner"], answer: 1, explanation: "The # prefix selects an element by its id." },
  { id: "css-03", category: "CSS", question: "Which selector targets elements with class='card'?", options: ["#card", "card", ".card", "@card"], answer: 2, explanation: "The dot prefix selects elements by class." },
  { id: "css-04", category: "CSS", question: "Which property adds space inside an element's border?", options: ["margin", "padding", "outline", "border-spacing"], answer: 1, explanation: "Padding is the space between an element's content and its border." },
  { id: "css-05", category: "CSS", question: "Which property adds space outside an element's border?", options: ["padding", "spacing", "margin", "inset"], answer: 2, explanation: "Margin creates space outside an element's border." },
  { id: "css-06", category: "CSS", question: "Which declaration turns an element into a flex container?", options: ["display: flex", "position: flex", "layout: flex", "flex: display"], answer: 0, explanation: "Setting display to flex enables the Flexbox layout for the element's children." },
  { id: "css-07", category: "CSS", question: "Which property sets the size of text?", options: ["font-size", "text-weight", "font-style", "line-size"], answer: 0, explanation: "The font-size property controls the size of text." },
  { id: "css-08", category: "CSS", question: "Which pseudo-class applies styles while a pointer is over a link?", options: [":focus", "::before", ":hover", ":visited"], answer: 2, explanation: "The :hover pseudo-class applies while the pointer hovers over an element." },
  { id: "css-09", category: "CSS", question: "Which property rounds the corners of a box?", options: ["corner-style", "border-radius", "border-curve", "round"], answer: 1, explanation: "The border-radius property rounds an element's corners." },
  { id: "css-10", category: "CSS", question: "Which unit is relative to the root element's font size?", options: ["px", "vw", "rem", "cm"], answer: 2, explanation: "A rem unit is relative to the font size of the root element." },
  { id: "css-11", category: "CSS", question: "Which property controls the stacking order of positioned elements?", options: ["layer", "z-index", "stack-order", "depth"], answer: 1, explanation: "The z-index property controls stacking order within a stacking context." },
  { id: "css-12", category: "CSS", question: "Which property aligns flex items along the main axis?", options: ["align-items", "justify-content", "text-align", "place-self"], answer: 1, explanation: "justify-content distributes flex items along the main axis." },
  { id: "css-13", category: "CSS", question: "Which at-rule defines responsive styles based on viewport conditions?", options: ["@screen", "@responsive", "@media", "@viewport-style"], answer: 2, explanation: "A media query applies CSS when its media conditions, such as viewport width, match." },
  { id: "css-14", category: "CSS", question: "Which property controls the space between lines of text?", options: ["line-height", "letter-spacing", "word-space", "text-indent"], answer: 0, explanation: "The line-height property controls the height of a line box." },
  { id: "css-15", category: "CSS", question: "Which declaration creates a two-column CSS Grid?", options: ["grid-columns: 2", "grid-template-columns: 1fr 1fr", "display: columns", "columns: grid(2)"], answer: 1, explanation: "grid-template-columns defines the grid tracks; two 1fr tracks share available space equally." },
  { id: "css-16", category: "CSS", question: "Which property changes what happens when content exceeds a box?", options: ["overflow", "clip-text", "content-fit", "excess"], answer: 0, explanation: "The overflow property controls content that does not fit inside an element's box." },
  { id: "css-17", category: "CSS", question: "Which keyword hides an element and removes its layout space?", options: ["visibility: hidden", "display: none", "opacity: 0", "position: hidden"], answer: 1, explanation: "display: none removes the element from layout and hides it." },
  { id: "css-18", category: "CSS", question: "Which property adds a shadow around a box?", options: ["text-shadow", "box-shadow", "element-shadow", "filter-shadow"], answer: 1, explanation: "The box-shadow property adds a shadow effect around an element's box." },

  { id: "js-01", category: "JavaScript", question: "Which keyword declares a block-scoped variable that can be reassigned?", options: ["const", "let", "static", "fixed"], answer: 1, explanation: "let declares a block-scoped variable that can be reassigned." },
  { id: "js-02", category: "JavaScript", question: "Which array method returns a new array by transforming each item?", options: [".filter()", ".forEach()", ".map()", ".find()"], answer: 2, explanation: "map calls a function for each item and returns a new array of results." },
  { id: "js-03", category: "JavaScript", question: "Which value represents an intentional absence of an object value?", options: ["undefined", "null", "NaN", "false"], answer: 1, explanation: "null is commonly used to represent an intentional absence of a value." },
  { id: "js-04", category: "JavaScript", question: "Which operator checks equality without type conversion?", options: ["==", "=", "===", "!="], answer: 2, explanation: "The strict equality operator === compares value and type without coercion." },
  { id: "js-05", category: "JavaScript", question: "How do you write a single-line comment in JavaScript?", options: ["<!-- comment -->", "// comment", "## comment", "** comment"], answer: 1, explanation: "Two forward slashes begin a single-line JavaScript comment." },
  { id: "js-06", category: "JavaScript", question: "Which method adds one or more items to the end of an array?", options: [".push()", ".pop()", ".shift()", ".join()"], answer: 0, explanation: "push adds items to the end of an array and returns its new length." },
  { id: "js-07", category: "JavaScript", question: "Which keyword declares a binding that cannot be reassigned?", options: ["var", "let", "const", "static"], answer: 2, explanation: "const prevents reassignment of the binding after initialization." },
  { id: "js-08", category: "JavaScript", question: "Which method selects the first matching element in the DOM?", options: ["document.querySelector()", "document.select()", "document.getNode()", "document.findElement()"], answer: 0, explanation: "querySelector returns the first element matching a CSS selector." },
  { id: "js-09", category: "JavaScript", question: "Which event commonly fires when a user activates a button?", options: ["hover", "press", "click", "changePage"], answer: 2, explanation: "The click event fires when a user clicks or otherwise activates an element." },
  { id: "js-10", category: "JavaScript", question: "What does JSON.stringify() do?", options: ["Parses text into an object", "Converts a JavaScript value to a JSON string", "Copies an object to the DOM", "Checks whether a value is a number"], answer: 1, explanation: "JSON.stringify serializes a JavaScript value into a JSON-formatted string." },
  { id: "js-11", category: "JavaScript", question: "Which loop is designed to iterate over iterable values such as array items?", options: ["for...of", "for...in only", "repeat...until", "loop...each"], answer: 0, explanation: "for...of iterates over values from an iterable such as an array or string." },
  { id: "js-12", category: "JavaScript", question: "What is the result of typeof 'hello'?", options: ["text", "string", "character", "object"], answer: 1, explanation: "typeof returns the string 'string' for a string value." },
  { id: "js-13", category: "JavaScript", question: "Which array method keeps items that pass a test?", options: [".map()", ".reduce()", ".filter()", ".slice()"], answer: 2, explanation: "filter returns a new array containing items for which the callback returns true." },
  { id: "js-14", category: "JavaScript", question: "Which symbol is used for a template literal?", options: ["Single quote", "Double quote", "Backtick", "Backslash"], answer: 2, explanation: "Template literals use backticks and can interpolate expressions with ${...}." },
  { id: "js-15", category: "JavaScript", question: "What does addEventListener() do?", options: ["Registers a function to respond to an event", "Creates a new HTML element", "Removes a CSS class", "Pauses the browser"], answer: 0, explanation: "addEventListener registers a callback to run when a specified event occurs." },
  { id: "js-16", category: "JavaScript", question: "Which statement exits a function and can provide a value to its caller?", options: ["break", "return", "continue", "yield"], answer: 1, explanation: "return ends a function call and optionally supplies its result." },
  { id: "js-17", category: "JavaScript", question: "What does Array.isArray(value) check?", options: ["Whether a value is an array", "Whether an array is empty", "Whether an item exists", "Whether two arrays match"], answer: 0, explanation: "Array.isArray returns true when the supplied value is an array." },
  { id: "js-18", category: "JavaScript", question: "Which browser storage API stores key-value pairs beyond a page reload?", options: ["session variables", "localStorage", "console.log", "window.name only"], answer: 1, explanation: "localStorage persists string key-value pairs across page reloads and browser sessions." },

  { id: "cs-01", category: "Computer Science", question: "Which component is often called the brain of a computer?", options: ["Hard disk", "CPU", "Power supply", "Monitor"], answer: 1, explanation: "The CPU executes instructions and processes data." },
  { id: "cs-02", category: "Computer Science", question: "What is an algorithm?", options: ["A computer screen", "A step-by-step procedure for solving a problem", "A type of memory chip", "A programming language only"], answer: 1, explanation: "An algorithm is a finite sequence of steps for solving a problem or performing a task." },
  { id: "cs-03", category: "Computer Science", question: "What is the binary representation of decimal 2?", options: ["10", "11", "01", "100"], answer: 0, explanation: "In base 2, decimal 2 is written as 10." },
  { id: "cs-04", category: "Computer Science", question: "Which data structure follows Last In, First Out (LIFO)?", options: ["Queue", "Stack", "Tree", "Graph"], answer: 1, explanation: "A stack removes the most recently added item first." },
  { id: "cs-05", category: "Computer Science", question: "Which data structure follows First In, First Out (FIFO)?", options: ["Stack", "Queue", "Heap", "Hash table"], answer: 1, explanation: "A queue removes items in the same order they were added." },
  { id: "cs-06", category: "Computer Science", question: "What is a bug in a program?", options: ["An error or flaw that causes incorrect behaviour", "A computer accessory", "A type of keyboard", "A backup copy"], answer: 0, explanation: "A bug is a defect in software that can lead to incorrect or unexpected results." },
  { id: "cs-07", category: "Computer Science", question: "What is an operating system's main role?", options: ["Manage hardware and provide services for programs", "Write all documents automatically", "Replace the CPU", "Guarantee internet access"], answer: 0, explanation: "An operating system manages computer resources and provides a platform for applications." },
  { id: "cs-08", category: "Computer Science", question: "What is open-source software?", options: ["Software whose source code is available under a licence", "Software that only works online", "Software with no user interface", "Software that cannot be changed"], answer: 0, explanation: "Open-source software makes its source code available under terms that allow use and modification." },
  { id: "cs-09", category: "Computer Science", question: "What does a compiler generally do?", options: ["Translates source code into another form, often machine code", "Cleans a keyboard", "Connects a computer to Wi-Fi", "Draws diagrams only"], answer: 0, explanation: "A compiler translates a program from one language or representation into another." },
  { id: "cs-10", category: "Computer Science", question: "What does debugging mean?", options: ["Finding and fixing errors in a program", "Making a screen brighter", "Deleting every file", "Installing a printer"], answer: 0, explanation: "Debugging is the process of identifying, understanding, and correcting software defects." },
  { id: "cs-11", category: "Computer Science", question: "In a relational database, what is a row commonly called?", options: ["Record", "Attribute", "Query", "Schema"], answer: 0, explanation: "A row represents one record, while a column represents an attribute or field." },
  { id: "cs-12", category: "Computer Science", question: "What is encryption used for?", options: ["Making data unreadable without the right key", "Increasing screen resolution", "Compressing every file losslessly", "Cooling the processor"], answer: 0, explanation: "Encryption transforms data so it can be read only by someone with the appropriate key." },
  { id: "cs-13", category: "Computer Science", question: "What is a computer network?", options: ["Connected devices that can communicate and share resources", "A single offline document", "A type of monitor", "A programming error"], answer: 0, explanation: "A network links devices so they can exchange data and share resources." },
  { id: "cs-14", category: "Computer Science", question: "Which number system uses only 0 and 1?", options: ["Decimal", "Binary", "Octal", "Roman"], answer: 1, explanation: "Binary is a base-2 number system using the digits 0 and 1." },
  { id: "cs-15", category: "Computer Science", question: "What is an IP address used to identify?", options: ["A device or network interface on an IP network", "A file's font", "A keyboard layout", "A battery type"], answer: 0, explanation: "An IP address identifies a network interface for communication using the Internet Protocol." },
  { id: "cs-16", category: "Computer Science", question: "What is a database?", options: ["An organized collection of data", "A type of computer cable", "A display setting", "A web browser tab"], answer: 0, explanation: "A database stores organized data so it can be accessed and managed." },
  { id: "cs-17", category: "Computer Science", question: "What is artificial intelligence (AI) broadly concerned with?", options: ["Machines performing tasks associated with human intelligence", "Only faster internet cables", "Replacing all computer hardware", "Displaying images on a screen"], answer: 0, explanation: "AI studies systems that perform tasks such as reasoning, learning, or perception." },
  { id: "cs-18", category: "Computer Science", question: "What does a flowchart use to represent a process?", options: ["Symbols connected by arrows", "Only paragraphs", "Audio signals", "Database rows exclusively"], answer: 0, explanation: "Flowcharts use standard symbols and connecting arrows to show steps and decisions." },

  { id: "fund-01", category: "Computer Fundamentals", question: "What does RAM primarily provide to a computer?", options: ["Long-term storage after shutdown", "Temporary working memory for active programs", "An internet connection", "A permanent record of keystrokes"], answer: 1, explanation: "RAM temporarily holds data the CPU needs while programs are running; it is volatile memory." },
  { id: "fund-02", category: "Computer Fundamentals", question: "Which device is primarily used to enter text into a computer?", options: ["Monitor", "Keyboard", "Speaker", "Projector"], answer: 1, explanation: "A keyboard is an input device used to enter text and commands." },
  { id: "fund-03", category: "Computer Fundamentals", question: "Which of these is an output device?", options: ["Mouse", "Microphone", "Monitor", "Scanner"], answer: 2, explanation: "A monitor displays visual output from a computer." },
  { id: "fund-04", category: "Computer Fundamentals", question: "Which device is commonly used for long-term file storage?", options: ["RAM", "SSD", "CPU cache", "Register"], answer: 1, explanation: "An SSD is non-volatile storage that retains files when power is off." },
  { id: "fund-05", category: "Computer Fundamentals", question: "What does USB commonly allow you to do?", options: ["Connect peripherals and transfer data", "Increase the room temperature", "Replace an operating system", "Create a password automatically"], answer: 0, explanation: "USB is a standard interface for connecting devices and transferring data or power." },
  { id: "fund-06", category: "Computer Fundamentals", question: "Which unit is commonly used to measure processor clock frequency?", options: ["Hertz", "Litres", "Pixels", "Volts per metre"], answer: 0, explanation: "Processor clock frequency is measured in hertz, often gigahertz." },
  { id: "fund-07", category: "Computer Fundamentals", question: "What is the purpose of a computer backup?", options: ["To keep a recoverable copy of data", "To make the screen brighter", "To erase files permanently", "To speed up typing"], answer: 0, explanation: "A backup provides a separate copy that can help restore data after loss or damage." },
  { id: "fund-08", category: "Computer Fundamentals", question: "Which of these is an example of an input device?", options: ["Printer", "Speaker", "Mouse", "Monitor"], answer: 2, explanation: "A mouse sends user input, such as pointer movement and clicks, to the computer." },
  { id: "fund-09", category: "Computer Fundamentals", question: "What does a printer produce?", options: ["Hard-copy output", "Temporary RAM", "Network addresses", "Source code automatically"], answer: 0, explanation: "A printer produces physical output on paper or another medium." },
  { id: "fund-10", category: "Computer Fundamentals", question: "What is the main function of a computer's power supply?", options: ["Convert and distribute electrical power to components", "Store photographs", "Run web searches", "Cool the room"], answer: 0, explanation: "A power supply converts incoming electrical power into suitable outputs for computer components." },
  { id: "fund-11", category: "Computer Fundamentals", question: "What does a file extension such as .jpg usually indicate?", options: ["The file type or format", "The owner's password", "The screen size", "The network speed"], answer: 0, explanation: "A file extension often indicates the format or type of the file." },
  { id: "fund-12", category: "Computer Fundamentals", question: "Which is an example of an operating system?", options: ["Windows", "HTML", "USB", "JPEG"], answer: 0, explanation: "Windows is an operating system; HTML is a markup language and JPEG is an image format." },
  { id: "fund-13", category: "Computer Fundamentals", question: "What does a web browser help a user do?", options: ["Access and interact with websites", "Print electricity", "Replace the CPU", "Create computer memory"], answer: 0, explanation: "A web browser requests and displays web pages and web applications." },
  { id: "fund-14", category: "Computer Fundamentals", question: "Which unit is larger?", options: ["Kilobyte", "Megabyte", "Byte", "Bit"], answer: 1, explanation: "A megabyte is larger than a kilobyte, byte, or bit." },
  { id: "fund-15", category: "Computer Fundamentals", question: "What is the purpose of antivirus software?", options: ["Help detect and remove malicious software", "Increase monitor brightness", "Write HTML pages", "Create a faster keyboard"], answer: 0, explanation: "Antivirus tools help identify, block, or remove malware." },
  { id: "fund-16", category: "Computer Fundamentals", question: "Which part of a computer displays visual information?", options: ["Monitor", "Keyboard", "Power supply", "Ethernet cable"], answer: 0, explanation: "A monitor is a display output device." },
  { id: "fund-17", category: "Computer Fundamentals", question: "What is a folder used for?", options: ["Organizing files and other folders", "Measuring CPU temperature", "Connecting to a website", "Changing binary to decimal"], answer: 0, explanation: "Folders help organize files and can contain other folders." },
  { id: "fund-18", category: "Computer Fundamentals", question: "What does a touchscreen combine?", options: ["Display output and touch input", "Storage and backup only", "A printer and scanner", "A CPU and power supply"], answer: 0, explanation: "A touchscreen displays visual information and detects touch input." },

  { id: "general-01", category: "General Knowledge", question: "What does WWW stand for?", options: ["World Wide Web", "Wide World Window", "Web World Wire", "World Web Watch"], answer: 0, explanation: "WWW stands for World Wide Web, the system of linked resources accessed over the internet." },
  { id: "general-02", category: "General Knowledge", question: "Which organization maintains the standards for HTML and many web APIs?", options: ["W3C", "FIFA", "WHO", "OPEC"], answer: 0, explanation: "The World Wide Web Consortium (W3C) develops web standards and guidelines." },
  { id: "general-03", category: "General Knowledge", question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Reading Link", "United Routing Language", "User Reference List"], answer: 0, explanation: "A URL, or Uniform Resource Locator, identifies the location of a resource." },
  { id: "general-04", category: "General Knowledge", question: "Which protocol is commonly used to securely load websites?", options: ["HTTPS", "FTP only", "SMTP", "ASCII"], answer: 0, explanation: "HTTPS uses TLS to protect communication between a browser and a website." },
  { id: "general-05", category: "General Knowledge", question: "What is phishing?", options: ["A deceptive attempt to steal sensitive information", "A way to clean a monitor", "A type of computer memory", "A safe backup method"], answer: 0, explanation: "Phishing uses deceptive messages or websites to trick people into revealing information." },
  { id: "general-06", category: "General Knowledge", question: "Which password is generally the strongest?", options: ["12345678", "password", "A long, unique passphrase", "Your first name"], answer: 2, explanation: "A long, unique passphrase is harder to guess; using a password manager helps keep it unique." },
  { id: "general-07", category: "General Knowledge", question: "What does GPS help determine?", options: ["A receiver's location", "A file's font size", "A processor's brand", "A website's colour"], answer: 0, explanation: "GPS uses satellite signals to help determine a receiver's position and time." },
  { id: "general-08", category: "General Knowledge", question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], answer: 1, explanation: "Iron-rich dust gives Mars its characteristic reddish appearance." },
  { id: "general-09", category: "General Knowledge", question: "How many days are in a standard non-leap year?", options: ["364", "365", "366", "360"], answer: 1, explanation: "A standard non-leap year has 365 days." },
  { id: "general-10", category: "General Knowledge", question: "Which ocean is the largest on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: 3, explanation: "The Pacific Ocean is the largest of Earth's oceans." },
  { id: "general-11", category: "General Knowledge", question: "What is the chemical symbol for water?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1, explanation: "A water molecule contains two hydrogen atoms and one oxygen atom, giving the formula H2O." },
  { id: "general-12", category: "General Knowledge", question: "Which language is primarily spoken in Brazil?", options: ["Spanish", "Portuguese", "French", "Italian"], answer: 1, explanation: "Portuguese is the official and most widely spoken language in Brazil." },
  { id: "general-13", category: "General Knowledge", question: "How many sides does a hexagon have?", options: ["Five", "Six", "Seven", "Eight"], answer: 1, explanation: "A hexagon is a polygon with six sides." },
  { id: "general-14", category: "General Knowledge", question: "What is the process by which plants use sunlight to make food?", options: ["Photosynthesis", "Evaporation", "Condensation", "Fermentation"], answer: 0, explanation: "Photosynthesis uses light energy to convert carbon dioxide and water into sugars." },
  { id: "general-15", category: "General Knowledge", question: "Which instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Compass", "Odometer"], answer: 1, explanation: "A thermometer measures temperature." },
  { id: "general-16", category: "General Knowledge", question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Rupee"], answer: 2, explanation: "The yen is the official currency of Japan." },
  { id: "general-17", category: "General Knowledge", question: "Which gas do humans need to breathe to support normal respiration?", options: ["Oxygen", "Helium", "Neon", "Hydrogen"], answer: 0, explanation: "Human cells use oxygen during aerobic respiration." },
  { id: "general-18", category: "General Knowledge", question: "What is the closest star to Earth?", options: ["Sirius", "The Sun", "Proxima Centauri", "Polaris"], answer: 1, explanation: "The Sun is the star at the centre of our solar system and the closest star to Earth." }
];

const QUIZ_LENGTH = 10;
const RECENT_QUESTIONS_KEY = "ceoQuizRecentlyUsedQuestionIds";

const questionCounter = document.querySelector("#question-counter");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.querySelector("#progress-fill");
const questionCategory = document.querySelector("#question-category");
const questionText = document.querySelector("#question-text");
const answerOptions = document.querySelector("#answer-options");
const answerStatus = document.querySelector("#answer-status");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const quizContent = document.querySelector("#quiz-content");
const results = document.querySelector("#results");
const scoreValue = document.querySelector("#score-value");
const scoreTotal = document.querySelector("#score-total");
const scorePercentage = document.querySelector("#score-percentage");
const scoreMessage = document.querySelector("#score-message");
const unansweredMessage = document.querySelector("#unanswered-message");
const reviewSummary = document.querySelector("#review-summary");
const answerReview = document.querySelector("#answer-review");
const restartButton = document.querySelector("#restart-button");

let quizQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswers = [];
let quizCompleted = false;
let memoryUsedQuestionIds = new Set();
let useMemoryQuestionHistory = false;

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function readUsedQuestionIds() {
  if (useMemoryQuestionHistory) {
    return memoryUsedQuestionIds;
  }

  try {
    const storedValue = window.localStorage.getItem(RECENT_QUESTIONS_KEY);
    if (storedValue === null) {
      memoryUsedQuestionIds = new Set();
      return memoryUsedQuestionIds;
    }

    const parsedValue = JSON.parse(storedValue);
    if (!Array.isArray(parsedValue)) {
      throw new TypeError("Saved quiz question history is not an array.");
    }

    const knownIds = new Set(QUESTION_BANK.map((question) => question.id));
    memoryUsedQuestionIds = new Set(
      parsedValue.filter((id) => typeof id === "string" && knownIds.has(id))
    );
    return memoryUsedQuestionIds;
  } catch (error) {
    useMemoryQuestionHistory = true;
    console.warn("Quiz history storage is unavailable; using in-memory question history.", error);
    return memoryUsedQuestionIds;
  }
}

function saveUsedQuestionIds(questionIds) {
  memoryUsedQuestionIds = new Set(questionIds);
  try {
    window.localStorage.setItem(RECENT_QUESTIONS_KEY, JSON.stringify([...memoryUsedQuestionIds]));
  } catch (error) {
    useMemoryQuestionHistory = true;
    console.warn("Could not save quiz history; question repetition will be limited to this page session.", error);
  }
}

function selectQuizQuestions() {
  const usedIds = readUsedQuestionIds();
  const unusedQuestions = QUESTION_BANK.filter((question) => !usedIds.has(question.id));
  let selected;
  let nextUsedIds;

  if (unusedQuestions.length >= QUIZ_LENGTH) {
    selected = shuffle(unusedQuestions).slice(0, QUIZ_LENGTH);
    nextUsedIds = new Set(usedIds);
    selected.forEach((question) => nextUsedIds.add(question.id));
  } else {
    // Use every remaining question before starting a new cycle, without duplicates in this quiz.
    selected = shuffle(unusedQuestions);
    const selectedIds = new Set(selected.map((question) => question.id));
    const questionsNeeded = QUIZ_LENGTH - selected.length;
    const freshCycleQuestions = shuffle(
      QUESTION_BANK.filter((question) => !selectedIds.has(question.id))
    ).slice(0, questionsNeeded);
    selected.push(...freshCycleQuestions);
    nextUsedIds = new Set(selected.map((question) => question.id));
  }

  saveUsedQuestionIds(nextUsedIds);

  return shuffle(selected).map((question) => {
    const shuffledOptions = shuffle(
      question.options.map((option, originalIndex) => ({ option, originalIndex }))
    );
    return {
      ...question,
      options: shuffledOptions.map(({ option }) => option),
      answer: shuffledOptions.findIndex(({ originalIndex }) => originalIndex === question.answer)
    };
  });
}

function startNewQuiz() {
  quizQuestions = selectQuizQuestions();
  currentQuestionIndex = 0;
  selectedAnswers = Array(QUIZ_LENGTH).fill(null);
  quizCompleted = false;
  quizContent.hidden = false;
  results.hidden = true;
  progressTrack.setAttribute("aria-valuemax", String(QUIZ_LENGTH));
  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  questionCounter.textContent = `Question ${questionNumber} of ${QUIZ_LENGTH}`;
  progressTrack.setAttribute("aria-valuenow", String(questionNumber));
  progressFill.style.width = `${(questionNumber / QUIZ_LENGTH) * 100}%`;
  questionCategory.textContent = question.category;
  questionText.textContent = question.question;
  answerStatus.textContent = "";
  answerOptions.replaceChildren();

  question.options.forEach((option, optionIndex) => {
    const optionId = `question-${questionNumber}-option-${optionIndex}`;
    const optionContainer = document.createElement("div");
    optionContainer.className = "answer-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.id = optionId;
    input.name = `question-${questionNumber}`;
    input.value = String(optionIndex);
    input.checked = selectedAnswer === optionIndex;

    const label = document.createElement("label");
    label.htmlFor = optionId;

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.setAttribute("aria-hidden", "true");
    letter.textContent = String.fromCharCode(65 + optionIndex);

    const optionText = document.createElement("span");
    optionText.textContent = option;

    label.append(letter, optionText);
    input.addEventListener("change", () => {
      selectedAnswers[currentQuestionIndex] = optionIndex;
      answerStatus.textContent = "Answer saved.";
    });

    optionContainer.append(input, label);
    answerOptions.append(optionContainer);
  });

  previousButton.disabled = currentQuestionIndex === 0;
  nextButton.innerHTML = currentQuestionIndex === QUIZ_LENGTH - 1
    ? "Finish quiz <span aria-hidden=\"true\">&#10003;</span>"
    : "Next question <span aria-hidden=\"true\">&rarr;</span>";
}

function finishQuiz() {
  if (quizCompleted) {
    return;
  }

  quizCompleted = true;
  const score = quizQuestions.reduce(
    (total, question, index) => total + (selectedAnswers[index] === question.answer ? 1 : 0),
    0
  );
  const unansweredCount = selectedAnswers.filter((answer) => answer === null).length;
  const percentage = Math.round((score / QUIZ_LENGTH) * 100);

  quizContent.hidden = true;
  results.hidden = false;
  progressTrack.setAttribute("aria-valuenow", String(QUIZ_LENGTH));
  progressFill.style.width = "100%";
  scoreValue.textContent = String(score);
  scoreTotal.textContent = String(QUIZ_LENGTH);
  scorePercentage.textContent = `${percentage}%`;
  reviewSummary.textContent = `${score} correct · ${QUIZ_LENGTH - score} incorrect`;
  scoreMessage.textContent = getScoreMessage(score);
  unansweredMessage.hidden = unansweredCount === 0;
  unansweredMessage.textContent = unansweredCount === 0
    ? ""
    : `${unansweredCount} ${unansweredCount === 1 ? "question was" : "questions were"} left unanswered and counted as incorrect.`;
  renderReview();
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getScoreMessage(score) {
  if (score === QUIZ_LENGTH) {
    return "Perfect score! You have an excellent grasp of these topics.";
  }
  if (score >= 7) {
    return "Great work! Review the explanations to reinforce what you know.";
  }
  if (score >= 4) {
    return "Good effort! The answer review is a great place to learn more.";
  }
  return "Keep practising! Read through each explanation and try again.";
}

function renderReview() {
  answerReview.replaceChildren();

  quizQuestions.forEach((question, index) => {
    const selectedAnswer = selectedAnswers[index];
    const isCorrect = selectedAnswer === question.answer;
    const reviewItem = document.createElement("li");
    reviewItem.className = `review-item ${isCorrect ? "is-correct" : "is-incorrect"}`;

    const reviewQuestion = document.createElement("p");
    reviewQuestion.className = "review-question";
    reviewQuestion.textContent = `${index + 1}. ${question.question}`;

    const yourAnswer = document.createElement("p");
    yourAnswer.className = "review-answer";
    const yourAnswerLabel = document.createElement("strong");
    yourAnswerLabel.textContent = "Your answer: ";
    const yourAnswerText = document.createElement("span");
    yourAnswerText.className = isCorrect ? "correct-text" : "incorrect-text";
    yourAnswerText.textContent = selectedAnswer === null ? "Not answered" : question.options[selectedAnswer];
    yourAnswer.append(yourAnswerLabel, yourAnswerText);

    const correctAnswer = document.createElement("p");
    correctAnswer.className = "review-answer";
    const correctAnswerLabel = document.createElement("strong");
    correctAnswerLabel.textContent = "Correct answer: ";
    const correctAnswerText = document.createElement("span");
    correctAnswerText.className = "correct-text";
    correctAnswerText.textContent = question.options[question.answer];
    correctAnswer.append(correctAnswerLabel, correctAnswerText);

    const explanation = document.createElement("p");
    explanation.className = "review-explanation";
    explanation.textContent = question.explanation;

    reviewItem.append(reviewQuestion, yourAnswer, correctAnswer, explanation);
    answerReview.append(reviewItem);
  });
}

previousButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < QUIZ_LENGTH - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }
  finishQuiz();
});

restartButton.addEventListener("click", () => {
  const shouldRestart = window.confirm("Start a new quiz with a fresh set of questions? Your current answers and score will be cleared.");
  if (shouldRestart) {
    startNewQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

startNewQuiz();
