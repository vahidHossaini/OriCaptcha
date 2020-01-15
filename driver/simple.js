var captchapng = require('captchapng');
var uuid=require("uuid");
var localStorage={};
function GetrandInt(n=12)
{
    var str=''
    var sr='23456890'
    for(var a=0;a<n;a++)
    {
        var i=getRandomArbitrary(0,sr.length)
        str+=sr[i]
    }
    if(str[0]=='0')
        str='1'+str
    return parseInt(str)
}
module.exports = class simple
{
	constructor(driver)
	{
		this.width=80;
		this.height=30;
		this.length=5;
		this.storage="ram";
		if(driver.width)this.width=driver.width
		if(driver.height)this.height=driver.height
		if(driver.length)this.length=driver.length
		if(driver.storage)this.storage=driver.storage
		
	} 
	async acceptCode(id)
	{
		if(this.storage==ram)
		{
			 localStorage[id].accept=true; 
		}
	}
	async getCode(id)
	{
		if(this.storage==ram)
		{
			var x= localStorage[id]; 
		}
		return {};
	}
	async setCode(code,mid)
	{
		var id =uuid.v4();
		if(mid)id=mid;
		if(this.storage==ram)
		{
			localStorage[id]={code,date:new Date()}
		}
		return id;
	}
	async get(msg)
	{ 
        var code=GetrandInt(this.length)
        var p = new captchapng(this.width,this.height,code);
		var id=await this.setCode(code);
		return {id}
	}
	async set(msg)
	{
	 	var dt=msg.data;
		var v= await this.getCode(dt.id);
		if(v.code==dt.code)
		{
			await this.acceptCode(dt.id);
			return {accept:true}
		} 
		var p = new captchapng(this.width,this.height,GetrandInt(this.length));
		var id=await this.setCode(p,dt.id);
		return {id:dt.id} 
	}
	async validate(msg)
	{ 
	 	var dt=msg.data;
		var v= await this.getCode(dt.id);
		return dt.accept;
	}
}