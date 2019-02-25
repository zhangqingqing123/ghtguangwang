<template>
	<div class="about-container">
		<!--<div id="baiduMap">
			<baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" ak="V3xUDrbBHV5uR0Zkn06NiWix181ZVFML">
              <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            </baidu-map>
		</div>-->
		<div class="home-swiper">
			<el-row :gutter="0">
			  <el-col :xs="24" :sm="24" style="text-align: center;">
				<div class="home-image">
					<img v-for="lifeImg in lifeList" :src="lifeImg.imgPath" alt="" />
				</div>
			  </el-col>			  
			</el-row>
		</div>
		<p class="title-content">贡和堂禅意生活模块与内容</p>
		<div class="content" >
			<el-row :gutter="0">
			  <el-col :xs="24" :sm="24" >
				<div v-for="lifeContent in lifeList" v-html="lifeContent.content"></div>
			  </el-col>			  
			</el-row>

			
		</div>
	</div>
</template>

<script>
	//import { BaiduMap, BmNavigation } from 'vue-baidu-map'
	
	export default {
//		components: {
//		    BaiduMap,
//		    BmNavigation
//		},
		data() {
			return {
//				msg: "关于我们的内容",
//				center: {lng: 0, lat: 0},  
//    			zoom: 3,
				lifeList:[]
			}
		},
		methods: {
			init() {
//				this.axios.get('/services/blogroll/List.json').then(   
//					response => {
//						let data = response.data.rows
//						this.link = data.map(v => ({
//							name: v.name,
//							link: v.address
//						}))
//					},
//					response => {
//					
//					}
//				)
				this.axios.get('/api/zenlife/info').then(   
					response => {
						
						this.lifeList = response.data.zen_life
						console.log(this.lifeList)
					},
					response => {
					
					}
				)
			},
			handler ({BMap, map}) {
		      //console.log(BMap, map)
		      this.center.lng = 116.404
		      this.center.lat = 39.915
		      this.zoom = 16
		   },
		},
		created() {
			this.init()

		}
	}
</script>

<style scoped>
	[v-cloak]{
			display: none;
		}
    /*.bm-view{
    	height: 500px;
    	width: 100%;
    }*/
   *{
		font-family: "微软雅黑";
	}
	.home-image{
		width: 100%;
		margin-top: 80px;				
	}
	.home-image img{
		width: 100%;
		height: auto;
		/*object-fit: cover;*/
	}
   	.content{
		width: 75%;
		margin: 0 auto;	
		padding-top: 60px;
	}
	.content>>>img{
		width: 100%;
		height: auto;
		object-fit: cover;
	}
	.content>>>p{
		/*text-align: left;*/
		font-size: 16px;
		line-height: 32px;
		letter-spacing: 2px;
	}
	
	.words-box{
		max-width:1200px;
		margin: 0 auto;						
	}
    .words-box .title{
		max-width: 1200px;
		min-height:32px;
		font-size:30px;
		font-weight:600;
		color:rgba(208,2,27,1);
		line-height:31px;
		text-align: center;
		margin:50px 0px 45px 0px;
	}
	.words-box .detail{
		max-width: 1200px;
		min-height:78px;
		font-size:15px;
		font-weight:400;
		color:rgba(3,3,3,1);
		line-height:27px;
		margin-bottom:50px; 
		text-align: left;
	}
	.image{
		max-width: 1200px;
		margin: 0 auto;
	}
	.image img{
		width: 100%;
	}
    .theme-words{
		max-width:1200px;
		margin: 0 auto;
    }
    .theme-words .theme-title{
		min-height:27px;
		font-size:17px;
		font-weight:600;
		color:rgba(208,2,27,1);
		line-height:27px;
		margin: 50px 0px 10px 0px;
		text-align: left;
	}
	.theme-words .theme-detail{
		min-height:70px;
		font-size:15px;
		font-weight:400;
		color:rgba(3,3,3,1);
		line-height:25px;
		margin-bottom:50px;
		text-align: left;
	}
	.theme-words .theme-detail .poverty{
		font-weight:600;
		font-size:15px;
		line-height:25px;
		color:rgba(3,3,3,1);
		text-align: left;
	}
	.theme-words .theme-detail .poverty-content{
		min-height:70px;
		font-size:15px;
		font-weight:400;
		color:rgba(3,3,3,1);
		line-height:25px;
		margin-bottom:50px;
		text-align: left;
	}
	.theme-image{
		max-width: 1200px;
		margin: 0 auto;
	}
	.theme-image img{
		width:100%;
	}
	.title-content{
		font-size: 40px;
		text-align: center;
		margin-top: 49px;
		font-weight: bold;
	}
	/*当窗口大于1441px*/
	@media only screen and (max-width: 1441px) {
		
	   
	}
	/*当窗口大于1200px*/
	@media screen and (min-width: 1200px) and (max-width: 1440px) {
			.content{
				width: 85%;
				margin: 0 auto;	
				padding-top: 30px;
			}
	}
	/*1100分辨率（大于960px，小于1199px）*/
	@media screen and (min-width: 1025px) and (max-width: 1199px) {
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
			/*height: 500px;*/			
		}
		.home-image img{
			width:100%;		
		}
		.content{
			width: 90%;
			margin: 0 auto;
			text-align: left;
			padding-top: 2rem;			
		}
		
	}
	/*880分辨率（大于768px，小于959px）*/
	@media screen and (min-width: 768px) and (max-width: 1024px) {
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
			.content{
				width: 90%;
				padding-top: 2.2rem;		
			}
			.home-image img{
				width:100%;		
			}
			.title-content{
				font-size: 2rem;
				text-align: center;
				margin-top: 6rem;
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
				width: 90%;
				padding-top: 0rem;	
			}
			.title-content{
				font-size: 2.6rem;
				text-align: center;
				margin-top: 5rem;
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
			}
			.content{
				width: 90%;
				padding-top: 0rem;	
			}
			.title-content{
				font-size: 2.7rem;
				text-align: center;
				margin-top: 5rem;
			}
			.title-content{
				font-size: 2.4rem;
				text-align: center;
				margin-top: 5rem;
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
			}
			.content{
				width: 90%;
				padding-top: 0rem;
			}
			.title-content{
				font-size: 2.4rem;
				text-align: center;
				margin-top: 5rem;
			}
	}
</style>
