dsf.define(function () {
  return {
    data: function () {
      return {}
    },
    created: function () {},
    mounted: function () {},
    //=======二次开发额外增加的钩子函数 start ===============
    //用于页面初始化数据查询完成，已经获取了表单组件的默认值及下拉框等枚举类组件的数据
    inited: function (data, next) {
      next();
    },
    //用于页面数据读取完成，仅对页面类型为表单时有效
    dataLoaded: function (data, next) {
      next();
    },
    //页面全部加载完成，且元素都已经挂载
    ready: function () {

    },
    //表单保存前钩子函数
    saveBefore: function (next) {
      next();
    },
    //表单保存成功后钩子函数,result为保存后服务器返回的新数据
    saveAfter: function (next, result) {
      next();
    },
    //表单保存后(无论成功或者失败)钩子函数,result为null表示保存失败否则为保存后服务器返回的新数据
    saveComplete: function (result) {

    },
    //=======二次开发额外增加的钩子函数 end   ===============
    methods: {

    }
  }
});