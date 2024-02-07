import {createRoot} from 'react-dom/client';
import Rocket from './Components/Rocket';

const root = createRoot(document.getElementById('rocket'));
root.render(<Rocket />)