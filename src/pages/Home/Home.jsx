import logo from './../../logo.svg';
import style from './Home.module.css';


const Home = () => {
    return (
        <div className={style.home}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload. GHDAWdwe
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
        </div>
    );
};
export default Home;
