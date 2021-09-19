function zegar() 
{


var dzisiaj = new Date();

var dzien = dzisiaj.getDate();
if (dzien<10) dzien="0"+dzien;

var mc = dzisiaj.getMonth()+1;
if (mc<10) mc="0"+mc;

var rok = dzisiaj.getFullYear();

var godz = dzisiaj.getHours();
if (godz<10) godz="0"+godz;

var min = dzisiaj.getMinutes();
if (min<10) min="0"+min;

var sec = dzisiaj.getSeconds();
if (sec<10) sec="0"+sec;

time.innerHTML = dzien+"/"+mc+"/"+rok+" "+godz+":"+min+":"+sec;

setTimeout('zegar()', 1000);

}

function show(a)
{
	if(a == 1)
	{
		akcje.style.opacity = '1';
		akcje.style.position = 'initial';
		podstawy.style.opacity = '0';
		podstawy.style.position = 'absolute';
	}
	else if (a == 2) 
	{
		bon_ak.style.opacity = '1';
		bon_ak.style.position = 'initial';
		podstawy.style.opacity = '0';
		podstawy.style.position = 'absolute';
	}
	else if (a == 3) 
	{
		tura.style.opacity = '1';
		tura.style.position = 'initial';
		podstawy.style.opacity = '0';
		podstawy.style.position = 'absolute';
	}
	else if (a == 4)
	{
		tur_en.style.opacity = '1';
		tur_en.style.position = 'initial';
		podstawy.style.opacity = '0';
		podstawy.style.position = 'absolute';
	}
}

function unshow(a)
{
	if(a == 1)
	{
		akcje.style.opacity = '0';
		akcje.style.position = 'absolute';
		podstawy.style.opacity = '1';
		podstawy.style.position = 'initial';
	}
	else if (a == 2) 
	{
		bon_ak.style.opacity = '0';
		bon_ak.style.position = 'absolute';
		podstawy.style.opacity = '1';
		podstawy.style.position = 'initial';
	}
	else if (a == 3) 
	{
		tura.style.opacity = '0';
		tura.style.position = 'absolute';
		podstawy.style.opacity = '1';
		podstawy.style.position = 'initial';
	}
	else if (a == 4)
	{
		tur_en.style.opacity = '0';
		tur_en.style.position = 'absolute';
		podstawy.style.opacity = '1';
		podstawy.style.position = 'initial';
	}
}





function ht_show(a)
{
	if (a == 1)
	{	
		byy.style.opacity = '1';
	}
	else if (a == 2)
	{
		byty.style.opacity = '1';
	}

}

function ht_unshow(a) 
{
	if (a == 1)
	{
		byy.style.opacity = '0';
	}
	else if (a == 2)
	{
		byty.style.opacity = '0';
	}
}