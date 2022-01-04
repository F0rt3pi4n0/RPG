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

time.innerHTML = "<h3> Done by F0rt3pi4n0 &copy; </h3>"+dzien+"/"+mc+"/"+rok+" "+godz+":"+min+":"+sec;

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



function swtch_shw()
{
	sld_l.style.opacity = 1;
	sld_r.style.opacity = 1;
}

function swtch_ushw()
{
	sld_l.style.opacity = 0;
	sld_r.style.opacity = 0;
}


var activepic = 0;

function chg_slide(chgs)
{
	activepic += chgs;
	var pics = ["../pics/diceu1.jpg","../pics/diceu2.jpg","../pics/diceu3.jpg"];
	if (activepic >= pics.length)
	{
		activepic = 0;
	}
	else if (activepic < 0)
	{
		activepic = pics.length-1;
	}


	for (var i = 0; i <= pics.length ; i++)
	{
		if (activepic == i)
		{
			if (activepic > pics.length)
			{
				activepic--;
			}
			picture.src = pics[i];



		}

	}



}
