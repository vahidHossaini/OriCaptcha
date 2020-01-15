var uuid=require("uuid");
module.exports = class captchaIndex
{
	constructor(config,dist)
	{
		this.config=config.statics
		this.context=this.config.context
		var driver={name:"simple"}
		if(this.config.driver)
			driver=this.config.driver
		this.driver=new (require("./driver/"+driver.name+".js"))(driver);
	}
	async get(msg,func,self)
	{
	 	var data = self.driver.get(msg) ;
		return data; 
	}
	async set(msg,func,self)
	{
	 	var data = self.driver.set(msg) ;
		return data; 
	}
	async validate(msg,func,self)
	{
	 	var data = self.driver.validate(msg) ;
		return data; 
	}
}