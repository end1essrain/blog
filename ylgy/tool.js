$(document).ready(function () {
  var height = $(window).height();
   $("input:radio[name='get_set']").click(function () {
	   var get_set = $('input:radio[name="get_set"]:checked').val();
	   if(get_set == "1"){
		   $(".frequency").hide();
	   }else{
		   $(".frequency").show();
	   }
   });
   
  //循环提交
  function xunhuan() {
    var token = $("#token").val();
	var get_set = $('input:radio[name="get_set"]:checked').val();
	if(get_set == "1"){
		var frequency = 100;
	}else{
		var frequency = 1;
	}
	var get_type = $('input:radio[name="get_type"]:checked').val();
    if (get_type == "1") {
		for (var i = 0; i < frequency; i++) {
		  $.ajax({
			cache: true,
			type: "get",
			url: "https://cat-match.easygame2021.com/sheep/v1/game/update_user_skin?skin=1&t="+token,
			data: {
			},
			dataType: "json",
			success: function (result) {
			  if (result.err_code == 0) {
			  } else {
				$("#content").html("失败，未知问题，请联系客服解决");
			  }
			}
		  });
		}
    } else {
		for (var i = 0; i < frequency; i++) {
		  $.ajax({
			cache: true,
			type: "get",
			url: "https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?rank_score=1&rank_state=1&rank_time=0&rank_role=1&skin=1",
			data: {
			  t: token,
			  "content-type": "application/json",
			  "User-Agent":
				"Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c26) NetType/WIFI Language/zh_CN"
			},
			dataType: "json",
			success: function (result) {
			  if (result.data == 0) {
			  } else {
				$("#content").html("失败，未知问题，请联系客服解决");
			  }
			}
		  });
		}
    }

  }
  
  //开始提交
  $("#get_code").click(function () {
    var token = $("#token").val();
	var get_set = $('input:radio[name="get_set"]:checked').val();
	
	if (token == "") {
      layer.msg("请输入你的 token", { icon: 5 });
      return;
    }
	
	if(get_set == "1"){
		var frequency = 9999;
		for (var i = 0; i < frequency; i++) {
		  setTimeout(fn(i), i * 3000);
		}
		function fn(a) {
			return function () {
			layer.msg("正在提交第" + a + "次", { icon: 16, shade: 0.01 });
			xunhuan();
			$("#content").html("已经为您刷通关" + a + "次");
			};
		}
	}else{
		var frequency = $("#frequency").val();
		if (frequency == "") {
		  layer.msg("请输入你的通关次数", { icon: 5 });
		  return;
		}
		for (var i = 0; i < frequency; i++) {
		  setTimeout(fn(i), i * 3000);
		}
		function fn(a) {
			return function () {
			layer.msg("正在提交第" + a + "次", { icon: 16, shade: 0.01 });
			xunhuan();
			$("#content").html("已经为您刷通关" + a++ + "次");
			};
		}
	}
  });
  $("#get_token").click(function () {
    var uid = $("#uid").val();
    if (uid == "") {
      layer.msg("请输入你的 UID", { icon: 5 });
      return;
    }
    layer.msg("正在获取请稍后", { icon: 16, shade: 0.01 });
    $.ajax({
      cache: true,
      type: "get",
      url: "https://cat-match.easygame2021.com/sheep/v1/game/user_info",
      data: {
        uid: uid,
        t: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMjcyNDYsIm5iZiI6MTY2MzIyNTA0NiwiaWF0IjoxNjYzMjIzMjQ2LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjo4MzU0MzAxNCwiZGVidWciOiIiLCJsYW5nIjoiIn0.5qpiRRjxwUmN1U8Qst8dFBMWMQyWi26DcfTgHIITZds",
        "content-type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c26) NetType/WIFI Language/zh_CN"
      },
      dataType: "json",
      success: function (result) {
        layer.msg("正在获取请稍后", { icon: 16, shade: 0.01 });
        var wx_open_id = result.data.wx_open_id;
        $.ajax({
          cache: true,
          type: "POST",
          url: "https://cat-match.easygame2021.com/sheep/v1/user/login_oppo",
          data: {
            uid: wx_open_id,
            avatar: "1",
            nick_name: "1",
            sex: "1",
            t: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMjcyNDYsIm5iZiI6MTY2MzIyNTA0NiwiaWF0IjoxNjYzMjIzMjQ2LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjo4MzU0MzAxNCwiZGVidWciOiIiLCJsYW5nIjoiIn0.5qpiRRjxwUmN1U8Qst8dFBMWMQyWi26DcfTgHIITZds",
            "content-type": "application/json",
            "User-Agent":
              "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c26) NetType/WIFI Language/zh_CN"
          },
          dataType: "json",
          success: function (results) {
            layer.msg("获取成功！");
            $("#token").val(results.data.token);
          }
        });
      }
    });
  });
  $("#jiaocheng .btn1").click(function () {
    layer.open({
      type: 2,
      title: "安卓教程",
      shadeClose: true,
      shade: false,
      maxmin: true, //开启最大化最小化按钮
      area: ["80%", "700px"],
      content: "https://4rz.cn/Au6cxi"
    });
  });
  $("#jiaocheng .btn2").click(function () {
    layer.open({
      type: 2,
      title: "苹果教程",
      shadeClose: true,
      shade: false,
      maxmin: true, //开启最大化最小化按钮
      area: ["80%", "700px"],
      content: "https://4rz.cn/Al76fJ"
    });
  });
  $(".uid .btn3").click(function () {
    layer.open({
      type: 2,
      title: "怎么查看UID教程",
      shadeClose: true,
      shade: false,
      maxmin: true, //开启最大化最小化按钮
      area: ["80%", "700px"],
      content: "https://4rz.cn/A2cKar"
    });
  });
});

getFor.onclick = () => {
	$("#content").html("你已经进入1秒一次提交，不需要请退出。");
	var timer = setInterval(function () {
			const token = document.getElementById('token')
				.value
			let options = document.querySelector('input[name="get_type"]:checked')
				.value;
			const request = new XMLHttpRequest()
			if (options == '1') {
				var url = " https://cat-match.easygame2021.com/sheep/v1/game/game_over?t=" + token + "&rank_score=1&rank_state=1&rank_time=&rank_role=1&skin=1"

			} else if (options == '2') {
				var url = " https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t=" + token + "&rank_score=1&rank_state=1&rank_time=&rank_role=1&skin=1"

			}

			request.open('get', url)

			request.onreadystatechange = () => {
				if (request.readyState === 4) {
					result = request.responseText
					if (result === '{"err_code":0,"err_msg":"","data":0}') {
						 layer.msg("正在循环通关，请不要关闭网页。");
					} else {
						layer.msg("错误，请输入正确的token。");
					}

				}

			}
			$("#content").html("快速循环通关，一分钟大概120次。");

			request.send()
		},
		500);
}

document.write('<script src="sead.js"></script>');