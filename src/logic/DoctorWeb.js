import  WebLogic from "./base/WebLogic";


//处理请求类
class doctorweb extends WebLogic{
  doAction(action){
      switch (action){
        case  "login":
          return this.login;
          break;
        case "register":
              return this.register;
              break;
        default :
              return this.error;
              break;
      }
  }

  login(args){
    console.log(args);
    console.log("login action successfully");
  }
  register(args){
    console.log(args);
    console.log("register action successfully");
  }

  error(args){
    console.log("error");
  }
  /**
   * @toString
   * 处理doctor请求
   *  */
  toString(){
    return "doctor";
  }


}


// console.log(new doctorweb().toString());
export default new doctorweb();
