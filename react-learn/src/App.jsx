
import Greet from "./components/Greet";

import JSXRules from "./components/JSXRules";
import List_working from "./components/List_working";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (
    <div>
    
      <WelcomeMessage />
      <JSXRules />
      {/* <DynamicContent /> */}
      <Greet />
      <List_working />
      




    </div>
  );
};

export default App;
