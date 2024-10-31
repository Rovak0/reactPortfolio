import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
// import Header from './components/UI/header';
import Head from './components/Head';

function App() {
    return (
        <div>
            {/* <Nav /> */}
            <Head />
            <main className='mx-3'>
                <Outlet />
            </main>
        </div>
    )
}

export default App;