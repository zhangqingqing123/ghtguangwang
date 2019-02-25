<template>
	<div class="about-container">
		<!--<div class="home-swiper">-->
			<!--<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide><img src="../assets/img/advantage/advan-banner.png" alt="" /></swiper-slide>
				<div class="swiper-pagination " slot="pagination"></div>
				<div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
				<div class="swiper-button-next swiper-button-black" slot="button-next"></div>
			</swiper>-->
			<div class="home-swiper">
				<el-row :gutter="0">
				  <el-col :xs="24" :sm="24" style="text-align: center;">
					<div class="home-image">
						<img v-for="(aboutImg,index) in aboutList"   :src="aboutImg.imgPath" alt="" />
					</div>
				  </el-col>			  
				</el-row>
			</div>
		<!--</div>-->
		<div class="content">
			<el-row :gutter="0">
			  <el-col :xs="24" :sm="24" style="text-align: center;">				
				<div class="theme-image">
					<img src="../assets/img/about/about-01.png" alt="" />
				</div>
				<div class="theme-words">
					<div class="theme-detail">贡和堂缘起：中国是茶的故乡，饮茶是一种回归，而健康和养生成为现代人完美生活的风向标，素食和民宿便成为放松身心的首选。然而，中国茶产业经过几十年的快速 发展，茶企数量已经突破十五万家，但普遍存在茶企规模小，茶叶门店大多门可罗雀，茶产业缺乏文化价值附加等问题；消费人群日趋庞大的素食产业普遍面临客单价低，商家“赚了流量但不赚钱”，素食产业经营者更是出于发心和有大福报的信念而在坚持，然而经营却难以为继，缺乏可持续发展模式；民宿产业则普遍面临“旺季太旺，淡季太淡”的发展瓶颈，民宿需要更多的文化元素导入。为此，浙江贡和堂茶旅投资开发有限公司开发了“贡和堂”平台，通过整合“禅·茶·素”相关的众多产业，通过跨界融合解决各大产业的发展痛点，实现同舟共济，和济共生。</div>
				</div>
			  </el-col>			  
			</el-row>
			<el-row :gutter="0"  class='idea-content'>
			  <el-col :xs="24" :sm="12" style="text-align: center;">				
				<div class="idea-image">
					<img src="../assets/img/about/about-05.png" alt="" />
				</div>
			  </el-col>
			  <el-col :xs="24" :sm="12" style="text-align: center; margin-bottom: 50px;">
			  	<div class="idea-theme-image">
					<img src="../assets/img/about/about-02.png" alt="" />
				</div>
				<div class="idea-words">				
					<div class="idea-title">贡和堂将中国“禅和文化、禅茶文化、素食文化”融入平台。</div>
					<div class="idea-title">品牌以“贡享和谐，和济共生”的核心理念入手，整合运营，使一二三产业跨界融合，同舟共济，和济共生，做禅和文化产业整合平台的引领者。</div>				
				</div>
				<div class="position-idea-image">
					<img src="../assets/img/about/about-09.png" alt="" />
				</div>
			  </el-col>
			</el-row>
			
			<el-row :gutter="0"  class='idea-content'>
			  <el-col :xs="24" :sm="12" style="text-align: center;">
			  	<div class="idea-theme-image">
					<img src="../assets/img/about/about-03.png" alt="" />
				</div>
				<div class="position-idea-words">				
					<div class="position-idea-title">注重“禅和文化、禅茶文化、素食文化”内涵的体现。</div>
					<div class="position-idea-title">以打造禅生活为主线，跨界融合“禅·茶·素”相关产业。</div>				
					<div class="position-idea-title">创造具有“禅和文化”气息的高端整合型大平台。</div>				
				</div>
			  </el-col>
			  <el-col :xs="24" :sm="12" style="text-align: center;">
				<div class="idea-image">
					<img src="../assets/img/about/about-06.png" alt="" />
				</div>
			  </el-col>
			</el-row>
			
			<el-row :gutter="0"  class='bgimg'>
			  <el-col :xs="24" :sm="12" style="text-align: center;">				
				<div class="vision-idea-image">
					<img src="../assets/img/about/about-07.png" alt="" />
				</div>
			  </el-col>
			  <el-col :xs="24" :sm="12" style="text-align: center;">
			  	<div class="vision-theme-image">
					<img src="../assets/img/about/about-04.png" alt="" />
				</div>
				<div class="vision-idea-words">				
					<div class="vision-idea-title">“贡和堂”愿意贡享世间美好万物，促进人与生命、人与社会、人与自然、人与动物的和谐。融合扶持禅、茶、素三大产业，协同解决单个产业发展困难、经营不善等难关，精准扶贫，共生发展，使一二三产业跨界融合，同舟共济，和济共生。</div>
					<div class="vision-idea-title">“贡和堂”建立完善的溯源体系和现代化农场，在材料（禅茶、素食材料）源头制定严格的筛选标准，保证每份材料到消费者手中都是安全、可追溯的放心好产品。</div>
					<div class="vision-idea-title">“贡和堂”打造各类禅创空间体验禅修生活，品禅茶、食禅素、习禅武、闻禅乐、阅禅文等，即“生活有禅方为和”；开设国学讲堂，传播国学经典，弘扬“禅和文化”。</div>
					<div class="vision-idea-title">贡和堂秉持初心—贡享和谐，和济共生。</div>
				</div>
			  </el-col>
			</el-row>

		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	export default {
		data() {
			return {
				aboutList:[],
				swiperOption: {
					notNextTick: true,					
					loop: true,//循环					
					initialSlide: 0,//设定初始化时slide的索引					
					autoplay: true,//自动播放
					effect: 'coverflow',// 设置轮播					
					speed: 800,//滑动速度					
					direction: 'horizontal',//滑动方向
					//滑动之后回调函数
					on: {
						slideChangeTransitionEnd: function() {
							// console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
						},
					},
					//左右点击
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					//分页器设置         
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				},
				swiperSlides: [1, 2, 3, 4]
			}
		},
		methods: {
			init() {
				this.axios.get('/api/about/info').then(   
					response => {
						console.log(response)
						this.aboutList = response.data.about_us
					},
					response => {
						// error callback
					}
				)
			}
		},
		created() {
		  this.init()
		}
	}
</script>

<style scoped >
[v-cloak]{
			display: none;
		}
	*{
		font-family: "微软雅黑";
	}
	.home-swiper{
		width: 100%;
	}
	.home-image{
		width: 100%;
		margin-top: 5rem;	
	}
	.home-image img{
		width:100%;
		height: auto;
	}
	.content{
		/*width: 75%;*/
		margin: 0 auto;	
	}
	.idea-content{
		max-width: 75%;
		margin: 0 auto;
	}
	.theme-image{
		max-width:75%;
		margin: 0 auto;
	}
	.theme-image img{
		width: 25%;
		margin: 35px 0px 35px 0px;
	}
	.theme-words{
		width:75%;
		margin: 0 auto;
		padding-bottom:40px;
    }
    .theme-words .theme-detail{
    	font-size: 16px;
    	color:rgba(3,3,3,1);
		line-height:32px;
		letter-spacing:2px;
    	text-align: justify;
    	/*margin-bottom: 22px;*/
    }
    .idea-image{
      width: 100%;
     
      
    }
    .idea-image img{
    	width: 100%;
    	height: auto;
    	margin: 30px auto;
    }
    .idea-theme-image{
    	max-width: 100%;
    	margin: 0 auto;
    }
    .idea-theme-image img{
    	width:60%;
    }
    .idea-words{
    	width: 75%;
    	margin: 0 auto;
    	text-align: left;
    	padding-top: 30px;
    }
    
    .idea-words .idea-title{
    	font-size: 16px;
    	color:rgba(3,3,3,1);
		line-height:32px;
		letter-spacing: 0.2rem;
    	text-align: justify;
    	/*margin-bottom: 22px;*/	
    }
    .position-idea-words {
    	margin: 0 auto;
    	text-align: left;
    	max-width: 75%;
    	padding-top: 30px;
    }
    .position-idea-words .position-idea-title{
    	font-size: 16px;
    	color:rgba(3,3,3,1);
		line-height:32px;
		letter-spacing: 2px;
    	/*margin-bottom: 22px;*/
    	text-align: justify;
    }
    .position-idea-image{
    	max-width:100%;
    	margin: 0 auto;
    }
    .position-idea-image img{
    	width: auto;
    	height: auto;
    }
    .bgimg{
    	width: 100%;
    	height: auto;
    	background: url(../assets/img/about/about-08.png) no-repeat;
	    background-color: #fff;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-top: 200px;
    }
    .vision-idea-image{
    	width: 100%;
    	margin: 0 auto;
    }
    .vision-idea-image img{
        max-width: 450px;
    	max-height: 800px;
    	margin-top: -250px;
    	margin-bottom: 50px;
    }
    .vision-theme-image{
    	max-width: 75%;
    	margin-top: -180px;
    }
    .vision-theme-image img{
    	margin: 95px 0px 0px 0px;
    }
    .vision-idea-words{
    	width: 75%;
    	text-align: left;
    	margin-top: 80px;
    }
    .vision-idea-words .vision-idea-title{
    	font-size: 16px;
    	color:rgba(3,3,3,1);
		line-height:32px;
		letter-spacing: 0.2rem;
		text-align: justify;
    	/*margin-bottom: 22px;*/	
    }
    
    /*当窗口大于1441px*/
	@media only screen and (max-width: 1441px) {
		
	   
	}
	/*当窗口大于1200px*/
	@media screen and (min-width: 1200px) and (max-width: 1440px) {
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.home-image{
			width: 100%;
			margin-top: 5rem;		
		}
		.home-image img{
			width:100%;				
		}
		.content{
			/*width: 85%;*/
			margin: 0 auto;	
		}
		.idea-content{
			max-width:85%;
		}
		.theme-image{
			width:85%;
			margin: 0 auto;
		}
		.theme-image img{
			width: 30%;
			margin: 1.5rem 0rem 1.5rem 0rem;
		}
		.theme-words{
			width:85%;
			margin: 0 auto;
			padding-bottom: 3rem
	    }
	    .theme-words .theme-detail{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .idea-image{
	    	width:100%;
    		margin: 3rem auto;    		
	    }
	    .idea-image img{
	    	max-width:100%;
	    	height: auto;
	    }
	    .idea-theme-image{
	    	max-width: 100%;
	    	margin: 0 auto;
	    }
	    .idea-theme-image img{
	    	width: 60%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .idea-words{
	    	width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .idea-words .idea-title{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom:0rem;	
	    }
	     .position-idea-image{
	     	width: 100%;
	    	margin: 0 auto;
	    }
	    .position-idea-image img{
	    	width: 100%;
	    }
	     .position-idea-words {
	     	max-width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .position-idea-words .position-idea-title{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .vision-idea-image{
	    	width: 85%;
	    	margin: 0 auto;
	    }
	    .vision-idea-image img{
	        width: auto;
	        height: auto;
	        margin-bottom: 2.5rem;
	    	margin-top: -17rem;
	    }
	    .vision-theme-image{
	    	max-width: 85%;
	    	padding-top:4rem;
	    }
	    .vision-theme-image img{
	    	width: 55%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .vision-idea-words{
	    	width: 85%;
	    	text-align: left;
	    }
	    .vision-idea-words .vision-idea-title{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;	
	    }
	    .bgimg{
	    	width: 100%;
	    	height: auto;
	    	background: url(../assets/img/about/about-08.png) no-repeat;
		    background-color: #fff;
			background-repeat: no-repeat;
			background-size: 100% 100%;
	    }
	}
	/*1100分辨率（大于960px，小于1199px）*/
	@media screen and (min-width: 1024px) and (max-width: 1199px) {
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.home-image{
			width: 100%;
			margin-top: 5rem;		
		}
		.home-image img{
			width:100%;				
		}
		.content{
			width: 100%;
			margin: 0 auto;	
		}
		.idea-content{
			max-width: 90%;
		}
		.theme-image{
			width:90%;
			margin: 0 auto;
		}
		.theme-image img{
			width: 30%;
			margin: 1.5rem 0rem 1.5rem 0rem;
		}
		.theme-words{
			width:90%;
			margin: 0 auto;
			padding-bottom: 3rem
	    }
	    .theme-words .theme-detail{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .idea-image{
	    	width: 100%;
    		margin: 8rem auto;   		
	    }
	    .idea-image img{
	    	width: 100%;
	    	height: auto;
	    }
	    .idea-theme-image{
	    	width: 100%;
	    	margin: 0 auto;
	    }
	    .idea-theme-image img{
	    	width: 60%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .idea-words{
	    	width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .idea-words .idea-title{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom:0rem;	
	    }
	     .position-idea-image{
	     	width: 100%;
	    	margin: 0 auto;
	    }
	    .position-idea-image img{
	    	width: 90%;
	    }
	     .position-idea-words {
	     	max-width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .position-idea-words .position-idea-title{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .vision-idea-image{
	    	width: 90%;
	    	margin: 0 auto;
	    }
	    .vision-idea-image img{
	        width: auto;
	        height: auto;
	        margin-bottom: 2.5rem;
	    	margin-top: -12rem;
	    }
	    .vision-theme-image{
	    	width: 90%;
	    	padding-top: 2rem;
	    }
	    .vision-theme-image img{
	    	width: 60%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .vision-idea-words{
	    	width: 90%;
	    	text-align: left;
	    }
	    .vision-idea-words .vision-idea-title{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;	
	    }
	    .bgimg{
	    	width: 100%;
	    	height: auto;
	    	background: url(../assets/img/about/about-08.png) no-repeat;
		    background-color: #fff;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-top: 4rem;
	    }
		
	}
	/*880分辨率（大于768px，小于959px）*/
	@media screen and (min-width: 768px) and (max-width: 1023px) {
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.home-image{
			width: 100%;
			margin-top: 8rem;			
		}
		.home-image img{
			width:100%;	
		}
		.content{
			width: 100%;
			margin: 0 auto;	
		}
		.idea-content{
			max-width: 90%;
		}
		.theme-image{
			width:90%;
			margin: 0 auto;
		}
		.theme-image img{
			width: 38%;
			margin: 1.5rem 0rem 1.5rem 0rem;
		}
		.theme-words{
			width: 90%;
			margin: 0 auto;
	    }
	    .theme-words .theme-detail{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .idea-image{
	    	width: 100%;
    		height: auto;
    		margin: 10rem auto;
	    }
	    .idea-image img{
	    	width: 100%;
	    	height: auto;
	    }
	    .idea-theme-image{
	    	width: 100%;
	    	margin: 0 auto;
	    }
	    .idea-theme-image img{
	    	width: 60%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .idea-words{
	    	width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .idea-words .idea-title{
	    	font-size: 16px;
	    	/*font-size: 0.9rem;*/
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom:0rem;	
	    }
	     .position-idea-image{
	     	width: 100%;
	    	margin: 0 auto;
	    }
	    .position-idea-image img{
	    	width: 100%;
	    }
	     .position-idea-words {
	     	max-width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .position-idea-words .position-idea-title{
	    	/*font-size: 0.9rem;*/
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .vision-idea-image{
	    	width: 90%;
	    	margin: 0 auto;
	    }
	    .vision-idea-image img{
	        max-width: 65%;
	        height: auto;
	        margin-top: -13rem;
	    	margin-bottom: 2.5rem;
	    }
	    .vision-theme-image{
	    	max-width: 90%;
	    	padding-top: 2rem;
	    }
	    .vision-theme-image img{
	    	width: 60%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .vision-idea-words{
	    	width: 90%;
	    	text-align: left;
	    }
	    .vision-idea-words .vision-idea-title{
	    	font-size: 16px;
	    	/*font-size: 0.9rem;*/
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;	
	    }
	    .bgimg{
	    	width: 100%;
	    	height: auto;
	    	background: url(../assets/img/about/about-08.png) no-repeat;
		    background-color: #fff;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-top: 4rem;
	    }
	}
	/*720分辨率（大于480px，小于767px）*/
	@media only screen and (min-width: 480px) and (max-width: 767px){
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.home-image{
			width: 100%;
			margin-top: 6rem;		
		}
		.home-image img{
			width:100%;				
		}
		.content{
			width: 100%;
			margin: 0 auto;	
		}
		.idea-content{
			max-width: 90%;
		}
		.theme-image{
			width:90%;
			margin: 0 auto;
		}
		.theme-image img{
			width: 55%;
			margin: 1.5rem 0rem 1.5rem 0rem;
		}
		.theme-words{
			width: 90%;
			margin: 0 auto;
	    }
	    .theme-words .theme-detail{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .idea-image{
	    	width: 100%;
    		margin: 0 auto;
	    }
	    .idea-image img{
	    	width: 70%;
	    	height: auto;
	    }
	    .idea-theme-image{
	    	width: 100%;
	    	margin: 0 auto;
	    }
	    .idea-theme-image img{
	    	width: 55%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .idea-words{
	    	width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .idea-words .idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom:0rem;	
	    }
	     .position-idea-image{
	     	width: 100%;
	    	margin: 0 auto;
	    }
	    .position-idea-image img{
	    	width: 75%;
	    }
	     .position-idea-words {
	     	max-width:100%;
	     	height: auto;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .position-idea-words .position-idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .vision-idea-image{
	    	width: 90%;
	    	margin: 0 auto;    	
	    }
	    .vision-idea-image img{
	        max-width: 55%;
	        height: auto;
	        margin-bottom: 2.5rem;
	        margin-top: -22rem;
	    }
	    .vision-theme-image{
	    	width: 90%;
			margin: 0 auto;
	    }
	    .vision-theme-image img{
	    	width: 55%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .vision-idea-words{
	    	text-align: left;
	    	margin: 0 auto;
    		width: 90%;
    		height: auto;
	    }
	    .vision-idea-words .vision-idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;	
	    }
	    .bgimg{
	    	width: 100%;
	    	height: auto;
	    	background: url(../assets/img/about/about-08.png) no-repeat;
		    background-color: #fff;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-top: 23rem;
	    }
	}
	/*440分辨率以下（小于479px）*/
	@media only screen and (min-width: 321px) and (max-width: 479px){
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.home-image{
			width: 100%;
			margin-top: 6rem;		
		}
		.home-image img{
			width:100%;	
			height: auto;			
		}
		.content{
			width: 100%;
			margin: 0 auto;	
		}
		.idea-content{
			max-width: 90%;
		}
		.theme-image{
			max-width:90%;
			margin: 0 auto;
		}
		.theme-image img{
			width: 65%;
			margin: 1.5rem 0rem 1.5rem 0rem;
		}
		.theme-words{
			width: 90%;
			margin: 0 auto;
	    }
	    .theme-words .theme-detail{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .idea-image{
	    	width: 100%;
    		margin: 0 auto;
	    }
	    .idea-image img{
	    	width: 90%;
	    	height: auto;
	    }
	    .idea-theme-image{
	    	width: 90%;
	    	margin: 0 auto;
	    }
	    .idea-theme-image img{
	    	width: 65%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .idea-words{
	    	width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .idea-words .idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom:0rem;	
	    }
	    .position-idea-image{
	     	width: 90%;
	    	margin: 0 auto;
	    }
	    .position-idea-image img{
	    	width: 70%;
	    }
	     .position-idea-words {
	     	max-width: 100%;
	     	height: auto;
	    	margin: 0 auto;
	    	text-align: left;
	    }
	    .position-idea-words .position-idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .vision-idea-image{
	    	width: 90%;
	    	margin: 0 auto;
	    }
	    .vision-idea-image img{
	    	margin-top: -22rem;
	    	margin-bottom: 2.5rem;
	        width: 55%;
	        height: auto;
	    }
	    .vision-theme-image{
	    	width: 90%;
			margin: 0 auto;
	    }
	    .vision-theme-image img{
	    	width: 65%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .vision-idea-words{
	    	text-align: left;
	    	margin: 0 auto;
    		width: 90%;
    		height: auto;
	    }
	    .vision-idea-words .vision-idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;	
	    }
	    .bgimg{
	    	width: 100%;
	    	height: auto;
	    	background: url(../assets/img/about/about-08.png) no-repeat;
		    background-color: #fff;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-top: 23rem;
	    }

	}
	/*（小于320px）*/
	@media only screen and (max-width: 320px) {
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.home-image{
			width: 100%;
			margin-top: 6rem;			
		}
		.home-image img{
			width:100%;	
			height: auto;			
		}
		.content{
			width: 100%;
			margin: 0 auto;	
		}
		.idea-content{
			max-width: 90%;
		}
		.theme-image{
			width:90%;
			margin: 0 auto;
		}
		.theme-image img{
			width: 65%;
			margin: 1.5rem 0rem 1.5rem 0rem;
		}
		.theme-words{
			width: 90%;
			margin: 0 auto;
	    }
	    .theme-words .theme-detail{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .idea-image{
	    	width: 100%;
    		margin: 0 auto;
	    }
	    .idea-image img{
	    	width: 95%;
	    	height: auto;
	    	margin: 0 auto;
	    }
	    .idea-theme-image{
	    	max-width: 100%;
	    	margin: 0 auto;
	    }
	    .idea-theme-image img{
	    	width: 65%;
	    }
	    .idea-words{
	    	width: 100%;
	    	margin: 0 auto;
	    	text-align: left;
	    	padding-top:15px ;
	    }
	    .idea-words .idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
	    	letter-spacing: 0.2rem;
	    	margin-bottom:0rem;	
	    }
	     .position-idea-image{
	     	width: 100%;
	    	margin: 0 auto;
	    }
	    .position-idea-image img{
	    	width: 75%;
	    }
	     .position-idea-words {
	     	max-width:100%;
	     	height: auto;
	    	margin: 0 auto;
	    	text-align: left;
	    	padding-top: 15px;
	    }
	    .position-idea-words .position-idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;
	    }
	    .vision-idea-image{
	    	width: 90%;
	    	margin: 0 auto;
	    }
	    .vision-idea-image img{
	    	margin-top: -20rem;
	    	margin-bottom: 2.5rem;
	        width: 55%;
	        height: auto;
	    }
	    .vision-theme-image{
	    	width: 90%;
			margin: 0 auto;
	    }
	    .vision-theme-image img{
	    	width: 65%;
	    	margin: 1.5rem 0rem 1.5rem 0rem;
	    }
	    .vision-idea-words{
	    	text-align: left;
	    	margin: 0 auto;
    		width: 90%;
    		height: auto;
	    }
	    .vision-idea-words .vision-idea-title{
	    	font-size: 16px;
	    	color:rgba(3,3,3,1);
			line-height:3.2rem;
			letter-spacing: 0.2rem;
	    	margin-bottom: 0rem;	
	    }
	    .bgimg{
	    	width: 100%;
	    	height: auto;
	    	background: url(../assets/img/about/about-08.png) no-repeat;
		    background-color: #fff;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-top: 23rem;
	    }
	}
</style>