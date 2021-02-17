import './index.css';
import App from './App';
import news_article1 from './news_article1';
import news_article2 from './news_article2';
import news_article3 from './news_article3';
import news_article4 from './news_article4';
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
      <Route path="/news_article1" component={news_article1} />
      <Route path="/news_article2" component={news_article2} />
      <Route path="/news_article3" component={news_article3} />
      <Route path="/news_article4" component={news_article4} />
      <Route path="/appbar" component={Appbar} />
      <Route path="/homepageCard" component={HomepageCard} />
      {/* <Route path="/timeline" component={timeline} /> */}
    </Switch>
    </BrowserRouter>,
    rootElement
  );