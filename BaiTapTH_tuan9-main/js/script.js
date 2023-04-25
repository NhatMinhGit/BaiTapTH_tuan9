// Khởi tạo Array
var list = [acc1,acc2,acc3,acc4,acc5];
// Khởi tạo
var acc1 = {
    fulln : "m11",
    usename : "n11",
    pass : "123"
};
var acc2 = {
    fulln : "m12",
    usename : "n12",
    pass : "123"
};
var acc3 = {
    fulln : "m13",
    usename : "n13",
    pass : "123"
};
var acc4 = {
    fulln : "m14",
    usename : "n14",
    pass : "123"
};
var acc5 = {
    fulln : "m15",
    usename : "n15",
    pass : "123"
};

function Show(){
    /*
    var fulln = document.getElementById("fulln").value;
    
    var usename = document.getElementById("use").value;
    var pass = document.getElementById("pwd").value;*/
    alert("{"+"\n"+"Fullname :" + acc1.fulln + "\n" + "Usename :"+ acc1.usename +"\n"+ "Password :" + acc1.pass +"\n"+"}"+"\n");
    alert("{"+"\n"+"Fullname :" + acc2.fulln + "\n" + "Usename :"+ acc2.usename +"\n"+ "Password :" + acc2.pass +"\n"+"}"+"\n");
    alert("{"+"\n"+"Fullname :" + acc3.fulln + "\n" + "Usename :"+ acc3.usename +"\n"+ "Password :" + acc3.pass +"\n"+"}"+"\n");
    alert("{"+"\n"+"Fullname :" + acc4.fulln + "\n" + "Usename :"+ acc4.usename +"\n"+ "Password :" + acc4.pass +"\n"+"}"+"\n");
    alert("{"+"\n"+"Fullname :" + acc5.fulln + "\n" + "Usename :"+ acc5.usename +"\n"+ "Password :" + acc5.pass +"\n"+"}"+"\n");

}
function validateForm(){
    var fulln = document.getElementById("fulln").value;
    fullnKT = /[^a-zA-Z]+/i;
    if(fulln.match(fullnKT)){
        alert("Họ tên phải chỉ chứa chữ cái!");
        return false;
    }
    var usename = document.getElementById("use").value;
    usenameKT = /[^\w]+/i;
    if(usename.match(usenameKT)){
        alert("Tên đăng nhập kiểu chữ hoặc số!");
        return false;
    }
    var pass = document.getElementById("pwd").value;
    passKT = /[^\w|\S]+/;
    if(pass.match(passKT)){
        alert("Mật khẩu phải chứa chữ,số và kí tự đặt biệt,không khoảng trắng");
        return false;
    }
  
    alert("Đã hợp lệ");
    return true;
}


function showData(){
    var list;
    if(localStorage.getItem("list")==null){
        list =[];
    }
    else{
        list = JSON.parse(localStorage.getItem("list"));
    }

    var html = "";

    list.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.fulln + "</td>";
        html += "<td>" + element.usename + "</td>";
        html += "<td>" + element.pass + "</td>"; 
        html += '<td><button onclick="deleteData('+index+')" class="btn btn-danger">Them</button> ';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){
    if(validateForm() == true){
        var fulln = document.getElementById("fulln").value;
        var usename = document.getElementById("use").value;
        var pass = document.getElementById("pwd").value;
        
        var list;
        if(localStorage.getItem("list")==null){
            list =[];
        }
        else{
            list = JSON.parse(localStorage.getItem("list"));
        }
        list.push({
            fulln : fulln,
            usename : usename,
            pass :pass,
        });

        localStorage.setItem("list", JSON.stringify(list));
        showData();
        document.getElementById("fulln").value = "";
        document.getElementById("usename").value = "";
        document.getElementById("pass").value = "";
    }
}
