dsf.define(function () {
  let template="<div class=\"ds-control\">{{abc}}</div>"
  return {
    name: "DsfOnlineGeneralTest",
    ctrlCaption: 'Test',
    data: function () {
      return {
        abc: "a"
      }
    },
    computed: {},
    created: function () { },
    mounted: function () { },
    activated: function () { },
    deactivated: function () { },
    methods: {
    },
    template:template
  };
});