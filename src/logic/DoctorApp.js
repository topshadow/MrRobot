import AppLogic from "./base/AppLogic";

class DoctorApp extends AppLogic{
  doAction(action){
    switch(action){
      case "login":
            return this.login;
      default :
            return this.error;
    }

  }
  login(args){
    //返回json格式数据
    return args;
  }
  error(){
    //返回错误信息
    return {state:0,issuccess:false,msg:"不存在的请求"}
  }


  toString(){
  return "doctor";
  }

}
export default new DoctorApp();
