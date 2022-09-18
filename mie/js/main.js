getUser.onclick = () => {
	const token = document.getElementById('token').value
	let options =  document.querySelector('input[name="get_type"]:checked').value;
	const request = new XMLHttpRequest()

	if (options == '1') {
		var url = " https://cat-match.easygame2021.com/sheep/v1/game/game_over?t=" + token + "&rank_score=1&rank_state=1&rank_time=&rank_role=1&skin=1"

	} else if (options == '2') {
		var url = "https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?t=" + token + "&rank_score=1&rank_state=1&rank_time=&rank_role=1&skin=1"

	}

	request.open('get', url)
	request.onreadystatechange = () => {
		if (request.readyState === 4) {
			result = request.responseText
			if (result === '{"err_code":0,"err_msg":"","data":0}') {
				mdui.snackbar({
					message: "记录添加成功，请在小程序我的名片查看记录",
					position: 'top',
				})
			} else {
				mdui.snackbar({

					message: "没有权限，token错误",
					position: 'top',
				})
			}

		}

	}
	console.log("1条记录添加成功，请在小程序我的名片查看记录")

	request.send()
}