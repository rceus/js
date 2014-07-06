//Get Elements by Class Name

function getElementByClassName(classname, node){
	if(!node){
		node=document.getElementsByTagName('body')[0];
	}

	var a = [], re=new RegExp('\\b' +classname+ '\\b');
	els=node.getElementsByTagName('*');
	for (var i = 0, j=els.length; i<j; i++) 
	{
		if(re.test(els[i].classname)){
			a.push(els[i]);
		}
	}
	return a;
}