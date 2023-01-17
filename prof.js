function save(){
    var FincName = document.querySelector(".input1").value;
    var name1 = document.querySelector(".input2").value;
    var phone = document.querySelector(".input3").value;
    var email = document.querySelector(".input4").value;

    $(".fincname").html(FincName);
    $(".name").html(name1);
    $(".phoneno").html(phone);
    $(".email").html(email);


}

