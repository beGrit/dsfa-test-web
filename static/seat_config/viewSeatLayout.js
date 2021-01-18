export default {
  name: "排座视图配置",
  dormitory: {
    "getLayoutUrl": "",
    openMultipleChoose: true,   //座位是否开启多选
    isSeatAble(seat, person){
      //return seat.seatNum%2 > 0
      return true
    }
    
  }
}