import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TopBar from "./TopBar";
import EditForm from "./EditForm";
import Home from "./Home";
import MedicineForm from "./MedicineForm";
import Medicinelables from "./Medicinelables";

const SiteRender = () => {

    return (
      <div className="views">
        <Switch>
          <Route exact path="/" render={()=><TopBar/>}/>
          <Route path="/create-medicine" render={()=><TopBar/>}/>
          <Route path="/edit/:persons_id" render={()=><TopBar/>} />
          <Route path="/medicinelables" render={()=><TopBar/>} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-medicine" component={MedicineForm} />
          <Route path="/edit/:persons_id" component={EditForm} />
          <Route path="/medicinelables" component={Medicinelables} />
        </Switch>
       
      </div>
    );
 
    return <Redirect to="/login"></Redirect>;

};
export default SiteRender;
