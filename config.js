module.exports = class captchaConfig
{
    constructor(config)
    { 
         
    }
    getPackages()
    {
        if(this.config.driver)
        {
            
        }
       return []
    }
    getMessage()
	{
		return{
			default001:"user not exist", 
		}
	}
    getVersionedPackages()
    { 
      return []
    }
    getDefaultConfig()
    {
      return {
            		 
      }
    }
}