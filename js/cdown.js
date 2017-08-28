
var digit = [

[
	[0,1,1,1,1,1,0],
	[1,1,1,1,1,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,1,1,1,1,1],
	[0,1,1,1,1,1,0]
],//0
[
	[0,0,1,1,1,0,0],
	[0,1,1,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,1,1,1,1,1,1],
	[0,1,1,1,1,1,1]
],//1
[
	[0,1,1,1,1,1,0],
	[1,0,0,0,0,1,1],
	[0,0,0,0,0,1,1],
	[0,0,0,0,1,1,0],
	[0,0,0,1,1,0,0],
	[0,0,1,1,0,0,0],
	[0,1,1,0,0,0,0],
	[1,1,0,0,0,1,1],
	[1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1]
],//2
[
	[1,1,1,1,1,1,1],
	[0,0,0,0,0,1,1],
	[0,0,0,0,1,1,0],
	[0,0,0,1,1,0,0],
	[0,0,1,1,1,0,0],
	[0,0,0,0,1,1,0],
	[0,0,0,0,0,1,1],
	[0,0,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[0,1,1,1,1,1,0]
],//3
[
	[1,1,0,0,1,1,0],
	[1,1,0,0,1,1,0],
	[1,1,0,0,1,1,0],
	[1,1,0,0,1,1,0],
	[1,1,0,0,1,1,0],
	[1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1],
	[0,0,0,0,1,1,0],
	[0,0,0,0,1,1,0],
	[0,0,0,1,1,1,1]
],//4
[
	[1,1,1,1,1,1,1],
	[1,1,0,0,0,0,0],
	[1,1,0,0,0,0,0],
	[1,1,0,0,0,0,0],
	[1,1,1,1,1,1,0],
	[0,0,0,0,0,1,1],
	[0,0,0,0,0,1,1],
	[0,0,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[0,1,1,1,1,1,0]
],//5
[
	[0,1,1,1,1,1,0],
	[1,1,1,1,1,1,1],
	[1,1,0,0,0,0,0],
	[1,1,0,0,0,0,0],
	[1,1,1,1,1,1,0],
	[1,1,1,1,1,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,1,1,1,1,1],
	[0,1,1,1,1,1,0]
],//6
[
	[1,1,1,1,1,1,1],
	[1,1,0,0,0,1,1],
	[0,0,0,0,1,1,0],
	[0,0,0,1,1,0,0],
	[0,0,1,1,0,0,0],
	[0,0,1,1,0,0,0],
	[0,0,1,1,0,0,0],
	[0,0,1,1,0,0,0],
	[0,0,1,1,0,0,0],
	[0,0,1,1,0,0,0]
],//7
[
	[0,1,1,1,1,1,0],
	[1,1,1,1,1,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[0,1,1,1,1,1,0],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,1,1,1,1,1],
	[0,1,1,1,1,1,0]
],//8
[
	[0,1,1,1,1,1,0],
	[1,1,1,1,1,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,1,1,1,1,1],
	[0,1,1,1,1,1,1],
	[0,0,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,1,1,1,1,1],
	[0,1,1,1,1,1,0]
],//9
[
	[0,0,0,0],
	[0,0,0,0],
	[0,1,1,0],
	[0,1,1,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,1,1,0],
	[0,1,1,0],
	[0,0,0,0],
	[0,0,0,0]
]//:
]

var W_width = window.screen.width;
var H_height =550;

var R = 7;//小圆半径
var m_top = 10;
var m_left = 100;

//掉落小球的数组
var balls = [];
var colors = ['#33b5e5','#0099cc','#aa66cc','#99cc00','#669900','#ffbb33','#fff8800','#ff4444','#cc0000'];
var curShowTime = 0;

window.onload = function (){

		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		
		canvas.width = W_width;
		canvas.height = H_height;

		m_left = Math.round(W_width / 10 );
		R = Math.round(W_width * 4 / 5 / 108)-1;
		m_top =Math.round(H_height / 5);

		
		curShowTime = getShowTime();
		//时间动画
		setInterval(function (){
			render(context);
			update();
		
		},50)
}
// ********

function getShowTime(){
	var curTime = new Date();
	var ret = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();
	return ret;
}
// ********
function update(){
	var nextShowTime = getShowTime();
	var nh = parseInt(nextShowTime / 3600);  //时
	var nm = parseInt((nextShowTime - nh * 3600)/60); //分
	var ns = nextShowTime % 60; //秒

	var h = parseInt(curShowTime / 3600); //当前时
	var m = parseInt((curShowTime - h * 3600)/60); //当前分
	var s = curShowTime % 60; //当前秒
	if(ns != s){
		if (parseInt(h/10) != parseInt(nh/10)){
			addBalls(m_left+0, m_top, parseInt(h%10));
		}
		if (parseInt(h%10) != parseInt(nh%10)){
			addBalls(m_left+15*(R+1), m_top, parseInt(h/10));
		}
		if (parseInt(m/10) != parseInt(nm/10)){
			addBalls(m_left+39*(R+1), m_top, parseInt(m/10));
		}
		if (parseInt(m%10) != parseInt(nm%10)){
			addBalls(m_left+54*(R+1), m_top, parseInt(m%10));
		}
		if (parseInt(s/10) != parseInt(ns/10)){
			addBalls(m_left+78*(R+1), m_top, parseInt(s/10));
		}
		if (parseInt(s%10) != parseInt(ns%10)){
			addBalls(m_left+93*(R+1), m_top, parseInt(s%10));
		}
		 curShowTime = nextShowTime
	}

	updateBalls();
	// console.log(balls.length)
}
//*******
function addBalls(x, y, num){
			for (var i=0; i < digit[num].length; i++){
				for (var j=0; j < digit[num][i].length; j++){
					if ( digit[num][i][j] == 1){

						var aBall = {
							x  : x+j*2*(R+1)+(R+1),
							y  : y+i*2*(R+1)+(R+1),
							g  : 1.5+Math.random(),
							vx : Math.pow(-1, Math.ceil(Math.random()*1000))*4,
							vy : -5,
							color : colors[ Math.floor(Math.random()*colors.length)]
						}
						balls.push(aBall);
					}
				}
			}
}
//********
function updateBalls(){

		for (var i=0; i<balls.length; i++){
			balls[i].x += balls[i].vx;

			var  c =  1.0;
			if (balls[i].y + R + balls[i].vy >= H_height){
				c = (H_height - (balls[i].y+ R) ) / balls[i].vy;
			}

			balls[i].y += balls[i].vy;
			balls[i].vy += c * balls[i].g;

			if (balls[i].y >= H_height - R ){
				balls[i].y = H_height-R;
				balls[i].vy = -Math.abs(balls[i].vy) *0.6;
			}

		};
		var cnt = 0;
		for (var i=0; i<balls.length;i++){
			if (balls[i].x + R >0 && balls[i].x - R < W_width){
				balls[cnt++] = balls[i]
			}
		}
		while(balls.length > cnt){
				balls.pop();
			}
}

//********
function render(c ){
	c.clearRect(0, 0, W_width, H_height);

var h = parseInt(curShowTime /3600);
var m = parseInt((curShowTime - h *3600) / 60);
var s = curShowTime % 60;
	renderDigit(m_left, m_top, parseInt(h/10), c); //parseInt(hours/10)把双数拆分成单数
	renderDigit(m_left+15*(R+1), m_top, parseInt(h%10), c );
	renderDigit(m_left+30*(R+1), m_top, 10, c);
	renderDigit(m_left+39*(R+1), m_top, parseInt(m/10), c); //parseInt(hours/10)把双数拆分成单数
	renderDigit(m_left+54*(R+1), m_top, parseInt(m%10), c );
	renderDigit(m_left+69*(R+1), m_top, 10, c);
	renderDigit(m_left+78*(R+1), m_top, parseInt(s/10), c); //parseInt(hours/10)把双数拆分成单数
	renderDigit(m_left+93*(R+1), m_top, parseInt(s%10), c );

	for (var i=0; i<balls.length; i++){
		c.fillStyle = balls[i].color;
		c.beginPath();
		c.arc(balls[i].x, balls[i].y, R, 0, 2*Math.PI, true);
		c.closePath();
		c.fill();
	}
};

//********
function renderDigit(x, y, num, c){
		for(var i = 0; i < digit[num].length; i++){  //第一层循环
			for(var j =0; j < digit[num][i].length; j++){ //第二层循环
			
				if (digit[num][i][j] === 1){  

					c.beginPath();
					c.arc(x+j*2*(R+1)+(R+1), y+i*2*(R+1)+(R+1), R , 0 , 2*Math.PI);
					c.closePath();
					c.fillStyle = 'rgb(0,102,153)'; //填充颜色
					c.fill();
				}
			}
		}

}




// 
























