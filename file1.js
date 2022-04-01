const Mobiles=[
{"image":"https://i.ibb.co/cLV4RvX/google-pixel-3.jpg","RAM":["8 GB"],"ROM":["256 GB","128 GB","64 GB"],"name":"Pixel 3","brand":"Google","colors":["Blue","Black","White"]},
{"image":"https://i.ibb.co/160YSpk/mi-redmi-5.jpg","RAM":["6 GB","4 GB"],"ROM":["128 GB","64 GB"],"name":"Redmi 5","brand":"Xiaomi","colors":["Red","Gold","Black","White"]},
{"image":"https://i.ibb.co/y6dk6n1/mi-redmi-y2.jpg","RAM":["3 GB"],"ROM":["32 GB"],"name":"Redmi Y2","brand":"Xiaomi","colors":["Rose Gold","Gold","Black","White"]},
{"image":"https://i.ibb.co/McQMDF8/motorola-moto-e5-plus.jpg","RAM":["6 GB"],"ROM":["128 GB","64 GB"],"name":"Moto E5 Plus","brand":"Motorola","colors":["Grey","Black","Pink"]},
{"image":"https://i.ibb.co/1QGFW28/nokia-6-1.jpg","RAM":["6 GB"],"ROM":["128 GB"],"name":"6.1","brand":"Nokia","colors":["Grey","Black","Blue"]},
{"image":"https://i.ibb.co/vJbK6qM/realme-c1.jpg","RAM":["6 GB","4 GB","3 GB"],"ROM":["128 GB","64 GB"],"name":"C1","brand":"Realme","colors":["Red","Gold","Black","White","Grey"]},
{"image":"https://i.ibb.co/F6c80H6/realme-x.jpg","RAM":["4 GB","3 GB"],"ROM":["64GB","32 GB"],"name":"X","brand":"Realme","colors":["Rose Gold","Gold","Black","White","Pink"]},
{"image":"https://i.ibb.co/TWLNRyW/samsung-galaxy-s10-plus.jpg","RAM":["6 GB","4 GB"],"ROM":["64 GB"],"name":"Galaxy S10","brand":"Samsung","colors":["Red","Gold","White"]},
{"image":"https://i.ibb.co/ScZsMtW/vivo-z1-pro.jpg","RAM":["8 GB","6 GB"],"ROM":["128 GB","64 GB"],"name":"Z1 Pro","brand":"Vivo","colors":["White","Deep Blue"]}
];
const ramOptions= ["8 GB","6 GB","4 GB","3 GB","2 GB"];
const romOptions=["256 GB","128 GB","64 GB","32 GB","16 GB"];
const colors=["Rose Gold","Gold","Black","Grey","White","Red","Pink","Blue","Deep Blue"];
const brands=["Google","Samsung","Oppo","Nokia","Xiaomi","Realme","Apple"];

let myCart=[];



function alertfun(id,msg=''){
	console.log(id);
	document.getElementById(id).innerHTML= msg;
}

function editMobile(url){
	showAddMobileForm('Update Product','update','Update Mobile');
	//console.log(url);
	let ele=Mobiles.find(mo=>mo.image==url);
	//console.log(ele);
	let {image,RAM,ROM,name,brand,colors}=ele;

	document.getElementById('name').value=name;
	document.getElementById('name').disabled=true;
	document.getElementById('url').value=image;
	document.getElementById('brandSelect').value=brand;

	for(let i=0;i<RAM.length;i++){
		let ele=document.getElementById(RAM[i]).checked=true;
	}

	for(let i=0;i<ROM.length;i++){
		let ele=document.getElementById(ROM[i]).checked=true;
	}

	for(let i=0;i<colors.length;i++){
		let ele=document.getElementById(colors[i]).checked=true;
	}
	
}

function update(){
	console.log('update')
	let name=document.getElementById('name').value;
	let url=document.getElementById('url').value;
	let brand=document.getElementById('brandSelect').value;
	let ram=[];
	let rom=[];
	let color=[];

	for(let i=0;i<ramOptions.length;i++){
		let ele=document.getElementById(ramOptions[i]);
		if(ele.checked){
			ram.push(ele.value);
		}
	}

	for(let i=0;i<romOptions.length;i++){
		let ele=document.getElementById(romOptions[i]);
		if(ele.checked){
			rom.push(ele.value);
		}
	}

	for(let i=0;i<colors.length;i++){
		let ele=document.getElementById(colors[i]);
		if(ele.checked){
			color.push(ele.value);
		}
	}
	let namef=romf=ramf=cf=brandf=urlf=false;
	//console.log(name,url,brand,ram,rom,color);
	if(name==''){
		alertfun('nameError','Product name is mandatory');
	}else{
		namef=true;
		alertfun('nameError','');
	}
	if(url==''){
		alertfun('urlError','URL is mandatory');
	}else{
		urlf=true;
		alertfun('urlError','');
	}
	if(brand=='0'){
		alertfun('brandError','Select a brand');
	}else{
		brandf=true;
		alertfun('brandError','');
	}
	 if(rom.length==0){
	 	alertfun('romError','Select atleast a rom');
	 }else{
	 	romf=true;
	 	alertfun('romError','');
	 }
	 if(ram.length==0){
	 	alertfun('ramError','Select atleast a ram');
	 }else{
	 	ramf=true;
	 	alertfun('ramError','');
	 }
	 if(color.length==0){
	 	alertfun('colorError','Select atleast a color');
	 }else{
	 	cf=true;
	 	alertfun('colorError','');
	 }
	  if(namef && romf && ramf && cf && brandf && urlf){
	  	
	  	let ind=Mobiles.findIndex(mo=>mo.name==name);
	  	Mobiles[ind].image=url;
	  	Mobiles[ind].RAM=ram;
	  	Mobiles[ind].ROM=rom;
	  	Mobiles[ind].brand=brand;
	  	Mobiles[ind].colors=color;
	  	alert('Update Success');
	  	showMobileForm();
	  }
}

/*---------------------------Add---------------------------------------*/

function addProduct(){
	let name=document.getElementById('name').value;
	let url=document.getElementById('url').value;
	let brand=document.getElementById('brandSelect').value;
	let ram=[];
	let rom=[];
	let color=[];

	for(let i=0;i<ramOptions.length;i++){
		let ele=document.getElementById(ramOptions[i]);
		if(ele.checked){
			ram.push(ele.value);
		}
	}

	for(let i=0;i<romOptions.length;i++){
		let ele=document.getElementById(romOptions[i]);
		if(ele.checked){
			rom.push(ele.value);
		}
	}

	for(let i=0;i<colors.length;i++){
		let ele=document.getElementById(colors[i]);
		if(ele.checked){
			color.push(ele.value);
		}
	}
	let namef=romf=ramf=cf=brandf=urlf=false;
	//console.log(name,url,brand,ram,rom,color);
	if(name==''){
		alertfun('nameError','Product name is mandatory');
	}else{
		namef=true;
		alertfun('nameError','');
	}
	if(url==''){
		alertfun('urlError','URL is mandatory');
	}else{
		urlf=true;
		alertfun('urlError','');
	}
	if(brand=='0'){
		alertfun('brandError','Select a brand');
	}else{
		brandf=true;
		alertfun('brandError','');
	}
	 if(rom.length==0){
	 	alertfun('romError','Select atleast a rom');
	 }else{
	 	romf=true;
	 	alertfun('romError','');
	 }
	 if(ram.length==0){
	 	alertfun('ramError','Select atleast a ram');
	 }else{
	 	ramf=true;
	 	alertfun('ramError','');
	 }
	 if(color.length==0){
	 	alertfun('colorError','Select atleast a color');
	 }else{
	 	alertfun('colorError','');
	 	cf=true;

	 }
	  if(namef && romf && ramf && cf && brandf && urlf){
	  	alertfun('colorError','');
	  	let json={"image":url,"RAM":ram,"ROM":rom,"name":name,"brand":brand,"colors":color};
	  	Mobiles.push(json);
	  	alert('Add Success');
	  	showMobileForm();
	  }
}

function showAddMobileForm(btn='Add Product',call='addProduct',title='Add a New Product'){
	console.log('show add mobile from');
	  let txt='<h2>'+title+'</h2>';
    txt+='<div class="form-group">';
    txt+='<label for="formGroupExampleInput">Product Name</label>';
    txt+='<input type="text" class="form-control"  id="name" placeholder="Enter Product name">';
    txt+='<small id="nameError"></small>';
    txt+='</div>';
    txt+='<div class="form-group">';
    txt+='<label for="formGroupExampleInput2">Product Image</label>';
    txt+='<input type="text" class="form-control"  id="url" placeholder="Enter URL of product image">';
    txt+='<small id="urlError"></small>';
    txt+='</div>';
    txt+='<select class="custom-select" id="brandSelect" >';
    txt+='<option selected disabled value="0">Select Brand</option>';
    let barr=brands.map(bb=>{
    	return '<option value="'+bb+'">'+bb+'</option>';
    });
    txt+=barr.join('');
    txt+='</select>';
    txt+='<small id="brandError"></small><br>';

    txt+='<label>Choose RAM options</label>';
    txt+='<br><small id="ramError"></small>';
    let ramArr=ramOptions.map(ram=>{
    	let str='<div class="form-check">';
    	str+='<input class="form-check-input"  type="checkbox" value="'+ram+'" id="'+ram+'">';
    	str+='<label class="form-check-label" for="defaultCheck1">'+ram+'</label>';
    	str+='</div>';
    	return str;
    });
    txt+=ramArr.join('');

    txt+='<label>Choose ROM options</label>';
    txt+='<br><small id="romError"></small>';
    let romArr=romOptions.map(rom=>{
    	let str='<div class="form-check">';
    	str+='<input class="form-check-input"  type="checkbox" value="'+rom+'" id="'+rom+'">';
    	str+='<label class="form-check-label" for="defaultCheck1">'+rom+'</label>';
    	str+='</div>';
    	return str;
    });
    txt+=romArr.join('');

    txt+='<label>Choose Color options</label>';
    txt+='<br><small id="colorError"></small>';
    let colArr=colors.map(col=>{
    	let str='<div class="form-check">';
    	str+='<input class="form-check-input" type="checkbox"  value="'+col+'" id="'+col+'">';
    	str+='<label class="form-check-label" for="defaultCheck1">'+col+'</label>';
    	str+='</div>';
    	return str;
    });
    txt+=colArr.join('');
    txt+='<button type="button" class="btn btn-primary" onclick="'+call+'()">'+btn+'</button>';
    document.getElementById('allMobile').innerHTML='';
    document.getElementById('showmobile').innerHTML='';
    document.getElementById('add').innerHTML=txt;
}


/*----------------------------Cart-------------------------------------*/
function removeFromCart(img){
		let ind=myCart.map(my=>my.image==img);
		myCart.splice(ind,1);
		showCartForm();
}

function showCartForm(){

	let arr=myCart.map(my=>{
		let{image,ram,rom,color,brand}=my;
		let txt='<div class="card d-flex flex-row justify-content-around text-center" style="width: 70rem; height:6rem;">';
  	txt+='<div style="width: 35rem;" class="text-center">';
  	txt+='<img class="mt-3" style="width: 2rem; height: 4rem;" src="'+image+'" alt="Card image cap">';
  	txt+='</div>';
  	txt+='<div  style="width:35rem;" class="text-center mt-1">';
  	txt+='<p class="card-text">'+brand+'<br>Color: '+color+', ROM: '+rom+', RAM: '+ram+' <br>';
  	txt+='<a href="#" class="btn btn-danger btn-sm" onclick="removeFromCart(\''+image+'\')">Remove from Cart</a></p>';
  	txt+='</div>';
  	txt+='</div>';
  	return txt;
	});
	document.getElementById('add').innerHTML='<p>Number of item in cart: '+myCart.length+' </p><br>'+arr.join('');
	document.getElementById('allMobile').innerHTML='';
	document.getElementById('showmobile').innerHTML='';
}

function addToCart(img){
	let brand=document.getElementById('brand').innerHTML;
	let rom=document.getElementById('selectRom').value;
	let ram=document.getElementById('selectRam').value;
	let color=document.getElementById('selectColor').value;
	if(rom==0){
		alert('Choose all the options before adding to cart');
	}else	if(ram=="0"){
		alert('Choose all the options before adding to cart');
	}else	if(color==0){
		alert('Choose all the options before adding to cart');
	}else{
		let ind=myCart.findIndex(ca=>ca.image==img);
		if(ind==-1){
			let json={'image':img,'ram':ram,'rom':rom,'color':color,'brand':brand};
			myCart.push(json);
			alert('Successfully added to cart');
			showMobileForm();
			document.getElementById('showmobile').innerHTML='';
		}else{
			alert(brand+' has alread been added to the cart');
		}
	}
}
/*---------------------------------Sho Mobile-------------------------*/

function showMobile(img){
	let ele=Mobiles.find(mob=>mob.image==img);
	let {image,RAM,ROM,name,brand,colors}=ele;
	let txt='<br><br><div class="card text-center border-0" style="width: 25rem;">';
  txt+='<div class=" text-center ">';
  txt+='<img src="'+image+'" style="height: 18rem; width: 10rem;" class="card-img-top " alt="...">';
  txt+='</div>';
  txt+='<div class="card-body">';
  txt+='<h5 class="card-title" id="brand">'+name+' from '+brand+'</h5>';
  txt+='<div class="d-flex flex-row justify-content-around">';
  txt+='<select class="custom-select" style="width: 8rem;" id="selectRam" >';
  txt+='<option selected disabled value="0">Select RAM</option>';
  let arr=RAM.map(ram=>'<option value="'+ram+'">'+ram+'</option>');
  txt+=arr.join('');
  txt+='</select>';
  txt+='<select class="custom-select" style="width: 8rem;" id="selectRom">';
  txt+='<option selected disabled value="0">Select ROM</option>';
  let rarr=ROM.map(rom=>'<option value="'+rom+'">'+rom+'</option>');
  txt+=rarr.join('');
  txt+='</select>';
  txt+='<select class="custom-select" style="width: 8rem;" id="selectColor">';
  txt+='<option selected disabled value="0">Select Color</option>';
  let carr=colors.map(col=>'<option value="'+col+'">'+col+'</option>');
  txt+=carr.join('');
  txt+='</select>';
  txt+='</div><br>';
  txt+='<a href="#" class="btn btn-primary" onclick="addToCart(\''+image+'\')">Add To Cart</a><br>';
  txt+='<div class="pt-2"><a href="#" class="btn btn-secondary " onclick="editMobile(\''+image+'\')">Edit Mobile</a></div>';
  txt+='</div>';
  txt+='</div>';
  document.getElementById('add').innerHTML='';
  document.getElementById('showmobile').innerHTML=txt;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showMobileForm(){
	document.getElementById('add').innerHTML='';
	let arr=Mobiles.map(mo=>{
		let {image,RAM,ROM,name,brand,colors}=mo;
		let txt='<ul class="mt-0 "><li>';
		txt+='<div class="card mb-3 cur" style="max-width: 540px;" onclick="showMobile(\''+image+'\')">';
    txt+='<div class="row no-gutters align-items-center">';
    txt+='<div class="col-md-2 text-center">';
    txt+='  <img src="'+image+'" class="card-img" alt="...">';
    txt+='</div>';
    txt+='<div class="col-md-8 ">';
     txt+=' <div class="card-body text-center">';
      txt+='  Name: '+name+'<br>';
      txt+='  Brand: '+brand+'<br>';
      txt+='  Colors: '+colors.join(',')+'<br>';
      txt+='  RAM: '+RAM.join(',')+'<br>';
      txt+='  ROM: '+ROM.join(',')+'';
      txt+='</div>';
      txt+='</div>';
    txt+='</div>';
    txt+='</div></li></ul>';
		return txt;
	});
	document.getElementById('allMobile').innerHTML=arr.join('');
}

/*---------------------------------------------NAV------------------*/

showNavbar();

function showNavbar(el='') {
	let txt='<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  	txt+='<a class="navbar-brand" href="#">MobileStore</a>';
  	txt+='<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">';
    txt+='<span class="navbar-toggler-icon"></span>';
  	txt+='</button>';
  	txt+='<div class="collapse navbar-collapse" id="navbarNav">';
    txt+='<ul class="navbar-nav">';
    let ac=(el=='add')?'active':'';
    let ac1=(el=='show')?'active':'';
    txt+='  <li class="nav-item '+ac1+'">';
    txt+='   <a class="nav-link" href="#" onclick="showMobileForm()">Mobiles<span class="sr-only">(current)</span></a>';
    txt+='  </li>';
    txt+='  <li class="nav-item '+ac+'">';
    txt+='    <a class="nav-link" href="#" onclick="showAddMobileForm()">Add a Mobile</a>';
    txt+='  </li>';
    txt+='  <li class="nav-item '+ac+'">';
    txt+='    <a class="nav-link" href="#" onclick="showCartForm()">Cart</a>';
    txt+='  </li>';
    txt+='</ul>';
  	txt+='</div>';
	txt+='</nav>';
	let ele=document.getElementById('navShow').innerHTML=txt;
}