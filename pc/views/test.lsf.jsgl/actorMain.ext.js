dsf.define(function () {
  return {
    //this.nameSpace获取当前页面命名空间
    //this.pageName获取当前页面的名称
    //this.$viewData中存储表单的数据
    //this.$viewInitData中存储了页面初始化接口获取的数据源、默认值、权限等信息
    //this.queryString获取当前页面的查询字符参数
    //this.frames获取页面中viewPart组件内嵌的内页组件
    //this.$parentView获取被frame嵌套的父页面组件
    data: function () {
      return {}
    },
    computed: {},
    created: function () {},
    mounted: function () {},
    activated: function () {},
    deactivated: function () {},
    //=======二次开发额外增加的钩子函数 start ===============
    //用于页面初始化数据查询完成，已经获取了表单组件的默认值及下拉框等枚举类组件的数据(此处勿要对$viewData进行赋值操作,需要初始化表单值直接操作data参数)
    inited: function (data, next) {
      next();
    },
    //用于页面数据读取完成，仅对页面类型为表单时有效(此处勿要对$viewData进行赋值操作,需要初始化表单值直接操作data参数)
    dataLoaded: function (data, next) {
      next();
    },
    //页面全部加载完成，且组件都已经挂载
    ready: function () {

    },
    //表单提交保存验证前触发，此处可以对ignoreValidate属性进行配置设置为true可以忽略表单验证
    validateBefore: function (next, options) {
      next();
    },
    //表单提交保存验证后触发
    validateAfter: function (next, options) {
      next();
    },
    //表单保存前钩子函数
    saveBefore: function (next, options) {
      next();
    },
    //表单保存数据提交给服务器前对提交数据副本的处理
    postDataBefore: function (next, data, options) {
      next();
    },
    //表单保存数据提交给服务器成功后对服务器返回的结果数据处理
    postDataAfter: function (next, requestResult, options) {
      next();
    },
    //表单保存成功后钩子函数,result为保存后服务器返回的数据
    saveAfter: function (next, result, options) {
      next();
    },
    //表单保存后(无论成功或者失败)钩子函数,result为null表示保存失败否则为保存后服务器返回的新数据
    saveComplete: function (result) {},
    //=======二次开发额外增加的钩子函数 end   ===============
    methods: {
      choiceRole: function (res) {
        // xxxx代表子表标识
        var namesapce = 'test_lsf_jsgl_rolelist.';
        var $table = this.$refs.rolelist;
        console.log($table.allList)
        _.forEach(res.args, function (it) {
          var flag = true;
          for (let item of $table.allList) { // 去重,可优化
            if (it['_id'] === item['test_lsf_jsgl_rolelist.roleid']) {
              flag = false;
              break;
            }
          }
          if (flag) {
            var data = {};
            data[namesapce + 'name'] = it['_name'];
            data[namesapce + 'sn'] = it['sn'];
            data[namesapce + 'isenabled'] = it['isenabled_text'];
            data[namesapce + 'roleorder'] = it['roleorder'];
            data[namesapce + 'roleid'] = it['_id'];
            // 将新数据追加到子表中
            $table.pushRow(data);
          }
        });
      },
      choiceAccount: function (res) {
        var namespace = 'test_lsf_jsgl_accountlist.';
        var namespace2 = 'test_lsf_zhgl.'
        var $table = this.$refs.accountlist;
        _.forEach(res.args, function (it) {
          var flag = true;
          for (let item of $table.allList) { // 去重,可优化
            if (it[namespace2 + 'test_lsf_zhgl_id'] === item[namespace + 'accountid']) {
              flag = false;
              break;
            }
          }
          if (flag) {
            var data = {};
            data[namespace + 'name'] = it[namespace2 + 'name'];
            data[namespace + 'accountname'] = it[namespace2 + 'accountname'];
            data[namespace + 'sex'] = it[namespace2 + 'sex'].text;
            data[namespace + 'birth'] = it[namespace2 + 'birth'];
            data[namespace + 'department'] = it[namespace2 + 'department'].text;
            data[namespace + 'accountid'] = it[namespace2 + 'test_lsf_zhgl_id'];
            // 将新数据追加到子表中
            $table.pushRow(data);
          }
        });
      }
    }
  }
});