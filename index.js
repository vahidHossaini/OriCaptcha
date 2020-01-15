var uuid=require("uuid");
class captchaRoute
{
	constructor(disc)
	{
		this.disc=disc
	}
    validate(id,func)
	{
        return this.disc.run('captcha','validate',{data:{id}},func)
	}
}
module.exports = class captchaIndex
{
	constructor(config,dist)
	{
		this.config=config.statics
		this.context=this.config.context
		this.bootstrap=require('./bootstrap.js')
		this.enums=require('./struct.js') 
		this.tempConfig=require('./config.js')
		var driver={name:"simple"}
		if(this.config.driver)
			driver=this.config.driver
		this.driver=new (require("./driver/"+driver.name+".js"))(driver);
		global.captcha=new captchaRoute(dist)
	}
	async get(msg,func,self)
	{
	 	self.driver.get(msg,func) ;
		 
	}
	async set(msg,func,self)
	{ 
		self.driver.set(msg,func) ; 
	}
	async validate(msg,func,self)
	{
	 	self.driver.validate(msg,func) ;
	}
}