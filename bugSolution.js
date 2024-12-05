/* bugSolution.js */
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>MyComponent</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default MyComponent;

/*App.js*/
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MyComponent from './MyComponent';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/:id" element={<MyComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App