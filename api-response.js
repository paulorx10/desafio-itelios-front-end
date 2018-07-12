
window.onload = function loadXMLDoc() {

var xmlhttp = new XMLHttpRequest();
var url = "products.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var arr = JSON.parse(this.responseText);
       IteliosJson(arr);
    }
};
xmlhttp.overrideMimeType("application/json");
xmlhttp.open("GET", url, true);
xmlhttp.send();

//myFunction recebe retorno json -> (arr)
function IteliosJson(arr) {
  localStorage.setItem('stop', "0"); //atualiza 0 em stop -> ativa transição dos itens
   var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
       //tratamento dos itens em array
        out += '<ul><p class="p-item">Voce visitou:</p>';
          out += '<li id="item" class="item">'; 
            out +='<img width="192" height="120" title="'+ arr[i].data.item["name"] +'" src="images/iPhone-SE-Apple-com-16GB-Tela-4-iOS-9-Sensor-de-Impressao-Digital-Camera-iSight-12MP-Wi-Fi-3G-4G-GPS-MP3-Bluetooth-e-NFC-Cinza-Espacial.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.item["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[0].data.item["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.item["productInfo"].paymentConditions + '</p></div>';
          out += '</li>';
          out += '<p class="p-itens">e talvez se interesse por:</p><ul class="objs"><li id="1" class="itens">'; 
            out +='<img width="292" height="120" title="'+ arr[i].data.recommendation[0]["name"] +'" src="images/iPhone-SE-Apple-com-16GB-Tela-4-iOS-9-Sensor-de-Impressao-Digital-Camera-iSight-12MP-Wi-Fi-3G-4G-GPS-MP3-Bluetooth-e-NFC-Cinza-Espacial.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[i]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[0].data.recommendation[0]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[0]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></li>';
          out += '<li id="2" class="itens">'; 
            out +='<img width="292" height="220" title="'+ arr[i].data.recommendation[1]["name"] +'" src="images/apple-macbook-air-13-i5-16ghz-8gb-128gb-ssd-mmgf2-11549005.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[1]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[i].data.recommendation[1]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[1]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></button></li>';
           out += '<li id="3" class="itens">'; 
            out +='<img width="292" height="220" title="'+ arr[i].data.recommendation[2]["name"] +'" src="images/MacBook-Pro-Apple-MJLQ2BZ-A-com-Intel-Core-i7-Quad-Core-16GB-256GB-SSD-Leitor-de-Cartoes-HDMI-Bluetooth-Tela-LED-Retina-15-4-e-OS-X-Yosemite-4996363.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[i]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[i].data.recommendation[2]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[2]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></li>';
          out += '<li id="4" class="itens deactive">'; 
            out +='<img width="292" height="220" title="'+ arr[i].data.recommendation[3]["name"] +'" src="images/iMac-Apple-MK142BZ-A-com-Intel-Core-i5-Dual-Core-8GB-1TB-Leitor-de-Cartoes-Wireless-Bluetooth-Webcam-LED-21-5-e-OS-X-El-Capitan-6823995.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[3]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[i].data.recommendation[3]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[3]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></li>';
          out += '<li id="5" class="itens deactive">'; 
            out +='<img width="292" height="220" title="'+ arr[i].data.recommendation[4]["name"] +'" src="images/Mac-Mini-Apple-MGEN2BZ-A-com-Intel-Core-i5-Dual-Core-8GB-1TB-Leitor-de-Cartoes-HDMI-Wireless-AC-Bluetooth-4-0-e-OS-X-Yosemite-3865616.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[4]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[i].data.recommendation[4]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[4]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns ">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></li>';
          out += '<li id="6" class="itens deactive">'; 
            out +='<img width="292" height="220" title="'+ arr[i].data.recommendation[5]["name"] +'" src="images/Mac-Mini-Apple-MGEN2BZ-A-com-Intel-Core-i5-Dual-Core-8GB-1TB-Leitor-de-Cartoes-HDMI-Wireless-AC-Bluetooth-4-0-e-OS-X-Yosemite-3865616.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[5]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[i].data.recommendation[5]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[5]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns ">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></li>';
          out += '<li id="7" class="itens deactive">'; 
            out +='<img width="292" height="220" title="'+ arr[i].data.recommendation[6]["name"] +'" src="images/iphone-6s-apple-com-tela-47-hd-32gb-3d-touch-ios-9-sensor-touch-id-camera-isight-12mp-wi-fi-4g-gps-bluetooth-e-nfc-cinza-espacial-10404692.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[6]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[i].data.recommendation[6]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[6]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns ">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></li>';
          out += '<li id="8" class="itens deactive">'; 
            out +='<img width="292" height="220" title="'+ arr[i].data.recommendation[7]["name"] +'" src="images/iphone-7-apple-plus-red-com-128gb-tela-retina-hd-de-55-ios-10-dupla-camera-traseira-resistente-a-agua-wi-fi-4g-lte-e-nfc-vermelho-11466328.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[7]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[i].data.recommendation[7]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[7]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns ">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></li>';
            out += '<li id="9" class="itens deactive" >'; 
            out +='<img width="292" height="220" title="'+ arr[i].data.recommendation[8]["name"] +'" src="images/apple-macbook-air-13-i5-16ghz-8gb-128gb-ssd-mmgf2-11549005.png">';
            out += '<a href="#" class="title">' + 
            arr[i].data.recommendation[8]["name"] + '</a>';
            out += '<div class="box-item-text"><p class="text">Por: <span class="price">'+ arr[i].data.recommendation[8]["price"] + '<span></p>';
            out += '<p class="text">'+ arr[i].data.recommendation[8]["productInfo"].paymentConditions + '</p></div>';
          out += '<button type="button" class="btns ">adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button></li>';
        out += '</ul></ul>';
        out += '<div class="footer-itens"><div class="box-footer"><button>adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></button</div></div>'; 
        //functions js
        $(document).ready(function(){

          $(".btns").hide();
          
          // efeitos hover + add ao carrinho btns on
          $("ul .itens").hover(function() {
           $(this).find("button").show();
           $(this).find("img").css({"width":"182px","height":"192px"});

          }, function() {
            $(this).find("button").hide();
            $(this).find("img").css({"width":"172px","height":"172px"});
           
          });
          $(".btns").hover(function() {
            $(this).find("i").css({"color":"#ff6600"});
          }, function() {
            $(this).find("i").css({"color":"#3f4857"});
          });
          $(".box-footer button").hover(function() {
            $(this).css({"border-left":"5px solid #ff6600"});             
            $(this).find("i").css({"color":"#ff6600"});
          }, function() {

            $(this).css({"border-left":"5px solid #fff"});  
            $(this).find("i").css({"color":"#3f4857"});
          });

          // efeitos transição auto -> 3 segundos  
          setInterval(function(){

            var lifirst = $("li").attr("id");
            var lilimit1 = $(".itens:eq(0)").show();
            var lilimit2 = $(".itens:eq(1)").show();
            var lilimit3 = $(".itens:eq(2)").show();
            var lilimit5 = $(".itens:eq(3)").hide();
            var lilimit6 = $(".itens:eq(4)").hide();
            var lilimit6 = $(".itens:eq(5)").hide();
            var lilimit7 = $(".itens:eq(6)").hide();
            var lilimit8 = $(".itens:eq(7)").hide();
            var lilimit9 = $(".itens:eq(8)").hide();

          }, 100); 

          //funcao next item atualiza a cada 4 segundos
          setInterval(function next(){ 

          //variaveis para checkar teve click manual ação do usuario
          var nextitem = false;
          var nextstop = localStorage.getItem('stop'); //stop null or 0 -> auto stop == 1 efeito stroped

          if(!nextitem && nextstop == "" || nextstop == 0){
            var stop = 0;
            var next = $('.itens:eq(4)');

            next.closest('.objs').prepend($(".itens").next()); 
            console.log("next on");

            $("ul li button").hide();

          }

          }, 4000);
          
          // transação manual desativada aguardando click para ativar
          /*$('li').click(function Click(){ 

          $($(this).closest('ul')).prepend($("li").next());
            
            //ativa nextitem como true e stop 1           
            nextitem = true;
            stop = 1;
            //adiciona 1 para stop na lista dos itens em modo automatico
            localStorage.setItem('stop', stop);
            console.log("auto next stop");     
          }); */

      });
    }
    //enviando retorno > (DOM) front end  
    document.getElementById("response").innerHTML = out;

  }

}


