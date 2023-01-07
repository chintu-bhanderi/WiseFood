import './App.css';
import {TableDetail} from './components/TableDetail'
import {FoodCategory} from './components/FoodCategory' //done
import {FoodOrderDetail} from './components/FoodOrderDetail' //done
// import {FoodCategory} from './components/FoodCategory'
import "./components/styles.css"
import {Routes, Route } from "react-router-dom";
import {TableBook} from './components/TableBook' //done
import { FoodDetail } from './components/FoodDetail'; //done
import { FoodOrderShow } from './components/FoodOrderShow'; //done
import { OrdersDetail } from './components/chef/OrdersDetail'; //done
import { HomeCounter } from './components/counter/HomeCounter'; //done
import { TableBookFind } from './components/counter/TableBookFind'; //done
import { TableOrderDetail } from './components/counter/TableOrderDetail'; //done
import { ChefDetail } from './components/chef/ChefDetail';

function App() {
  // const navigate = useNavigate();
  return (
      // <FoodCategory />
    <div>
        <Routes>
          <Route path='/category' element={<FoodCategory/>} />
          <Route path='/category/:categoryId' element={<FoodDetail/>} />
          <Route path='/food-order/:foodName' element={<FoodOrderDetail/>} />
          <Route path='/food-order/:foodName/:quantity' element={<FoodOrderShow/>} />
          <Route path='/table-book' element={<TableDetail/>} />
          <Route path='/table-book/:tableId' element={<TableBook/>} />
          <Route path='/food-order-show' element={<OrdersDetail/>} />
          {/* Not implement  */}
          <Route path='/chef' >
              <Route index element={<ChefDetail/>} />
              <Route path='/chef/order/:chefId' element={<OrdersDetail/>} />
          </Route>
          <Route path='/counter'>
              <Route index element={<HomeCounter/>} />
              <Route path="/counter/tables-book" element={<TableBookFind />} />
              <Route path="/counter/tables-order" element={<TableOrderDetail />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
