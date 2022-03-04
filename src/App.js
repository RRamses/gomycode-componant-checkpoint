
import './App.css';
import { ProfilePhoto }    from "./componant/profile/ProfilePhoto"
import { FullName } from "./componant/profile/FullName"
import { Adresse }  from './componant/profile/Adresse';

function App() {
  return (

    
    <div className="App">
      <div className="bigbox">
        <div className="box1">
          <FullName/>
          <hr/>
          <Adresse/>

        </div>
        <div className="box2">
          <ProfilePhoto/>
        </div>

      </div>
    </div>
  );
}

export default App;
