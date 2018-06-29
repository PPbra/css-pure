showPic = (n)=>{
    var a = "img-container-" + n.toString();
    console.log(typeof a);
    var tmp =document.getElementsByClassName(a);
    var tmp1 =document.getElementsByClassName("img-container-1");
    var tmp2 =document.getElementsByClassName("img-container-2");
    var tmp3 =document.getElementsByClassName("img-container-3");
    var tmp4 =document.getElementsByClassName("img-container-4");
    tmp1[0].getElementsByTagName("img")[0].style.display="none";
    tmp2[0].getElementsByTagName("img")[0].style.display="none";
    tmp3[0].getElementsByTagName("img")[0].style.display="none";
    tmp4[0].getElementsByTagName("img")[0].style.display="none";
    tmp[0].getElementsByTagName("img")[0].style.display="block";
}

nextPic =()=>{
    var k = 3;
    for(let i = 1 ; i < 5 ; i++){
        if(document.getElementsByClassName('img-container-'+i.toString())[0].getElementsByTagName('img')[0].style.display==='block') {
            k = i+1;
        }
        else{
            continue;
        }
    }
    if(k===5){
        document.getElementsByClassName('img-container-1')[0].getElementsByTagName('img')[0].style.display= 'block';
        document.getElementsByClassName('img-container-4')[0].getElementsByTagName('img')[0].style.display= 'none';
        return;
    }
    let t =k-1;
    document.getElementsByClassName('img-container-'+t.toString())[0].getElementsByTagName('img')[0].style.display = 'none';
    document.getElementsByClassName('img-container-'+k.toString())[0].getElementsByTagName('img')[0].style.display = 'block';
}

prePic =()=>{
    var k = 3;
    for(let i = 1 ; i < 5 ; i++){
        if(document.getElementsByClassName('img-container-'+i.toString())[0].getElementsByTagName('img')[0].style.display==='block') {
            k = i-1;
        }
        else{
            continue;
        }
    }
    if(k===0){
        document.getElementsByClassName('img-container-4')[0].getElementsByTagName('img')[0].style.display= 'block';
        document.getElementsByClassName('img-container-1')[0].getElementsByTagName('img')[0].style.display= 'none';
        return;
    }
    let t =k+1;
    document.getElementsByClassName('img-container-'+t.toString())[0].getElementsByTagName('img')[0].style.display = 'none';
    document.getElementsByClassName('img-container-'+k.toString())[0].getElementsByTagName('img')[0].style.display = 'block';
}

window.setInterval(()=>{
    nextPic();
},2000)