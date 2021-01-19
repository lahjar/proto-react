import './index.css';
import App_2 from './App_2';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Appbar from './appbar';
import HomepageCard from './homepageCard';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(<App />, document.querySelector('#root'));
// ReactDOM.render(<App_2 />, document.querySelector('#root'));
const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
     <Switch>
      <Route exact path="/" component={App} />
      <Route path="/news_article1" component={App_2} />
      <Route path="/appbar" component={Appbar} />
      <Route path="/homepageCard" component={HomepageCard} />
      {/* <Route path="/timeline" component={timeline} /> */}
    </Switch>
    </BrowserRouter>,
    rootElement
  );