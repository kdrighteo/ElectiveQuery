import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import QueryBox from './Components/QueryBox';

function App() {
  return (
    <div className="flex justify-center mt-36 ">
      <div className=" h-[400px] bg-blue-100 min-w-full md:min-w-0 h-screen md:h-full p-10 shadow-l rounded-xs p-10 shadow-xl rounded-xs">
        <div>
          <Header />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <QueryBox />
        </div>
      </div>
    </div>
  );
}

export default App;
