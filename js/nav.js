$(function(){
	$('#noticeBorder').hover(function(){
		$(this).css('color','write')
	})
})
// 新闻轮播
$(function(){
	let n = 0;
		$(" #newsPhoto_ul li").css("background-color","white")//所有的li初始颜色为白色
	
		$(".NewsLunbo img").hide()//将所有图片隐藏,显示第一张
	
		$(" #newsPhoto_ul li").mouseenter(function(){//mouseenter鼠标经过事件
	
		   //console.log(this)
	
			n = $(this).index()//获取当前选择项
	
			$(".NewsLunbo img").hide().eq(n).show()//显示当前图片
	
			$(" #newsPhoto_ul li").css("background-color","red")//鼠标离开后显示为红色
	
			$(this).css("background-color","white")//鼠标停留时显示为白色
		})
		//设置循环条件
		function lunbo(){
		   if(n<3){n = n+1}
			 else{n = 0}
		$(".NewsLunbo img").hide().eq(n).show()
		}
		var time = setInterval(lunbo,1500);//设置轮播时间
	
})

// 教师图片轮播图
$(function(){
	var swiper = new Swiper('.swiper-container', {
	slidesPerView: 7,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	});
})
$(function(){
	$('.navListOne li').hover(function(){
		//children是选择所有.menu li中的ul元素
		//alert('成功')
		 $(this).children('ul').toggle()
		 $(this).children('.triangle').toggle()
	})
})
$(function(){    
		$('#nav_li1').hover(function(){
				console.log('鼠标移入')
				$('#nav_div1').css('background','orange')
			},function(){
				console.log('鼠标移出')
				$('#nav_div1').css('background','')
			})
		$('#nav_li2').hover(function(){
				console.log('鼠标移入')
				$('#nav_div2').css('background','orange')
			},function(){
				console.log('鼠标移出')
				$('#nav_div2').css('background','')
			})
		$('#nav_li3').hover(function(){
				console.log('鼠标移入')
				$('#nav_div3').css('background','orange')
			},function(){
				console.log('鼠标移出')
				$('#nav_div3').css('background','')
			})
		$('#nav_li4').hover(function(){
				console.log('鼠标移入')
				$('#nav_div4').css('background','orange')
			},function(){
				console.log('鼠标移出')
				$('#nav_div4').css('background','')
			})
		$('#nav_li5').hover(function(){
				console.log('鼠标移入')
				$('#nav_div5').css('background','orange')
			},function(){
				console.log('鼠标移出')
				$('#nav_div5').css('background','')
			})
		$('#nav_li6').hover(function(){
				console.log('鼠标移入')
				$('#nav_div6').css('background','orange')
			},function(){
				console.log('鼠标移出')
				$('#nav_div6').css('background','')
			})
		$('#nav_li7').hover(function(){
				console.log('鼠标移入')
				$('#nav_div7').css('background','orange')
			},function(){
				console.log('鼠标移出')
				$('#nav_div7').css('background','')
			})
		$('#nav_li8').hover(function(){
				console.log('鼠标移入')
				$('#nav_div8').css('background','orange')
			},function(){
				console.log('鼠标移出')
				$('#nav_div8').css('background','')
			})
})

