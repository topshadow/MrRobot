import DoctorWeb from "../logic/DoctorWeb";
import DoctorApp from "../logic/DoctorApp";


var routes =new Map();
routes.set("/"+DoctorWeb.toProxyString()+"/"+DoctorWeb.toString()+"/*",DoctorWeb);
routes.set("/"+DoctorApp.toProxyString()+"/"+DoctorApp.toString()+"/*",DoctorApp);


export default routes;






