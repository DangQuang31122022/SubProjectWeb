function hienthi(id){
    console.log(id);
    localStorage.setItem("id",id); /*luu id vao localstorage*/
}


function renderProductRandom(a,b,c){
    var str = "";
    var ds = []; //danh sách id đã random 
    for (let z = 0 ; z < c ; z++){
        var i = Math.floor(Math.random() * (a - b + 1) ) + b;
        // kiểm tra xem id đã random có trong danh sách chưa
        while(ds.indexOf(i)>=0){
            i = Math.floor(Math.random() * (a - b + 1) ) + b;   
        }
        ds.push(i); 

        str += 
        '<div class=" col-6 col-md-3 picture" id="'+  data[i].id +'" onclick="hienthi('+ data[i].id +')" >' +
            '<a href="./ProductInfo.html"><img src="../picture/data_picture/'+ data[i].picture[0] +'" alt="Picture"></a>' +
            '<a href="./ProductInfo.html"><p class="name-watch">'+ data[i].name +'</p></a>'+
            '<p class="price">' + Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data[i].price * 1000) +'</p>'+
        '</div>'
        ;
    }
    return str;
}

//render trang chu
function renderMainPage(){
    document.getElementById('row-seller').innerHTML = renderProductRandom(0,16, 8) ;
    document.getElementById('row-recommand').innerHTML = renderProductRandom(1,17,8) ;
}
function toGH(){
    location.href = './purchase.html';
}
function toLogin() {
    location.href = './login.html';
}
