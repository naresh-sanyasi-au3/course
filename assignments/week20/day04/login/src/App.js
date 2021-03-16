import React from 'react';
import Logininput from './components/Logininput';
import Loginbutton from './components/Loginbutton';


function App() {
  return (
    <div className="form-group">
      <h3>login</h3>
      <hr/>
  <form>
    <Logininput placeholder = "Enter Username" label = "Username"/>
    <Logininput placeholder = "Enter Password" label = "Password"/>
    <Loginbutton/>
  </form>
    </div>
  )
}
export default App;
