<template>
	<div class="about-container">
		<div class="home-swiper">
			<el-row :gutter="0">
			  <el-col :xs="24" :sm="24" style="text-align: center;">
				<div class="home-image">
					<img v-for="businessImg in businessList" :src="businessImg.imgPath" alt="" />
				</div>
			  </el-col>			  
			</el-row>
		</div>
		<p class="title-content">商家入驻流程</p>
		<div class="content" >
			<el-row :gutter="0">
			  <el-col :xs="24" :sm="24" >
				<div v-for="lifeContent in businessList" v-html="lifeContent.content"></div>
			  </el-col>			  
			</el-row>
		</div>
		
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				businessList:[]
			}
		},
		methods: {
			init(){
				this.axios.get('/api/join/info').then(   
					response => {
						console.log(response)
						this.businessList = response.data.join
					},
					response => {
					
					}
				)
			}
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
	*{
		font-family: "微软雅黑";
	}
	.about-container{
		/*margin-top: 55px;*/
	}
	.home-image{
		width: 100%;
		/*height: 500px;*/
		margin-top: 5rem;			
	}
	.home-image img{
		width: 100%;
		height: auto;
		/*height: 500px;*/
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
		text-align: left;
		font-size: 16px;
		font-family: "微软雅黑";
	}
	.content>>>h3{
		font-size: 18px;
	}
	.theme{
		min-height:32px;
		font-size:30px;
		font-weight:600;
		color:rgba(3,3,3,1);
		line-height:31px;
		text-align: center;
		margin:50px 0px 80px 0px;						
	}
	.theme-image{
		/*max-width: 1200px;*/
		margin: 0 auto;	
	}
	.theme-image img{
		width: 100%;	
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
		.home-image{
			width: 100%;
			margin-top: 5rem;		
		}
		.home-image img{
			width:100%;		
		}
		.content{
			width:85%;
			margin: 0 auto;	
			padding-top: 30px;
		}
		.title-content{
				font-size: 30px;
				text-align: center;
				margin-top: 49px;
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
			.content{
				width: 90%;
				margin: 0 auto;	
				padding-top: 2rem;
			}
			.home-image{
				width: 100%;
				margin-top: 5rem;			
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
				width: 90%;
				padding-top: 0rem;
			}
			.content>>>p{
				text-align: left;
				font-size: 1.2rem;
			}
			.title-content{
				font-size: 2.6rem;
				text-align: center;
				margin-top: 5rem;
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
			.content>>>p{
				text-align: left;
				/*font-size: 1.9rem;*/
				font-size: 16px;
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
			.content>>>p{
				text-align: left;
				/*font-size: 1.4rem;*/
				font-size: 16px;
			}
			.title-content{
				font-size: 20px;
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
			.content>>>p{
				text-align: left;
				font-size: 1.4rem;
			}
			.title-content{
				font-size: 20px;
				text-align: center;
				margin-top: 5rem;
			}
	}
</style>