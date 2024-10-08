import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {UserProvider} from "./context/userContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
