import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import 'popper.js/dist/umd/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

import { Menu } from './components/Menu';
import { Rotas } from './components/Rotas';

function App() {
  return (
    <>
      <Menu />
      <Rotas />
    </>
  );
}

export default App;
