var request = require('request');
module.exports = class recaptcha
{
	constructor(driver)
	{
		this.secretKey=driver.secretKey;
	} 
	async get(msg)
	{  
		return {}
	}
	async set(msg)
	{ 
		return {} 
	}
	async validate(msg)
	{ 
	 	var dt=msg.data;
		var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + this.secretKey 
		+ "&response=" + dt['g-recaptcha-response'] + "&remoteip=" + this.remoteIp;
		var data = global.web.get(verificationUrl);
		
		return dt.accept;
	}
}