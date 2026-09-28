1. DevStack
  DevStack is a React web app where developers can browse popular web technologies, view details like category, difficulty and rating,
 and build their own personal "tech stack" by adding tools to a sidebar list. It fetches technology data from a JSON file, shows a loading
 state while data loads, and lets users add or remove technologies from their stack with instant toast notifications.

2. Technologies Used
React – building UI components
Vite – development server and build tool
Tailwind CSS – utility-first styling
DaisyUI – prebuilt UI components on top of Tailwind
React Context API – global state management for the stack
React Toastify – toast notifications
3. Features
Browse & Add Technologies – View technology cards (name, description, category, difficulty, rating) fetched from a JSON file, and add any of them to your personal stack with one click.
Your Stack Sidebar – A live sidebar shows every technology you've added, with the option to remove a single item or clear the entire stack, updating instantly with no page reload.
Responsive Navbar & Layout – A sticky navbar that switches to a mobile hamburger menu on small screens, paired with a fully responsive grid layout for technology cards.




i. What is JSX, and why is it used in React? 
Ans: JSX lets us write HTML-like code inside JavaScript.
It's used because it makes building UI easier to write and read.

ii. What is the difference between props and state?
ANs: Props are data passed from parent to child and can't be
changed by the child. State is data a component manages itself and can change over time.

iii. What does the useState hook do, and where did you use it in this project? 
Ans: useState lets a component store and update its own data. I used it in StackContext.jsx to 
store the selected technologies, and in TechnologiesSection.jsx to store the fetched data and loading status.

iv. What does the useEffect hook do, and why did you need it to load the JSON data? 
Ans: useEffect runs code after the component renders. I used it to fetch the JSON data once when the page loads.

v. Why does every item in a .map() list need a unique key prop? 
Ans: The key prop helps React identify each 
item so it can update the list correctly and efficiently, without mixing items up.

vi. What is conditional rendering? Show one place you used it (example: the empty stack message). 
Ans : Conditional rendering means showing different UI based on a condition. In YourStackPanel.jsx,
if the stack is empty it shows "Your stack is empty.", otherwise it shows the list of added technologies.

vii. How do you pass data from a parent component to a child component, and how does a child 
send something back to the parent? 
Ans : A parent sends data to a child using props. A child sends data back by calling a function passed to it as a prop. In this project, StackContext provides functions like addToStack and removeFromStack that child components call to update the shared data.
