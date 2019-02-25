<template>
	<div class="header-container">
		<div class="header-nav">
			<ul class="header-navpc">
				<li><router-link class="tab-link" to="/"><img class="ght-log" src="../../assets/img/logo.png" alt="" /></router-link></li>
				<li><router-link class="tab-link" to="/" exact>首页</router-link></li>
				<li><router-link class="tab-link" to="/about">关于贡和</router-link></li>
				<li><router-link class="tab-link" to="/advantage">平台优势</router-link></li>
				<li><router-link class="tab-link" to="/business">招商加盟</router-link></li>
				<li><router-link class="tab-link" to="/life">禅和生活</router-link></li>
			</ul>
		</div>
		<div class="header-navmbl">
			<div class="header-navmblfl" @click="getmblNav"><img src="../../assets/img/home/icon_home.png"></div>
			<div class="header-navmblfbox" v-show="ismblShow">
				<span class="header-navmblfboxs" @click="getmblNava(0)">首页</span>
				<span class="header-navmblfboxs" @click="getmblNava(1)">关于贡和</span>
				<span class="header-navmblfboxs" @click="getmblNava(2)">平台优势</span>
				<span class="header-navmblfboxs" @click="getmblNava(3)">招商加盟</span>
				<span class="header-navmblfboxs" @click="getmblNava(4)">禅和生活</span>
			</div>
			<div class="header-navmblLogo"><router-link class="tab-link" to="/home"><img class="ght-logm"  src="../../assets/img/logo.png" alt="" /></router-link></div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "",
				activeIndex: '1',
				activeIndex2: '1',
				ismblShow:false,
			}
		},
		methods: {
			init() {

			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			getmblNav:function(){
				this.ismblShow = !this.ismblShow
			},
			getmblNava:function(n){
				console.log(n)
				this.ismblShow = false
				if(n == 0){
					this.$router.push({
				        path:"/",
				    });
				} else if(n == 1){
					this.$router.push({
				        path:"/about",
				    });
				} else if(n == 2){
					this.$router.push({
				        path:"/advantage",
				    });
				} else if(n == 3){
					this.$router.push({
				        path:"/business",
				      });					
				} else{
					this.$router.push({
				        path:"/life",
				      });					
				} 
//				else if(n == 1){
//					this.$router.push({
//				        path:"/about",
//				      });
//				} else if(n == 2){
//					this.$router.push({
//				        path:"/advantage",
//				      });
//				} else if(n == 3){
//					this.$router.push({
//				        path:"/business",
//				      });
//				} esle {
//					this.$router.push({
//				        path:"/life",
//				      });
//				}
			}
		},
		created() {
			this.init()
		}
	}
</script>

<style scoped>
	*{
		font-family: "微软雅黑";
	}
	.tab-link:hover{
		text-decoration: none;
	}
	a.active{
		color: #BA2636;
    	text-decoration: none;
	}
	.header-nav{
		width: 100%;
		height: 80px;
		text-align: center;
		background:rgba(255,255,255,1);
		box-shadow:0px 1px 10px 0px rgba(0,0,0,0.2);
		position: fixed;
		top: 0;
		z-index: 99999;
	}
	.ght-log{
		width: 50px;
		height: 55px;
		object-fit: cover;
	}
	.header-nav ul{
		height: 80px;
		/*margin: 0 auto;*/
		margin-top: 0;
	}
	.header-nav ul li:first-child{
		margin-right: 71px;
	}
	.header-nav ul li:last-child{
		/*margin-right: 0;*/
	}
	.header-nav ul li{
		
		line-height: 80px;
		text-align: center;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		align-content:center;
		font-size:17px;
		font-weight:600;
		color:rgba(51,51,51,1);
		margin-left: 50px;
		cursor: pointer;
		color: #333333;
		float: left;
		/*border: 1px solid #000000;*/
	}
	.header-nav ul li a{
		display: block;
	}
	/*开始*/
	.header-navpc{
		position: absolute;
		overflow: hidden;
		/*display: flex;*/
		
		width: 800px;
		margin-top: 20px;
		left: 50%;
		margin-left: -400px;
	}
	.header-navmbl{
		width: 100%;
		margin: 0 auto;
		position: fixed;
		top: 0;
		z-index: 999;
		display: none;
		background-color: #FFFFFF;
		/*border: 1px solid #000000;*/
		box-shadow:0px 1px 13px 0px rgba(0,0,0,0.2);
		
	}
	.header-navmblfl{
		position: absolute;
		left: 0;
		width: 40px;
		height: 40px;
		
	}
	.header-navmblfl img{
		width: 100%;
		height: 100%;
	}
	.header-navmblLogo{
		width: 60px;
		height: 60px;
		position: absolute;
		left: 50%;
		margin-left: -30px;
	}
	.header-navmblLogo img{
		width: 100%;
		height: 100%;
	}
	.header-navmblfbox{
		width: 140px;
		position: absolute;
		top: 45px;
		background-color: #FFFFFF;
		box-shadow:0px 1px 13px 0px rgba(0,0,0,0.2);
		
	}
	.header-navmblfboxs{
		display: block;
		padding-top: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid rgba(0,0,0,.1);
		font-size: 16px;
		
	}

	
	
	
	/*开始*/
	/*当窗口大于1441px*/
	@media only screen and (max-width: 1441px) {
	   
	}
	/*当窗口大于1200px*/
	@media screen and (min-width: 1200px) and (max-width: 1440px) {
	    /*.header-navmbl{
	    	border: 1px solid #FF00FF;
		}*/
	}
	/*一下pc端*/
	/*1100分辨率（大于960px，小于1199px）*/
	@media screen and (min-width: 1025px) and (max-width: 1199px) {
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.header-navmbl{
			border: 1px solid yellowgreen;
		}
		.header-navmblfl{
			width:2.6rem;
			height: 2.6rem;
			left: 1rem;
			top: 1.2rem;
			border: 1px solid #FF00FF;
		}
		.header-navmblLogo{
			width: 5rem;
			height: 5rem;
			position: absolute;
			left: 50%;
			margin-left: -30px;
			top: 1rem;
		}
		.header-navmblfbox{
			width: 11rem;
			position: absolute;
			top: 5rem;
			
		}
		.header-navmblfboxs{
			display: block;
			padding-top: 1rem;
			padding-bottom: 1rem;
			font-size: 1.2rem;
			font-family:"微软雅黑" ;
			
		}
		
	}
	/*880分辨率（大于768px，小于959px）*/
	@media screen and (min-width: 769px) and (max-width: 1024px) {
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.header-nav{
			display: none;
		}
	    .header-navmbl{
	    	display: block;
			height: 8rem;
		}
		.header-navmblfl{
			width:3rem;
			height: 3rem;
			left: 2rem;
			top: 50%;
			margin-top: -1.5rem;
		}
		.header-navmblLogo{
			width: 5rem;
			height: 5rem;
			position: absolute;
			left: 50%;
			margin-left: -2rem;
			top: 50%;
			margin-top: -2.5rem;
		}
		.header-navmblfbox{
			width: 15rem;
			position: absolute;
			top: 8rem;
			background-color: #FFFFFF;
			box-shadow:0px 1px 13px 0px rgba(0,0,0,0.2);
		}
		.header-navmblfboxs{
			display: block;
			padding-top: 1.6rem;
			padding-bottom: 1.6rem;
			border-bottom: 1px solid rgba(0,0,0,.1);
			font-size: 1.6rem;
			
		}
		.ght-logm{
			height: 4rem;;
		}
	}
	/*720分辨率（大于480px，小于767px）*/
	@media only screen and (min-width: 480px) and (max-width: 768px){
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.header-nav{
			display: none;
		}
	    .header-navmbl{
	    	display: block;
			height: 6rem;
		}
		.header-navmblfl{
			width:2.4rem;
			height: 2.4rem;
			left: 2rem;
			top: 50%;
			margin-top: -1.2rem;
		}
		.header-navmblLogo{
			width: 4.5rem;
			height: 4.5rem;
			position: absolute;
			left: 50%;
			margin-left: -1.5rem;
			top: 50%;
			margin-top: -2.25rem;
		}
		.header-navmblfbox{
			width: 12rem;
			position: absolute;
			top: 6rem;
			background-color: #FFFFFF;
			box-shadow:0px 1px 13px 0px rgba(0,0,0,0.2);
			
			
		}
		.header-navmblfboxs{
			display: block;
			padding-top: 1.4rem;
			padding-bottom: 1.4rem;
			border-bottom: 1px solid rgba(0,0,0,.1);
			font-size: 1.8rem;
			
		}
		.ght-logm{
			height: 4rem;;
		}
	}
	@media only screen and (min-width: 321px) and (max-width: 479px) {
		html{
		　　font-size:62.5%; /* 10÷16=62.5% */
		}
		body{
		　　font-size:12px;
		　　font-size:1.2rem ; /* 12÷10=1.2 */
		}
		.header-nav{
			display: none;
		}
	    .header-navmbl{
	    	display: block;
			height: 6rem;
		}
		.header-navmblfl{
			width:2.4rem;
			height: 2.4rem;
			left: 2rem;
			top: 50%;
			margin-top: -1.2rem;
		}
		.header-navmblLogo{
			width: 4.5rem;
			height: 4.5rem;
			position: absolute;
			left: 50%;
			margin-left: -1.5rem;
			top: 50%;
			margin-top: -2.25rem;
		}
		.header-navmblfbox{
			width: 140px;
			position: absolute;
			top: 6rem;
			background-color: #FFFFFF;
			box-shadow:0px 1px 13px 0px rgba(0,0,0,0.2);
			
		}
		.ght-logm{
			height: 4rem;;
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
		.header-nav{
			display: none;
		}
	    .header-navmbl{
	    	display: block;
			height: 6rem;
		}
		.header-navmblfl{
			width:2.4rem;
			height: 2.4rem;
			left: 2rem;
			top: 50%;
			margin-top: -1.2rem;
		}
		.header-navmblLogo{
			width: 3rem;
			height: 3rem;
			position: absolute;
			left: 50%;
			margin-left: -1.5rem;
			top: 50%;
			margin-top: -1.5rem;
		}
		.header-navmblfbox{
			width: 140px;
			position: absolute;
			top: 6rem;
			background-color: #FFFFFF;
			box-shadow:0px 1px 13px 0px rgba(0,0,0,0.2);
			
		}
		.ght-logm{
			height: 4rem;;
		}
	}

</style>