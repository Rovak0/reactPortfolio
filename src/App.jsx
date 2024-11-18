import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
// import Header from './components/UI/header';
import Head from './components/UI/header';

// import {createRoot} from 'react-dom/client';

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);

function App() {
    // const myHeader = Head();
    // console.log(typeof(myHeader));
    // console.log(myHeader);
    return (
        <div>
            <Nav />
            {/* <Head /> */}
            {/* {myHeader} */}
            <main className='mx-3'>
                <Outlet />
            </main>
        </div>
    );
}

export default App;