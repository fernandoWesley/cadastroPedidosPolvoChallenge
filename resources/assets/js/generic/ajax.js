function buscaDadosAjax(url,pars,idElemento)
{
	pars = pars+'&ajax=1';
	var myAjax = new Ajax.Updater(
		idElemento, 
		url, 
		{
			method: 'get', 
			parameters: pars,
		});
}


function buscaDadosAjaxPost(url,pars,idElemento)
{
	pars = pars+'&ajax=1';
	var myAjax = new Ajax.Updater(
		idElemento, 
		url, 
		{
			method: 'post', 
			parameters: pars
		});
}
