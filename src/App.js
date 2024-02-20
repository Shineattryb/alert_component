import logo from './logo.svg';
import './App.css';

import DocAlertPopup from './Alertpopup/Popup';
import DocMainHeader from './Templatescreen/Container';
import Box from './Templatescreen/Box';
import Container from './Broadcastscreen/Container';
function App() {
  const header="Text";
  return (
    <div className="App">
      {/* alert pop-up */}
      <DocAlertPopup/>   
      {/* TEMPLATE BOX */}
   <Box/>

      {/* broadcast screen 2 */}
      {/* navbar */}
      {/* container */}
<Container/>
    </div>
  );
}

export default App;
