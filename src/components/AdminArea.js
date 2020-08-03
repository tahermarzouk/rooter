import React from 'react';
import { useHistory } from "react-router-dom";
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Login from './Login';
const AdminArea = () => {
    function HomeButton() {
        let history = useHistory();
      
        function handleClick() {
          history.push("/");
        }
      
        return (
          <button type="button" onClick={handleClick}>
            Go home
          </button>
        );
      }
    return (
        <BrowserRouter>

            <div>
                <p>You must log in to view the page at /admin</p>
                <Link to="/admin"><button style={{ marginTop: 100, marginLeft: 100 }}>Log in</button></Link>
            </div>
            

            <Route path="/admin" exact component={Login} ></Route>



        </BrowserRouter>



    );
}

export default AdminArea;