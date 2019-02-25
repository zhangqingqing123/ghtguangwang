<template>
	<div class="about-container">
		<!--<div style="margin-top: 80px;"></div>-->
		<div class="home-swiper">
			<el-row :gutter="0">
			  <el-col :xs="24" :sm="24" style="text-align: center;">
				<div class="home-image">
					<img v-for="advantageImg in advantageList" :src="advantageImg.imgPath" alt="" />
				</div>
			  </el-col>			  
			</el-row>
		</div>
		<div class="content">
			<el-row :gutter="0">
			  <el-col :xs="24" :sm="24" style="text-align: center;">
				<div class="words-box">				
					<h2 class="title">融合“禅·茶·素”打造帮扶能力</h2>
					<div class="detail">贡和堂将中国“禅和文化、禅茶文化、素食文化”融入平台。整合运营，着力打造“帮扶”能力，通过大平台战略思维，跨界发挥其它行业的长板优势，补足行业内部自身短板，资源整合进而解决各行业的痛点和难点，实现各合作企业“同舟共济，和济共生”、彼此融合和互助发展。</div>
				</div>
				<div class="image">
					<img src="../assets/img/advantage/advan-img01.png" alt="" />
				</div>
			  </el-col>			  
			</el-row>
			<el-row :gutter="0" class="advantage-01">
			  <el-col :xs="24" :sm="12" style="text-align: center;">
				<div class="theme-words">				
					<div class="theme-title">同舟共济，和济共生</div>
					<div class="theme-detail">贡和堂以“禅·茶·素”的资源整合和文化元素置入为核心，打造高端禅和生活——“品禅茶、食禅素、宿禅室”。以打造“人与生命、人与社会、人与自然、人与动物的和谐”为目标，总而言之，即是打造“人与万物和谐的命运共同体”。贡和堂将中国“禅和文化、禅茶文化、素食文化”融入平台。整合运营，着力打造“帮扶”能力，通过大平台战略思维，跨界发挥其它行业的长板优势，补足行业内部自身短板，资源整合进而解决各行业的痛点和难点，实现各合作企业“同舟共济，和济共生”、彼此融合和互助发展。</div>				
				</div>
			  </el-col>
			  <el-col :xs="24" :sm="12" style="text-align: center;">
				<div class="theme-image">
					<img src="../assets/img/advantage/theme.png" alt="" />
				</div>
			  </el-col>
			</el-row>
			<el-row :gutter="0" class="advantage-01">
			  <el-col :xs="24" :sm="12" style=" margin-top:30px;text-align: center;">
				<div class="service-image">
					<img src="../assets/img/advantage/service.png" alt="" />
				</div>
			  </el-col>
			  <el-col :xs="24" :sm="12" style="margin-top:30px; text-align: center;">
				<div class="service-words">				
					<div class="service-title">禅意生活服务平台</div>
					<div class="service-detail">贡和堂平台秉持【产业帮扶】为初心，解决各行业的瓶颈和困顿，弘扬【禅和文化】为己任。平台下设八大模块：禅茶素材、素食餐厅、特色茶馆、禅意民宿、国学书院、诵经禅乐、养生保健、投资收藏。集茶道、养生、国学、食疗、修身等为一体的一站式禅意生活服务平台。</div>				
				</div>
			  </el-col>
			  
			</el-row>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				advantageList:[]
			}
		},
		components: {
		},
		methods: {
			init(){
				this.axios.get('/api/advantage/info').then(   
					response => {
						this.advantageList = response.data.advantage
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
	.home-swiper{
		width: 100%;
	   height:auto;
	}
	.home-image{
		width: 100%;
		margin-top: 6rem;
	}
	.home-image img{
		width: 100%;
		height: auto;
	}
	.content{
		width: 75%;
		height: auto;
		margin-bottom: 80px;
		margin: auto;
		margin-top: 60px;
	}
	.words-box{
		/*max-width:1200px;*/
		margin: 0 auto;						
	}
    .title{
		/*width:100%;*/
		/*max-width:;*/
		min-height:32px;
		/*font-size:18px;*/
		font-weight:600;
		/*color:rgba(197,23,42,1);*/
		line-height:31px;
		text-align: center;
		margin:32px 0px 41px 0px;
	}
	.detail{
		/*max-width: 1200px;*/
		min-height:78px;
		font-size:16px;
		font-weight:400;
		color:rgba(3,3,3,1);
		line-height:32px;
		/*margin: 0px 100px 16px 100px;*/ 
		text-align:justify;
		letter-spacing: 2px;
	}
	.image{
		/*max-width: 1200px;*/
		margin: 0 auto;
	}
	.image img{
		width: 100%;
	}
	.advantage-01{
		/*width: 1200px;*/
		margin: 0 auto;
	}
	.theme-words{
		margin: 10px 40px 0px 40px;
	}
	.theme-title{
		/*min-width:109px;*/
		min-height:27px;
		font-size:17px;
		font-weight: bold;
		letter-spacing: 2px;
		color:rgba(3,3,3,1);
		line-height:27px;
		margin: 0px 0px 5px 0px;
		text-align: left;
		
	}
	.theme-detail{
		/*min-width:451px;*/
		min-height:150px;
		font-size:16px;
		font-weight:400;
		color:rgba(3,3,3,1);
		line-height:32px;
		/*text-align: left;*/
		text-align:justify;
		letter-spacing: 2px;
	}
	.theme-image{
		width:75%;
		height: auto;
		margin: 15px auto;
	}
	.theme-image img{
		width:100%;
	}
	.service-image{
		width:95%;
		height: auto;
	}
	.service-image img{
		width:100%;
	}
	.service-words{
		margin: 0 auto;
	}
	.service-title{
		/*min-width:100px;*/
		min-height:27px;
		font-size:17px;
		color:rgba(3,3,3,1);
		line-height:32px;
		margin-bottom: 5px;
		letter-spacing: 2px;
		text-align: left;
		font-weight: bold;
		/*font-family: "微软雅黑";*/
	}
	.service-detail{
		/*min-width:276px;*/
		min-height:108px;
		font-size:16px;
		font-weight:400;
		color:rgba(3,3,3,1);
		line-height:32px;
		text-align:justify;
		letter-spacing: 2px;
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
			width: 85%;
			margin: 0 auto;	
		}
	}
	/*1100分辨率（大于960px，小于1199px）*/
	@media screen and (min-width: 1025px) and (max-width: 1199px) {
			.home-image{
				width: 100%;		
			}
			.home-image img{
				width:100%;		
			}
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
				width: 90%;
				margin: 0 auto;	
			}
			.title{
				font-size: 1.8rem;
				
			}
			
			.detail{
				width: 100%;
				margin: 0 auto;
				font-size:1.3rem;
				font-weight:400;
				color:rgba(3,3,3,1);
				line-height:3.2rem;
				letter-spacing: 0.2rem;
			}
			.advantage-01{
				margin: 0 auto;
				width: 100%;
			}
			.theme-words{
				margin: 0 auto;
			}
			.theme-title,.service-title{
				font-size:1.8rem;
				margin-bottom: 2rem;
			}
			.theme-detail,.service-detail{
				/*min-width:451px;*/
				font-size:1.3rem;
				line-height: 3.2rem;
				font-weight:400;
				margin: 0 auto;
				letter-spacing: 0.2rem;
			}
			.theme-image{
				padding-top: 100px;
			}
			.service-image{
				padding-top: 100px;
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
			.home-image img{
				width:100%;	
			}
			.content{
				width: 90%;
				margin: 0 auto;	
			}
			.title{
				font-size: 1.5rem;
				margin: 3.5rem 0rem 2rem 0rem;
			}
			
			.detail{
				width: 100%;
				margin: 0 auto;
				font-size:1.2rem;
				font-weight:400;
				color:rgba(3,3,3,1);
				line-height:3.2rem;
				letter-spacing: 0.2rem;
			}
			.advantage-01{
				margin: 0 auto;
				width: 100%;
			}
			.theme-words{
				margin: 0 auto;
			}
			.theme-title,.service-title{
				font-size:1.8rem;
				margin-bottom: 1rem;
			}
			.theme-detail,.service-detail{
				font-size:1.2rem;
				line-height: 3.2rem;
				font-weight:400;
				margin: 0 auto;
				letter-spacing: 0.2rem;
			}
			.theme-image{
				padding-top: 150px;
			}
			.service-image{
				padding-top: 100px;
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
			.title{
				/*font-size: 1.8rem;*/
				font-size: 20px;
				margin: 3.5rem 0rem 2rem 0rem;
			}
			.content{
				width: 90%;
				margin: 0 auto;	
			}
			.detail{
				width: 100%;
				margin: 0 auto;
				/*font-size:1.6rem;*/
				font-size:16px;
				font-weight:400;
				color:rgba(3,3,3,1);
				line-height:3.2rem;
				letter-spacing: 0.2rem;
			}
			.advantage-01{
				margin: 0 auto;
				width: 100%;
			}
			.theme-words{
				margin: 0 auto;
			}
			.theme-title,.service-title{
				font-size:18px;
			}
			.theme-detail,.service-detail{
				font-size:16px;
				line-height: 3.2rem;
				font-weight:400;
				margin: 0 auto;
				letter-spacing: 0.2rem;
			}
			.theme-image img{
				width:70%;
			}
			.service-image img{
				width:70%;
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
			.content{
				width: 90%;
				margin: 0 auto;	
			}
			.title{
				/*font-size: 2.2rem;*/
				font-size: 20px;
				margin: 3.5rem 0rem 2rem 0rem;
			}
			.detail{
				width: 100%;
				margin: 0 auto;
				/*font-size:1.6rem;*/
				font-size:16px;
				font-weight:400;
				color:rgba(3,3,3,1);
				line-height:3.2rem;
				letter-spacing: 0.2rem;
			}
			.advantage-01{
				margin: 0 auto;
				width: 100%;
			}
			.theme-words{
				margin: 0 auto;
			}
			.theme-title,.service-title{
				/*font-size:2rem;*/
				font-size:18px;
				font-weight: bold;
			}
			.theme-detail,.service-detail{
				font-size:16px;
				font-weight:400;
				margin: 0 auto;
				line-height: 3.2rem;
				letter-spacing: 0.2rem;
			}
			.theme-image img{
				width:70%;
			}
			.service-image img{
				width:70%;
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
			.content{
				width: 90%;
				margin: 0 auto;	
			}
			.title{
				font-size: 2.2rem;
				margin: 3rem 0rem 2rem 0rem;
			}
			.detail{
				width: 100%;
				margin: 0 auto;
				font-size:1.6rem;
				line-height:3.2rem;
				letter-spacing: 0.2rem;
			}
			.advantage-01{
				margin: 0 auto;
				width: 100%;
			}
			.theme-words{
				margin: 0 auto;
			}
			.theme-title,.service-title{
				font-size:2rem;
			}
			.theme-detail,.service-detail{
				/*min-width:451px;*/
				font-size:1.6rem;
				font-weight:400;
				margin: 0 auto;
				line-height: 3.2rem;
				letter-spacing: 0.2rem;
			}
			.theme-image{
				width: 75%;
			}
	}
</style>