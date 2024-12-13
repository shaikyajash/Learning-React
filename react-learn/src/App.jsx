import Greet from "./components/Greet";
import Greeting from "./components/Greeting";
import DynamicContent from "./components/DynamicContent";
import JSXRules from "./components/JSXRules";
import List_working from "./components/List_working";
import Person from "./components/Person";
import StyledCard from "./components/StyledCard";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";
import WelcomeMessage from "./components/WelcomeMessage";
import ProfileCard from "./components/ProfileCard";
import "./index.css";
import IconComponent from "./components/IconComponent";
import EventHandler from "./components/EventHandler";
import StateHandling from "./components/StateHandling";
import TodoList from "./components/TodoList";   
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";


const App = () => {
 

  return (
    <div>
      <WelcomeMessage />
      <JSXRules />
      <DynamicContent />
      <Greet />
      <List_working />
      <Person name="John" age="25" />
      <Weather />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greeting timeofDay="morning" />
      <StyledCard />
      <ProfileCard />
      <IconComponent />
      <EventHandler />
      <StateHandling />
      <TodoList/>
      <Profile/>
      <ShoppingList/>




    </div>
  );
};

export default App;
