//此处可覆盖系统默认配置文件
window.$$config = {
  webRoot: {
    default:"/dsfa/",
    dsfa:"/dsfa/"
    // default: "http://192.168.109.203:8081/",
    // dsfa: "http://192.168.109.203:8081/"
  },
  // 登录成功后跳转到哪个页面
  loginSuccessTo: "./index.html",
  designer: {
    gotoIcon:false,
    //设计器编辑页面自定义样式时的基础样式变量
    scss: ["variable.scss", "themes.scss", "mixins.scss"],
  },
  // logo配置
  logo: {
    title: "Dsfa5.0",
    image: ""
  },
  user: {
    // 默认头像
    defaultHeader: "./static/img/defaultHeader.png"
  },
  home: {
    menu: {
      // home页面导航菜单请求接口DD
      src: "/menu/getTree"
    }
  }
};