import {FoodCategory} from './components/food/FoodCategory' //done
import {FoodOrderDetail} from './components/food/FoodOrderDetail' //done
import {Routes, Route } from "react-router-dom";
import { FoodDetail } from './components/food/FoodDetail'; //done
import { FoodOrderShow } from './components/food/FoodOrderShow'; //done
import { OrdersDetail } from './components/chef/OrdersDetail'; //done
import { HomeCounter } from './components/counter/HomeCounter'; //done
import { TableBookFind } from './components/counter/TableBookFind'; //done
import { TableOrderDetail } from './components/counter/TableOrderDetail'; //done
import { ChefDetail } from './components/chef/ChefDetail';
import { Cards } from './components/Cards';
import { UserTableBookDetail } from './components/table/UserTableBookDetail';
import { SignUp } from './components/auth/SignUp';
import { LogIn } from './components/auth/LogIn';
import { WorkerTypeDetail } from './components/auth/WorkerTypeDetail';
import { TableBook } from './components/table/TableBook';
import "./components/styles.css"
import { Navbar } from './components/Navbar';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookies, removeCookies] = useCookies(['token']);

  const handleSetCookies = (key, data) => {
    setCookies(`${key}`, data, { path: '/' });
  }
  const handleRemoveCookies = (key) => {
    removeCookies(`${key}`, { path: '/' });
  }
  return (
    <>
    <div>
        {/* <Navbar /> */}
        <Routes>
          <Route index element={<Cards />} />
          <Route path='/food' >
              <Route path='/food/category' element={<FoodCategory/>} />
              <Route path='/food/category/:categoryId' element={<FoodDetail/>} />
              <Route path='/food/food-order/:foodName' element={<FoodOrderDetail/>} />
              <Route path='/food/food-order/:foodName/:quantity' element={<FoodOrderShow/>} />
              <Route path='/food/food-order-show' element={<OrdersDetail/>} />
          </Route>
          <Route path='/chef' >
              <Route index element={<ChefDetail/>} />
              <Route path='/chef/order/:chefId' element={<OrdersDetail/>} />
          </Route>
          <Route path='/counter'>
              <Route index element={<HomeCounter/>} />
              <Route path="/counter/tables-book" element={<TableBookFind />} />
              <Route path="/counter/tables-order" element={<TableOrderDetail />} />
          </Route>
          <Route path='/table'>
              <Route path='/table/table-book' element={<TableBook />} />
              <Route path="/table/table-book/user" element={<UserTableBookDetail />} />
          </Route>
          <Route path='/auth'>
            <Route index element={<WorkerTypeDetail />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/login/:type" element={<LogIn setCookies={handleSetCookies}/>} />
          </Route>
        </Routes> 
    </div>
    </>
  );
}

export default App;
