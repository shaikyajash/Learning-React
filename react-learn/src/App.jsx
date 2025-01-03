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
import CopyInput from "./components/CopyInput";
import PopupCpntent from "./components/PopupContent";
import Switcher from "./components/Switcher";
import EffectHandling from "./components/EffectHandling";
import EffectHandling2 from "./components/EffectHandling2";
import ComponentA from "./components/contextapi/ComponentA";
import UserProfile from "./components/contextapi/activity/UserProfile";
import { UserProvider } from "./components/contextapi/activity/UserContext";
import UpdateUser from "./components/contextapi/activity/UpdateUser";
import Reducer from "./components/usereducer/Reducer";
import Counter from "./components/usereducer/activity/Counter";

import Ref from "./components/useref.jsx/Ref";
import FocusInput from "./components/useref.jsx/FocusInput";
import Timer from "./components/useref.jsx/Timer";
import Usinghook from "./components/Customhooks/Usinghook";
import UniqueID from "./components/Idhook/UniqueID";



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
      <CopyInput/>
      <Switcher/>
      <EffectHandling />
      <EffectHandling2 />
      <ComponentA />
        <UserProvider>
          <UserProfile />
          <UpdateUser />
        </UserProvider>
      <Reducer />
      <Counter />
      <Ref />
      <FocusInput />
      <Timer />
      <Usinghook />
      <UniqueID />

      


      




    </div>
  );
};

export default App;
