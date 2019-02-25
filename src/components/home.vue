<template>
	<div class="home-container">
		<div class="home-swiper">
			<img v-for="item in homeInfosBanner" class="home-containerBG" v-if="item.sort == 1" :src="item.imgPath">
			<div class="home-swiper-box">
				<div class="home-containerText">
					<img class="home-containertext01" src="../assets/img/home/ght-text01.png">
					<p class="home-containertext02">贡和堂融合“禅·茶·素”相关产业，弘扬“禅和文化”的高端整合型平台</p>
				</div>
				<div class="home-swiper_01">
					<el-row :gutter="20">
						<el-col class="home-swiper_border01" :span="12">
							<div class="" @mouseleave="getAndroidleave" @mouseenter="getAndroidenter">
								<img style="cursor: pointer;" src="../assets/img/home/android.png">
								<div class="home-swiper_box01" v-show="isAndroidShow">
									<div class="home-swiper_code01"><img class="" :src="homeInfo.app_android_user_qr_code"></div>
								</div>
							</div>

						</el-col>
						<el-col class="home-swiper_border01 " :span="12">
							<div class="" @mouseleave="getIosleave" @mouseenter="getIosenter">
								<img style="cursor: pointer;" src="../assets/img/home/ios.png">
								<div class="home-swiper_box01" v-show="isIosShow">
									<div class="home-swiper_code01"><img class="" :src="homeInfo.app_ios_user_qr_code"></div>
								</div>
							</div>

						</el-col>
					</el-row>
				</div>

				<div class="home-swiper_02">
					<div class="home-swiper_02s">
						<a href="http://other.ghtccs.com/sharing/html/dowunload.html"><img style="cursor: pointer;" src="../assets/img/home/android.png"></a>
					</div>
					<div class="home-swiper_02s">
						<a :href="homeInfo.app_ios_user_down"><img style="cursor: pointer;" src="../assets/img/home/ios.png"></a>
					</div>
				</div>
			</div>

		</div>
		<div class="home-info-1">
			<img v-for="item in homeInfosBanner" v-if="item.sort == 2" :src="item.imgPath">
			<!--<img src="../assets/img/home/1.png">-->
		</div>
		<div class="home-info-2">
			<!--<img class="home-info-2-bg" src="../assets/img/home/home_bg03.png">-->
			<img class="home-info-2-bg" v-for="item in homeInfosBanner" v-if="item.sort == 3" :src="item.imgPath">
			<!--<div class="home-info-2-box">
				<h3 class="home-info-2-title">着力打造“帮扶”能力扶持禅、茶、素三大产业共创辉煌</h3>
				<div class="home-info-2-text01">贡和堂将中国“禅和文化、禅茶文化、素食文化”融入平台。整合运营，着力打造“帮扶”能力，通过大平台战略思维，跨界发挥各行业的长板优势，补足短板，实现同舟共济，和济共生，融合发</div>
			</div>-->
		</div>
		<div class="home-info-3">
			<img class="home-info-2-bg" v-for="item in homeInfosBanner" v-if="item.sort == 4" :src="item.imgPath">
			<!--<img src="../assets/img/home/home-banner05.png">-->
			<!--<div class="home-info-3-box">
				<img class="home-info-3-text01" src="../assets/img/home/text_02.png">
				<p class="home-info-3-text02">专注于消费升级大潮中的追求健康、环保、阳光生活态度的群体，通过独有的社区口碑营销和品牌内容推广，帮助品牌更有效地渗透优质精准用户，快速可持续地增长。 </p>
			</div>-->
		</div>
		<div class="home-goods">
			<p class="home-goods-title">加入我们</p>
			<div class="home-goods-box">
				<div class="home-goods-boxs">
					<span class="home-goods-boxspan" v-for="item in homeInfosAgreement">
						<router-link class="tab-link" to="/business">
							<div class="home-goods-boxspanTop"><img :src="item.imgPath"/></div>
							<div class="home-goods-boxspanbtm">{{item.des}}</div>
						</router-link>
					</span>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import Life from './life'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	//	import API from '@/api/api'

	export default {
		data() {
			return {
				msg: "内容页面",
				homeInfo: {},
				isAndroidShow: false,
				isIosShow: false,
				homeInfosAgreement: [],
				homeInfosBanner: [],
			}

		},
		components: {
			Life,
			swiper,
			swiperSlide
		},
		methods: {
			init() {
				var _this = this ;
				this.axios.get('/api/site/info')
					.then(function(response) {
						_this.homeInfo = response.data.info

					})
					.catch(function(error) {
						console.log(error);
					});

			},
			gethomeinfo: function() {
				this.axios.get('/api/home/info').then(
					response => {
						this.homeInfosAgreement = response.data.home_agreement
						this.homeInfosBanner = response.data.home_img
						//						console.log(this.homeInfos)
					}
				)
			},
			getAndroidleave: function() {
				this.isAndroidShow = false
			},
			getAndroidenter: function() {
				this.isAndroidShow = true
			},
			getIosleave: function() {
				this.isIosShow = false
			},
			getIosenter: function() {
				this.isIosShow = true
			},
			getandcode:function(){
				 var ua = navigator.userAgent.toLowerCase();
    			if(ua.match(/MicroMessenger/i)=="micromessenger") {
    				return true;
      								this.$router.push({
			        path:homeInfo.app_android_user_down,
			    	});
    			} else {;
					console.log("not微信")
					
    			}
//				homeInfo.app_android_user_down
//				this.$router.push({
//			        path:homeInfo.app_android_user_down,
//			    });
			}
		},
		created() {
			this.init()
			this.gethomeinfo()
			this.init();

		},
		computed: {
		}
	}
</script>

<style scoped >

	.el-button{
		padding: 0;
	}
	
	* {
		font-family: "微软雅黑";
	}
	
	[v-cloak] {
		display: none;
	}
	
	.tab-link:hover {
		text-decoration: none;
		text-align: center;
	}
	
	.home-swiper_border01 img {
		width: 100%;
	}
	
	.home-swiper_box01 {
		width: 100%;
		height: 220px;
		background-color: #000000;
		margin-top: -10px;
		position: relative;
	}
	
	.home-swiper_code01 {
		border: 1px solid rgba(254, 254, 254, 0.5);
		display: block;
		width: 160px;
		height: 160px;
		position: absolute;
		left: 30px;
		top: 30px;
	}
	
	.home-swiper_code01 img {
		width: 100%;
		height: 100%;
	}
	/*第二屏*/
	
	.home-info-iconText01 {
		width: 83px;
		height: 89px;
	}
	
	.home-info-iconText01 img {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.home-info-iconText02 {
		font-size: 15px;
		color: #FFFFFF;
		font-family: "微软雅黑";
		margin-top: 14PX;
	}
	
	.home-info-1 {
		width: 100%;
		height: auto;
		margin: auto;
		margin-top: 50px;
		position: relative;
	}
	
	.home-info-1 img {
		width: 90%;
		height: auto;
		display: block;
		margin: 0 auto;
	}
	
	.home-info-img01 {
		width: 94%;
		/*height: 100vh;*/
		display: block;
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -47%;
		z-index: 9;
	}
	
	.home-info-box {
		position: absolute;
		z-index: 99;
		width: 80%;
		left: 50%;
		margin-left: -40%;
	}
	
	.home-info-boxs01 {
		text-align: left;
	}
	/*第一屏*/
	
	.home-swiper {
		height: 960px;
		width: 100%;
		overflow: hidden;
		position: relative;
		top: 0px;
		overflow: hidden;
	}
	
	.home-containerBG {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.home-swiper-box {
		width: 50%;
		position: absolute;
		top: 320px;
		left: 9%;
	}
	
	.home-containerText {
		width: 100%;
	}
	
	.home-containertext01 {
		width: 90%;
		display: block;
	}
	
	.home-containertext02 {
		font-family: "微软雅黑";
		font-size: 26px;
		color: #000000;
		text-align: left;
		line-height: 30px;
	}
	
	.home-swiper_01 {
		width: 460px;
		height: 232px;
	}
	
	.home-swiper_02 {
		width: 80%;
		margin-top: 5vh;
		display: flex;
		overflow: hidden;
		justify-content: space-between;
		display: none;
	}
	
	.home-swiper_02s {
		width: 45%;
		display: block;
	}
	
	.home-swiper_02s img {
		width: 100%;
	}
	/*第三幕*/
	
	.home-info-2 {
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	
	.home-info-2-bg {
		width: 100%;
		height: auto;
		display: block;
	}
	
	.home-info-2-box {
		/*width: 65%;*/
		position: absolute;
		top: 200px;
		/*left: 50%;
		margin-left: -32.5%;*/
	}
	
	.home-info-2-title {
		font-size: 35px;
		height: 40px;
		line-height: 40px;
		width: 100%;
		text-align: center;
		font-family: "微软雅黑";
		margin-bottom: 70px;
	}
	
	.home-info-2-text01 {
		font-size: 26px;
		width: 65%;
		text-align: left;
		margin: auto;
		line-height: 60px;
		color: rgba(0, 0, 0, .7);
		font-family: "微软雅黑";
	}
	/*第四屏*/
	
	.home-info-3 {
		width: 100%;
		/*height: 960px;*/
		clear: both;
		position: relative;
		/*background:url(../assets/img/home/home-banner05.png) no-repeat;*/
		background-repeat: no-repeat;
		background-size: 100% 100%;
		-webkit-background-size: cover;
		-o-background-size: cover;
		background-position: center 0;
		display: block;
		overflow: hidden;
	}
	
	.home-info-3-box {
		position: absolute;
		top: 220px;
	}
	
	.home-info-3-imgbg {
		width: 100%;
	}
	
	.home-info-3-text01 {
		width: 35%;
		display: block;
		margin: auto;
	}
	
	.home-info-3-text02 {
		font-size: 26px;
		line-height: 60px;
		width: 65%;
		text-align: left;
		margin: auto;
		margin-top: 100px;
		font-family: "微软雅黑";
		color: rgba(0, 0, 0, .7);
	}
	
	.home-goods img {
		width: 400px;
		height: 350px;
		display: block;
	}
	/*第五屏*/
	.home-goods-title{
		font-size: 40px;
		margin-bottom: 65px;
		font-weight: bold;
	}
	.home-goods {
		margin-top: 65px;
	}
	
	.home-goods-box {
		width: 80%;
		/*border: 1px solid #000000;*/
		margin: auto;
	}
	
	.home-goods-boxs {
		display: flex;
		justify-content: space-between;
		flex-flow: wrap;
		align-content: flex-start;
	}
	
	.home-goods-boxspan {
		display: block;
		width: 28%;
		margin-bottom: 60px;
		border: 2px solid rgba(0, 0, 0, .1);
		box-shadow: 2px 5px 20px rgba(0, 0, 0, .2);
		overflow: hidden;
		cursor: pointer;
	}
	
	.home-goods-boxspanTop {
		width: 100%;
		height: 400px;
		overflow: hidden;
	}
	
	.home-goods-boxspanTop img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.home-goods-boxspanbtm {
		height: 120px;
		text-align: center;
		font-size: 26px;
		line-height: 120px;
		font-family: "微软雅黑";
	}
	.tab-link{
		font-family: "微软雅黑";
	}
	/*开始*/
	/*当窗口大于1441px*/
	
	@media only screen and (max-width: 1441px) {}
	/*当窗口大于1200px*/
	
	@media screen and (min-width: 1200px) and (max-width: 1440px) {
		.header-nav {
			display: none;
		}
		.header-navmbl {
			display: block;
		}
		/*第一屏*/
		.home-swiper {
			height: 860px;
			width: 100%;
			overflow: hidden;
			position: relative;
			top: 0px;
			overflow: hidden;
		}
		.home-containerBG {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.home-swiper-box {
			width: 50%;
			position: absolute;
			top: 300px;
			left: 9%;
		}
		.home-containerText {
			width: 100%;
		}
		.home-containertext01 {
			width: 90%;
			display: block;
		}
		.home-containertext02 {
			font-family: "微软雅黑";
			font-size: 22px;
			color: #000000;
			text-align: left;
			line-height: 35px;
		}
		.home-swiper_01 {
			width: 460px;
			height: 232px;
		}
		.home-swiper_02 {
			width: 80%;
			margin-top: 3rem;
			display: flex;
			overflow: hidden;
			justify-content: space-between;
			display: none;
		}
		.home-swiper_02s {
			width: 45%;
			display: block;
		}
		.home-swiper_02s img {
			width: 100%;
		}
		/*第三屏*/
		/*.home-info-2-box{
			width: 80%;
			position: absolute;
			top: 240px;
			left: 50%;
			margin-left: -40%;
			
		}*/
		/*第四屏*/
		.home-info-3 {
			/*height: 800px;*/
		}
		.home-info-3-text02 {
			/*font-size: 22px;*/
		}
		.home-info-3-box {
			position: absolute;
			top: 200px;
		}
		/*第五屏*/
		.home-goods-title{
			font-size: 30px;
			margin-bottom: 65px;
		}
		.home-goods-boxspanTop {
			height: 280px;
		}
		.home-goods-boxspanbtm {
			height: 80px;
			text-align: center;
			font-size: 26px;
			line-height: 80px;
			font-family: "微软雅黑";
		}
	}
	/*一下pc端*/
	/*1100分辨率（大于960px，小于1199px）*/
	
	@media screen and (min-width: 1025px) and (max-width: 1199px) {
		html {
			font-size: 62.5%;
			/* 10÷16=62.5% */
		}
		body {
			font-size: 12px;
			font-size: 1.2rem;
			/* 12÷10=1.2 */
		}
		.header-nav {
			display: none;
		}
		.header-navmbl {
			display: block;
		}
		/*第一屏*/
		.home-swiper_01 {
			display: none;
		}
		/*第一屏*/
		.home-swiper {
			height: 40rem;
			width: 100%;
			overflow: hidden;
			position: relative;
			top: 0px;
			overflow: hidden;
		}
		.home-containertext02 {
			font-family: "微软雅黑";
			font-size: 1.5rem;
			color: #000000;
			text-align: left;
			line-height: 2.6rem;
		}
		.home-swiper-box {
			width: 50%;
			position: absolute;
			top: 14rem;
			left: 9%;
		}
		.home-swiper_02 {
			width: 80%;
			margin-top: 2rem;
			display: flex;
			overflow: hidden;
			justify-content: space-between;
			/*display: block;*/
		}
		.home-swiper_02s {
			width: 45%;
			display: block;
		}
		.home-swiper_02s img {
			width: 100%;
		}
		.home-info-1 img {
			width: 100%;
		}
		/*第三幕*/
		.home-info-2 {
			/*height: 55rem;*/
		}
		.home-info-2-box {
			width: 85%;
			position: absolute;
			top: 10rem;
			left: 50%;
			margin-left: -42.5%;
			font-family: "微软雅黑";
		}
		.home-info-2-title {
			font-size: 2.2rem;
			line-height: 2.8rem;
			width: 100%;
			text-align: center;
			display: block;
			margin-bottom: 5vh;
		}
		.home-info-2-text01 {
			display: block;
			font-size: 1.6rem;
			width: 70%;
			text-align: left;
			margin: auto;
			line-height: 3.2rem;
			color: rgba(0, 0, 0, .7);
		}
		/*第四屏*/
		.home-info-3 {
			/*height: 40rem;*/
		}
		.home-info-3-box {
			position: absolute;
			top: 9rem;
		}
		.home-info-3-text02 {
			font-size: 1.6rem;
			line-height: 3.2rem;
		}
		/*第五屏*/
		.home-goods {
			margin-top: 5rem;
		}
		.home-goods-box {
			width: 90%;
			margin: auto;
		}
		.home-goods-boxspan {
			width: 29%;
			margin-bottom: 5rem;
			cursor: pointer;
		}
		.home-goods-boxspanTop {
			height: 16rem;
		}
		.home-goods-boxspanbtm {
			height: 4rem;
			font-size: 1.6rem;
			line-height: 4rem;
		}
	}
	/*6puls*/
	/*880分辨率（大于768px，小于959px）*/
	
	@media screen and (min-width: 768px) and (max-width: 1024px) {
		html {
			font-size: 62.5%;
			/* 10÷16=62.5% */
		}
		body {
			font-size: 12px;
			font-size: 1.2rem;
			/* 12÷10=1.2 */
		}
		.header-nav {
			display: none;
		}
		.header-navmbl {
			display: block;
		}
		/*第一屏*/
		.home-swiper_01 {
			display: none;
		}
		.home-swiper_02 {
			display: block;
		}
		/*第一屏*/
		.home-swiper {
			height: 35rem;
			width: 100%;
			overflow: hidden;
			position: relative;
			top: 0px;
			overflow: hidden;
			/*border: 1px solid #000000;*/
		}
		.home-swiper-box {
			width: 60%;
			position: absolute;
			top: 12rem;
			left: 9%;
		}
		/*第二屏*/
		.home-info-1 {
			margin-top: 1rem;
		}
		.home-info-1 img {
			width: 100%;
		}
		.home-containertext02 {
			font-family: "微软雅黑";
			font-size: 1.6rem;
			color: #000000;
			text-align: left;
			line-height: 2.6rem;
		}
		.home-swiper_01 {
			width: 460px;
			height: 232px;
		}
		.home-swiper_02 {
			width: 80%;
			margin-top: 2rem;
			display: flex;
			overflow: hidden;
			justify-content: space-between;
		}
		.home-swiper_02s {
			width: 45%;
			display: block;
		}
		.home-swiper_02s img {
			width: 100%;
		}
		/*第二屏*/
		.home-info-1 img {
			width: 100%;
		}
		/*第三幕*/
		.home-info-2 {
			/*height: 40rem;*/
		}
		.home-info-2-box {
			width: 90%;
			position: absolute;
			top: 6.5rem;
			left: 50%;
			margin-left: -45%;
			font-family: "微软雅黑";
		}
		.home-info-2-title {
			font-size: 2rem;
			line-height: 2.8rem;
			width: 100%;
			text-align: center;
			display: block;
			margin-bottom: 4rem;
		}
		.home-info-2-text01 {
			display: block;
			font-size: 1.6rem;
			width: 65%;
			text-align: left;
			margin: auto;
			line-height: 2.6rem;
			color: rgba(0, 0, 0, .7);
		}
		/*第四屏*/
		/*第四屏*/
		.home-info-3 {
			/*height: 30rem;*/
		}
		.home-info-3-box {
			width: 90%;
			position: absolute;
			position: absolute;
			top: 7rem;
			left: 50%;
			margin-left: -45%;
		}
		.home-info-3-text02 {
			width: 65%;
			font-size: 1.6rem;
			line-height: 2.6rem;
			font-family: "微软雅黑";
			color: rgba(0, 0, 0, .7);
			margin-top: 3rem;
		}
		/*第五屏*/
		.home-goods-title{
			font-size: 2rem;
			margin-bottom: 3rem;
		}
		.home-goods {
			margin-top: 3rem;
		}
		.home-goods-box {
			width: 90%;
			margin: auto;
		}
		.home-goods-boxspan {
			width: 29%;
			margin-bottom: 5rem;
			cursor: pointer;
		}
		.home-goods-boxspanTop {
			height: 14rem;
		}
		.home-goods-boxspanbtm {
			height: 5rem;
			font-size: 1.5rem;
			line-height: 5rem;
		}
	}
	/*720分辨率（大于480px，小于767px）*/
	
	@media only screen and (min-width: 480px) and (max-width: 767px) {
		html {
			font-size: 62.5%;
			/* 10÷16=62.5% */
		}
		body {
			font-size: 12px;
			font-size: 1.2rem;
			/* 12÷10=1.2 */
		}
		.header-nav {
			display: none;
		}
		.header-navmbl {
			display: block;
		}
		/*第一屏*/
		.home-swiper_01 {
			display: none;
		}
		.home-swiper_02 {
			display: block;
		}
		.home-swiper {
			height: 40rem;
			width: 100%;
			overflow: hidden;
			position: relative;
			top: 0px;
			overflow: hidden;
		}
		.home-swiper-box {
			width: 65%;
			position: absolute;
			top: 10rem;
			left: 9%;
		}
		.home-containertext02 {
			font-size: 1.4rem;
			color: #000000;
			text-align: left;
			line-height: 2.6rem;
			font-family: "微软雅黑";
		}
		.home-swiper_02 {
			width: 80%;
			margin-top: 2rem;
			display: flex;
			overflow: hidden;
			justify-content: space-between;
		}
		/*第二屏*/
		.home-info-1 {
			margin-top: 1rem;
		}
		.home-info-1 img {
			width: 100%;
		}
		/*第三幕*/
		.home-info-2 {
			/*height: 45rem;*/
			/*border: 1px solid #000000;*/
		}
		.home-info-2-box {
			width: 90%;
			position: absolute;
			top: 9rem;
			left: 50%;
			margin-left: -45%;
			font-family: "微软雅黑";
		}
		.home-info-2-title {
			font-size: 2.2rem;
			line-height: 3.2rem;
			width: 100%;
			text-align: center;
			display: block;
			/*margin-bottom: 6vh;*/
		}
		.home-info-2-text01 {
			display: block;
			font-size: 1.6rem;
			width: 80%;
			text-align: left;
			margin: auto;
			line-height: 3.2rem;
			color: rgba(0, 0, 0, .7);
		}
		/*第四屏*/
		.home-info-3 {
			/*height: 30rem;*/
		}
		.home-info-3-box {
			position: absolute;
			top: 5rem;
		}
		.home-info-3-text02 {
			font-size: 15px;
			line-height: 25px;
		}
		.home-info-3-text02 {
			width: 80%;
			font-size: 1.6rem;
			line-height: 3.2rem;
			margin-top: 3rem;
		}
		/*第五屏*/
		.home-goods-title{
			font-size: 2rem;
			margin-bottom: 3rem;
		}
		.home-goods {
			margin-top: 3rem;
		}
		.home-goods-box {
			width: 90%;
			margin: auto;
		}
		.home-goods-boxspan {
			width: 29%;
			margin-bottom: 5rem;
			cursor: pointer;
		}
		.home-goods-boxspanTop {
			height: 10rem;
		}
		.home-goods-boxspanbtm {
			height: 3rem;
			font-size: 1.2rem;
			line-height: 3rem;
		}
	}
	
	@media only screen and (min-width: 321px) and (max-width: 479px) {
		
		html {
			font-size: 62.5%;
			/* 10÷16=62.5% */
		}
		body {
			font-size: 12px;
			font-size: 1.2rem;
			/* 12÷10=1.2 */
		}
		/*第一屏*/
		.home-swiper_01 {
			display: none;
		}
		.home-swiper_02 {
			display: block;
		}
		.header-nav {
			display: none;
		}
		.header-navmbl {
			display: block;
		}
		/*第一屏*/
		.home-swiper {
			height: 30rem;
			width: 100%;
			overflow: hidden;
			position: relative;
			top: 0px;
			overflow: hidden;
		}
		.home-swiper-box {
			width: 65%;
			position: absolute;
			top: 11rem;
			left: 9%;
		}
		.home-containertext02 {
			font-size: 1.6rem;
			color: #000000;
			text-align: left;
			line-height: 2.2rem;
			font-family: "微软雅黑";
		}
		.home-swiper_02 {
			width: 80%;
			margin-top: 2rem;
			display: flex;
			overflow: hidden;
			justify-content: space-between;
		}
		/*第二屏*/
		.home-info-1 {
			margin-top: 1rem;
		}
		.home-info-1 img {
			width: 100%;
		}
		/*第三幕*/
		.home-info-2 {
			/*height: 35rem;*/
		}
		.home-info-2-title {
			font-size: 2rem;
			width: 100%;
			text-align: center;
		}
		.home-info-2-box {
			width: 90%;
			position: absolute;
			top: 7rem;
			left: 50%;
			margin-left: -45%;
			font-family: "微软雅黑";
		}
		.home-info-2-title {
			font-size: 2rem;
			line-height: 2rem;
			width: 100%;
			text-align: center;
			display: block;
			/*margin-bottom: 6vh;*/
		}
		.home-info-2-text01 {
			display: block;
			font-size: 1.2rem;
			width: 80%;
			text-align: left;
			margin: auto;
			line-height: 1.5rem;
			color: rgba(0, 0, 0, .7);
		}
		/*第四屏*/
		.home-info-3 {
			/*height: 30rem;*/
		}
		.home-info-3-box {
			position: absolute;
			top: 5rem;
		}
		.home-info-3-text02 {
			width: 80%;
			font-size: 1.5rem;
			line-height: 2rem;
		}
		/*第五屏*/
		.home-goods-title{
			font-size: 2rem;
			margin-bottom: 3rem;
		}
		.home-goods {
			margin-top: 3rem;
		}
		.home-goods-box {
			width: 90%;
			margin: auto;
		}
		.home-goods-boxspan {
			width: 29%;
			margin-bottom: 5rem;
			cursor: pointer;
		}
		.home-goods-boxspanTop {
			height: 12rem;
		}
		.home-goods-boxspanbtm {
			height: 4rem;
			font-size: 1.8rem;
			line-height: 4rem;
		}
	}
	/*（小于320px）*/
	
	@media only screen and (max-width: 320px) {
		html {
			font-size: 62.5%;
			/* 10÷16=62.5% */
		}
		body {
			font-size: 12px;
			font-size: 1.2rem;
			/* 12÷10=1.2 */
		}
		.header-nav {
			display: none;
		}
		.header-navmbl {
			display: block;
		}
		/*第一屏*/
		.home-swiper {
			height: 60vh;
			width: 100%;
			overflow: hidden;
			position: relative;
			top: 0px;
			overflow: hidden;
		}
		.home-swiper-box {
			width: 65%;
			position: absolute;
			top: 9rem;
			left: 9%;
		}
		.home-containertext02 {
			font-size: 1.4rem;
			color: #000000;
			text-align: left;
			line-height: 1.5rem;
			font-family: "微软雅黑";
		}
		.home-swiper_01 {
			display: none;
		}
		.home-swiper_02 {
			display: block;
		}
		.home-swiper_02 {
			width: 100%;
			margin-top: 1.5rem;
			display: flex;
			overflow: hidden;
			justify-content: space-between;
		}
		/*第二屏*/
		.home-info-1 {
			margin-top: 1rem;
		}
		.home-info-1 img {
			width: 100%;
		}
		/*第三幕*/
		.home-info-2 {
			/*height: 32rem;*/
			/*border: 1px solid #000000;*/
		}
		.home-info-2-title {
			font-size: 2rem;
			width: 100%;
			text-align: center;
		}
		.home-info-2-box {
			width: 90%;
			position: absolute;
			top: 10vh;
			left: 50%;
			margin-left: -45%;
			font-family: "微软雅黑";
		}
		.home-info-2-title {
			font-size: 2rem;
			line-height: 2rem;
			width: 100%;
			text-align: center;
			display: block;
			/*margin-bottom: 6vh;*/
		}
		.home-info-2-text01 {
			display: block;
			font-size: 1.2rem;
			width: 90%;
			text-align: left;
			margin: auto;
			line-height: 1.5rem;
			color: rgba(0, 0, 0, .7);
		}
		/*第四屏*/
		.home-info-3 {
			/*height: 25rem;*/
		}
		.home-info-3-box {
			position: absolute;
			top: 5rem;
		}
		.home-info-3-text02 {
			width: 80%;
			font-size: 1.5rem;
			line-height: 2rem;
		}
		/*第五屏*/
		.home-goods-title{
			font-size: 2rem;
			margin-bottom: 3rem;
		}
		.home-goods {
			margin-top: 3rem;
		}
		.home-goods-box {
			width: 90%;
			margin: auto;
		}
		.home-goods-boxspan {
			width: 29%;
			margin-bottom: 4rem;
			cursor: pointer;
		}
		.home-goods-boxspanTop {
			height: 6rem;
		}
		.home-goods-boxspanbtm {
			height: 3rem;
			font-size: 1rem;
			line-height: 3rem;
		}
	}
	
	
</style>
