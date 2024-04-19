import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {publicRoutes } from '~/routes';
import {DefaultLayout} from '~/components/Layouts';
function App() {
  return (
    <Router> {/* ctrl shift p  */}
         <div className="App">
        <Routes>
          {publicRoutes.map((route,index) =>{
              const Layout = route.Layout || DefaultLayout;
              const Page= route.component
              return (
                <Route 
                  key = {index} 
                  path ={route.path} 
                  element = {
                    <Layout> 
                      <Page/>
                    </Layout>
                  } 
                />
              )
          })}
        </Routes>
        </div>
    </Router>
  );
}   

export default App;
