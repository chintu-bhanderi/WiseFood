import { FoodCategory } from './components/food/FoodCategory' //done
import { Routes, Route } from "react-router-dom";
import { FoodDetail } from './components/food/FoodDetail'; //done
import { FoodOrderShow } from './components/food/FoodOrderShow'; //done
import { OrdersDetail } from './components/chef/OrdersDetail'; //done
import { HomeCounter } from './components/counter/HomeCounter'; //done
import { TableBookFind } from './components/counter/TableBookFind'; //done
import { TableOrderDetail } from './components/counter/TableOrderDetail'; //done
import { ChefDetail } from './components/chef/ChefDetail';
import { HomePage } from './components/HomePage';
import { UserTableBookDetail } from './components/table/UserTableBookDetail';
import { SignUp } from './components/auth/SignUp';
import { LogIn } from './components/auth/LogIn';
import { WorkerTypeDetail } from './components/auth/WorkerTypeDetail';
import { TableBook } from './components/table/TableBook';
import { Navbar } from './components/Navbar';
import { useCookies } from 'react-cookie';
import { WaiterDetail } from './components/waiter/WaiterDetail';
import { WaiterOrdersDetail } from './components/waiter/WaiterOrdersDetail';
import { ProtectedRoute } from './components/ProtectedRoute';
import { TableBookFindById } from './components/counter/TableBookFindById';
import { UserFoodOrderedDetail } from './components/food/UserFoodOrderedDetail';
import { ChefMadeOrderDetail } from './components/chef/ChefMadeOrderDetail';
import { WaiterServedOrderDetail } from './components/waiter/WaiterServedOrderDetail';
import { Profile } from './components/Profile';
import { About } from './components/About';
import { BillGenerate } from './components/counter/BillGenerate';
import { AUTH_LOGIN_TYPE, CHEF_TYPE, COUNTER_TYPE, USER_TYPE, WAITER_TYPE } from './store/types/authType';
import "./components/styles.css"

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
        <Navbar
          cookies={cookies}
          removeCookies={handleRemoveCookies}
        />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/food' >
            <Route path='/food/category' element={<ProtectedRoute Child={FoodCategory} type={USER_TYPE} />} />
            <Route path='/food/category/:categoryId' element={<ProtectedRoute Child={FoodDetail} type={USER_TYPE} />} />
            <Route path='/food/food-order/:foodName/:quantity' element={<ProtectedRoute Child={FoodOrderShow} type={USER_TYPE} />} />
            <Route path='/food/food-order-show/user' element={<ProtectedRoute Child={UserFoodOrderedDetail} type={USER_TYPE} />} />
            <Route path='/food/food-order-show' element={<ProtectedRoute Child={OrdersDetail} type={USER_TYPE} />} />
          </Route>

          <Route path='/table'>
            <Route path='/table/table-book' element={<ProtectedRoute Child={TableBook} type={USER_TYPE} />} />
            <Route path="/table/table-book/user" element={<ProtectedRoute Child={UserTableBookDetail} type={USER_TYPE} />} />
          </Route>

          <Route path='/chef' >
            <Route index element={<ProtectedRoute Child={ChefDetail} type={CHEF_TYPE} />} />
            <Route path='/chef/order/made' element={<ProtectedRoute Child={ChefMadeOrderDetail} type={CHEF_TYPE} />} />
            <Route path='/chef/order/:chefId' element={<ProtectedRoute Child={OrdersDetail} type={CHEF_TYPE} />} />
          </Route>

          <Route path='/waiter' >
            <Route index element={<ProtectedRoute Child={WaiterDetail} type={WAITER_TYPE} />} />
            <Route path='/waiter/order/served' element={<ProtectedRoute Child={WaiterServedOrderDetail} type={WAITER_TYPE} />} />
            <Route path='/waiter/order/:waiterId' element={<ProtectedRoute Child={WaiterOrdersDetail} type={WAITER_TYPE} />} />
          </Route>

          <Route path='/counter'>
            <Route index element={<ProtectedRoute Child={HomeCounter} type={COUNTER_TYPE} />} />
            <Route path="/counter/tables-book/id" element={<ProtectedRoute Child={TableBookFindById} type={COUNTER_TYPE} />} />
            <Route path="/counter/tables-book" element={<ProtectedRoute Child={TableBookFind} type={COUNTER_TYPE} />} />
            <Route path="/counter/tables-order" element={<ProtectedRoute Child={TableOrderDetail} type={COUNTER_TYPE} />} />
            <Route path="/counter/generate-bill/:bookId" element={<ProtectedRoute Child={BillGenerate} type={COUNTER_TYPE} />} />
          </Route>
          
          <Route path='/auth'>
            <Route index element={<ProtectedRoute Child={WorkerTypeDetail} type={AUTH_LOGIN_TYPE} />} />
            <Route path="/auth/signup" element={<ProtectedRoute Child={SignUp} type={AUTH_LOGIN_TYPE} />} />
            <Route path="/auth/login/:type" element={<LogIn setCookies={handleSetCookies} />} />
          </Route>

          <Route path='/'>
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
