<template>
	<div class="footer-container">
		<!--<div class="footer-info"></div>-->
		<!--pc端-->
		<div class="footer-link" >
			<el-row :gutter="0" class="footer-links" style=" ">
				
				<el-col :span="14" style=" text-align: center; display: flex; ">
					<el-row style="width: 100%;">
						<el-col :span="6">
							<div class="link-picbox">
									<div class="link-pic">
										<img class="link-pic-img" :src="homeInfo.site_company_wx" style=""  />
									</div>
									<div class="link-typeImg04" >
										<img class="link-typeImg01-icon" src="../../assets/img/home/kefu2.png">
										<span class="link-type-text">微信客服</span>
									</div>
							</div>
						</el-col>
						<el-col :span="5">
							<div class="link-picbox">
								<div class="link-pic">
										<img :src="homeInfo.wx_mp_qr_code" class="link-pic-img" />
									</div>
									<div class="link-typeImg01" >
										<img class="link-typeImg01-icon" src="../../assets/img/home/weixin.png">
										<span class="link-type-text">公众号</span>
									</div>
							</div>
						</el-col>
						<el-col :span="5">
							<div class="link-picbox">
								<div class="link-pic">
										<img :src="homeInfo.app_android_user_qr_code" class="link-pic-img"  />
									</div>
									<div class="link-typeImg02" >
										<img class="link-typeImg01-icon" src="../../assets/img/home/anzhuo.png">
										<span class="link-type-text">安卓</span>
									</div>
							</div>
						</el-col>
						<el-col :span="5">
							<div class="link-picbox">
								<div class="link-pic">
										<img :src="homeInfo.app_ios_user_qr_code" class="link-pic-img"  />
									</div>
									<div class="link-typeImg03"  >
										<img class="link-typeImg01-icon" src="../../assets/img/home/ai-ios.png">
										<span class="link-type-text">ios</span>
									</div>
							</div>
						</el-col>
					</el-row>
					
					
				</el-col>
				
				<el-col  :span="10" style="  font-size: 14px; ">
					<div class="link-info">
						<div class="link-infos">
							<img class="link-infosIcon" src="../../assets/img/home/phone.png" alt="" />
							<span>全国热线 : {{homeInfo.site_company_tel}}</span>
						</div>
						<div class="link-infos">
							<img class="link-infosIcon" src="../../assets/img/home/msg.png" alt="" />
							<span>企业邮箱 : {{homeInfo.site_company_email}}</span>
						</div>
						<div class="link-infos">
							<img class="link-infosIcon" src="../../assets/img/home/adress.png" alt="" />
							<span >公司地址 : {{homeInfo.site_company_address}}</span>
						</div>
						<div class="link-infos">
							<img class="link-infosIcon" src="../../assets/img/home/company.png" alt="" />
							<span>公司名称 : {{homeInfo.site_company_name}}</span>
						</div>
					</div>
					
				</el-col>
			</el-row>
			
		</div>
		<!--手机端-->
		<!--<div class="foot-linkmbl">
			<el-row :gutter="0" >
				<el-col :span="8" class="foot-linkmbls" >
					<div class="link-infosm">
						<img src="../../assets/img/home/phone.png" alt="" />
						<span class="link-infosm1">客服热线 : </span>
						<span class="link-infosm2">{{homeInfo.site_company_tel}}</span>
					</div>
					<div class="link-infosm">
						<img src="../../assets/img/home/msg.png" alt="" />
						<span class="link-infosm1">企业邮箱 : </span>
						<span class="link-infosm2">{{homeInfo.site_company_email}}</span>
					</div>
					<div class="link-infosm">
						<img src="../../assets/img/home/adress.png" alt="" />
						<span class="link-infosm1">公司地址 : </span>
						<span class="link-infosm2">{{homeInfo.site_company_address}}</span>
					</div>
					<div class="link-infosm">
						<img src="../../assets/img/home/company.png" alt="" />
						<span class="link-infosm1">公司名称 :</span>
						<span class="link-infosm2">{{homeInfo.site_company_name}}</span>
					</div>
				</el-col>
			</el-row>
		</div>-->
		<div class="footsite" id="footsite" v-html="homeInfo.site_foot"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "",
				isShowLogo:"",
				androidCode:"",
				iosCode:"",
				footerNavnum:"0",
				homeInfo:{},
				tel:"",
			}
		},
		methods: {
			init() {
				this.axios.get('/api/site/info').then(
					response => {
						this.homeInfo    = response.data.info
						this.isShowLogo  = response.data.info.wx_mp_qr_code
						this.androidCode = response.data.info.app_android_user_qr_code
						this.iosCode	 = response.data.info.app_ios_user_qr_code
					}
				)
			},
			geterweiCode(index){
				this.footerNavnum = index
				if(index == 0){
					this.isShowLogo = this.isShowLogo
			
				} else if(index ==1){
					this.isShowLogo = this.androidCode
			
				} else {
					this.isShowLogo = this.iosCode
			
				}
				
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
.link-type {
	overflow: hidden; 
	display: flex;	
	
}

.footer-links{
	width: 60%;  margin-left: 25%;
	position: absolute;
	bottom: 0;
}
.link-picbox{
	margin-right: 25px;
	height: 150px;
	/*margin-top: 150px;*/
}
.link-pic-img{
	/*width: 80px;*/
	height: 80px; margin-bottom: 15px; text-align: center;
}
.footer-link .link-type img{cursor: pointer; width: ;}
.link-pic {
	text-align: center;
}
	
.link-info{ 
	font-weight:700;
	color:rgba(0,0,0,1);
	line-height:19px;
	text-align: left;
	/*margin-top: 135px;*/
	border: 1px solid rgba(0,0,0,.0)
}
.link-infos{
	font-size: 12px;
	/*line-height: 25px;*/
	font-family: "微软雅黑";
	margin-bottom: 18px;
	color: #333333;
	display:flex;

}
.link-infos:last-child{
	margin-bottom: 0px;
}
.link-infosIcon{
	height: 20px;
	display: block;
	float: left;
}
.link-infos span{
	margin-left: 5px;
}
.link-typeImg01,.link-typeImg02,.link-typeImg03,.link-typeImg04{
	margin-right: 30px;
	/*display: flex;*/
	/*justify-content: center;*/
	color: #FFFFFF;
	line-height: 40px;
	cursor: pointer;
	/*text-align: center;*/
	margin: auto;
	font-size: 14px;
	height: 40px;
	border-radius: 25px;
	background: #000000;
}
.link-type-text{
	display: block;
	float: left;
}
.link-typeImg01{
	width: 100px;
	
}
.link-typeImg02,.link-typeImg03{
	width: 90px;
}
.link-typeImg04{
	width: 130px;
}
.link-typeImg01-icon{
	display: block;
	margin-top: 5px;
	margin-right: 3px;
	float: left;
}
.link-typeImg01 .link-typeImg01-icon{
	/*width: 32px;*/
	
	height: 24px;
	margin-top: 10px;
	float: left;
	margin-left: 15px;
	margin-right: 0px;
	
}
.link-typeImg02 .link-typeImg01-icon{
	height: 22px;
	margin-top: 9px;
	margin-left: 15px;
}
.link-typeImg03 .link-typeImg01-icon{
	/*width: 25px;*/
	height: 20px;
	margin-top: 10px;
	margin-left: 20px;
}
.link-typeImg04 .link-typeImg01-icon{
	/*width: 25px;*/
	height: 22px;
	margin-top: 10px;
	margin-left: 20px;
	
}
.footsite{
	margin-top: 60px;
	color: #999999;
	margin: auto;
}
.footsite p{
	-webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    
}
/*开始*/
.footer-link{
	width: 100%;
	height: 300px;
	/*border: 1px solid rgba(0,0,0,.0);*/
	/*max-width: 1920px;*/
    /*min-width: 1240px;*/
	min-height: 291px; 
	background: url(../../assets/img/home/ght-footer-bgc.png);
	position: relative;
	}
.foot-linkmbl{
	display: none;
	width: 100%;
}
.foot-linkmbls{
	width: 90%;
	margin-left: 5%;
	text-align: left;
	margin-top: 20px;
}
.link-infosm{
	display: flex;
	color: #333333;
}
.link-infosm img{
	width: 16px;
	height: 16px;
	margin-right: 5px;
	display: block;
	margin-top: 2px;
}
.link-infosm1{
	/*width: 75px;*/
	font-size: 15px;
}
.link-infosm2{
	font-size: 15px;
	width: 70%;
	margin-left: 5px;
}

/*开始*/
	/*当窗口大于1441px*/
	@media only screen and (max-width: 1441px) {
	   
	}
	/*当窗口大于1200px*/
	@media screen and (min-width: 1200px) and (max-width: 1440px) {
		.link-typeImg04{
			width: 100px;
			font-size: 12px;
		}
		.link-typeImg01{
			width: 90px;
			font-size: 12px;
		}
		.link-typeImg02{
			width: 80px;
			font-size: 12px;
		}
		.link-typeImg01{
			width: 80px;
			font-size: 12px;
		}
	    .link-pic-img{
			height: 60px; margin-bottom: 15px; text-align: center;
		}
		.footer-links{
			width: 80%;
			margin-left: 15%;
		}
		.link-infos{
			/*margin-bottom: 50px;*/
			margin-bottom: 12px;
		}
		
		
		
		.link-typeImg01 .link-typeImg01-icon{
	
			margin-left: 8px;
			
		}
		.link-typeImg04 .link-typeImg01-icon{
			margin-left: 10px;
	
}
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
		.footer-link{
	    	display: none;
	    }
	    .foot-linkmbl{
	    	display: block;
	    	background: url(../../assets/img/home/ght-footer-bgc.png);
	    }
	    .link-infos{
	    	margin-top: 8px;
	    }
	    .link-infosm{
	    	margin-bottom: 1rem;
	    }
	    .link-infosm img{
			height: 1.6rem;
			margin-right: 5px;
			display: block;
			margin-top: 2px;
		}
		.link-infosm1{
			/*width: 75px;*/
			font-size: 1.6rem;
			line-height: 1.6rem;
		}
		.link-infosm2{
			font-size: 1.6rem;
			width: 70%;
			margin-left: 5px;
			line-height: 1.6rem;
		}
		.footsite{
			font-size: 1.4rem;
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
		.footer-link{
	    	display: none;
	    }
	    .foot-linkmbl{
	    	display: block;
	    	background: url(../../assets/img/home/ght-footer-bgc.png);
	    }
	    .link-infosm {
	    	margin-top: 1rem;
	    }
	    .link-infosm img{
			height: 1.4rem;
			margin-right: 5px;
			display: block;
			margin-top: 2px;
		}
		.link-infosm1{
			/*width: 75px;*/
			font-size: 1.2rem;
		}
		.link-infosm2{
			font-size: 1.2rem;
			width: 70%;
			margin-left: 5px;
		}
		.footsite{
			width: 90%;
			font-size: 1.2rem;
			margin-top: 3rem;
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
		.footer-link{
	    	display: none;
	    }
	    .foot-linkmbl{
	    	display: block;
	    	background: url(../../assets/img/home/ght-footer-bgc.png);
	    }
	    .link-infosm{
	    	margin-top: 5px;
	    }
	    .link-infosm img{
			height: 1.5rem;
			margin-right: 5px;
			display: block;
			margin-top: 2px;
		}
		.link-infosm1{
			/*width: 75px;*/
			font-size: 2rem;
		}
		.link-infosm2{
			font-size: 2rem;
			width: 70%;
			margin-left: 5px;
		}
		.footsite{
			width: 90%;
			margin-top: 3rem;
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
		.footer-link{
	    	display: none;
	    	
	    }
	    .foot-linkmbl{
	    	display: block;
	    	width: 100%;
	    }
	    .link-infosm{
	    	/*margin: 0;*/
	    	margin-top: 5px;
	    }
	    .link-infosm img{
			height: 1.7rem;
			margin-right: 5px;
			display: block;
			margin: 0;
		}
		.link-infosm1{
			/*height: 1.7rem;*/
			line-height: 1.8rem;
			font-size: 1.5rem;
			margin-left: 3px;
		}
		.link-infosm2{
			/*height: 1.7rem;*/
			font-size: 1.5rem;
			line-height: 1.8rem;
			width: 70%;
			margin-left: 5px;
		}
		.footsite{
			width: 90%;
			margin-top: 3rem;
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
		.footer-link{
	    	display: none;
	    	
	    }
	    .foot-linkmbl{
	    	display: block;
	    	height: 10rem;
	    }
	    .link-infosm img{
			height: 1.5rem;
			margin-right: 5px;
			display: block;
			/*margin-top: 2px;*/
		}
		.link-infosm1{
			/*width: 75px;*/
			font-size: 1.5rem;
		}
		.link-infosm2{
			font-size: 1.5rem;
			width: 65%;
			margin-left: 5px;
		}
		.footsite{
			width: 90%;
			margin-top: 3rem;
		}
	}
</style>