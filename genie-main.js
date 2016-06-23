var GENIE = GENIE || {};
GENIE.createNS = function (namespace) {
    var nsparts = namespace.split(".");
    var parent = GENIE;
 
    // we want to be able to include or exclude the root namespace so we strip
    // it if it's in the namespace
    if (nsparts[0] === "GENIE") {
        nsparts = nsparts.slice(1);
    }
 
    // loop through the parts and create a nested namespace if necessary
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // check if the current parent already has the namespace declared
        // if it isn't, then create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // get a reference to the deepest element in the hierarchy so far
        parent = parent[partname];
    }
    // the parent is now constructed with empty namespaces and can be used.
    // we return the outermost namespace
    return parent;
};
GENIE.createNS("GENIE.UTILITY.PAGE");
GENIE.UTILITY.PAGE.icsContent = (function(pageContext){

	var pgCntxt = pageContext;
	if(pgCntxt.appName=='ICS' && pgCntxt.moduleName=='HOME' && pgCntxt.pageNumber==1)
	{
		return{
			value:"This is landing page of ICS. You could do following Activity :\n1. Create Connection\n2. Create Integration Flow"
		};
	}
	return{
		value:"Oracle DOC Repository doesn't contain any information regarding the current page!!"
	};
});
GENIE.createNS("GENIE.MAIN");
GENIE.MAIN.Application = (function() {
    var internalState = "Message";
	var pageContext = {
		appName:"",
		moduleName:"",
		pageName:"",
		pageNumber:1
	};
    var privateMethod = function() {
        // Do private stuff, or build internal.
        return internalState;
    };
    var publicMethod = function() {
        return privateMethod() + " stuff";
    };
	var updatePageContext = function(appName,moduleName,pageName,pageNumber){
		pageContext.appName = appName;
		pageContext.moduleName = moduleName;
		pageContext.pageName = pageName;
		pageContext.pageNumber = pageNumber;
	};	
	var getNextPageDetail = function(){
		updatePageContext('ICS','HOME','HOME',1)
		return GENIE.UTILITY.PAGE.icsContent(pageContext);
	};

    return {
        someProperty: 'prop value',
        publicMethod: publicMethod,
		getNextPageDetail:getNextPageDetail
    };
})();

