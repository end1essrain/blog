 layer.confirm(
      "欢迎访问咩咩刷通关<br>更多福利请关注微信公众号[红贝]",
      {
        btn: ["现在关注", "好的"]
      },
      function () {
        window.open("./img/wx.jpg", "__blank");
      },
      function () {}
    );