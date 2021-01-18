export default {
  name: "宿管右侧布局配置",
  roomStatus: {
    title: "房间列表",
    stateList: [
      {
        txt: "正常房",
        val: 1,
        color: "#DAFFE3"
      },
      {
        txt: "已满房",
        val: 2,
        color: "#F0F0F0"
      },
      {
        txt: "未满房",
        val: 3,
        color: "#EBE5FF"
      },
      {
        txt: "不可排",
        val: 0,
        color: "#F6EBEB"
      },
      
      {
        txt: "已分配",
        val: 4,
        color: "#E1F5FE"
      },
      {
        txt: "过期房",
        val: 5,
        color: "#FAF5DA"
      }
    ],
  }
}