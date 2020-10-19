function createFooter (){
    var productThumb = document.querySelector(".product__image").src;
    var productTitle = document.querySelector(".productName").textContent;
    var normalPrice = document.querySelector(".skuBestPrice").innerHTML;
    var desc = parseFloat(normalPrice.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g), 10);
    var precoDesconto = desc - desc * 0.1;
    precoDesconto.toString();
    
    //Creating elements
    var mainContainer = document.createElement("DIV");
    var productContainer = document.createElement("DIV");
    var productImg = document.createElement("IMG");
    var finalizarBtn = document.createElement("BUTTON");
    var closeBtn = document.createElement("BUTTON");
    var productDetails = document.createElement("DIV");
    var productName = document.createElement("H3");
    var productPrice = document.createElement("SPAN");
    var productDesconto = document.createElement("SPAN");
    
    closeBtn.addEventListener("click", () => {
      mainContainer.style.display = "none";
    });
    
    //Main container style
    mainContainer.style.textAlign = "center";
    mainContainer.style.display = "flex";
    mainContainer.style.justifyContent = "space-between";
    mainContainer.style.alignItems = "center";
    mainContainer.style.padding = "16px";
    mainContainer.style.fontSize = "smaller";
    mainContainer.style.paddingTop = "15px";
    mainContainer.style.position = "fixed";
    mainContainer.style.bottom = "0";
    mainContainer.style.width = "100%";
    mainContainer.style.height = "150px";
    mainContainer.style.backgroundColor = "white";
    mainContainer.style.zIndex = "100";
    
    //Product container style
    productContainer.style.display = "flex";
    productContainer.style.marginLeft = "30px";
    
    // //Product details style
    productName.innerHTML = `${productTitle}`;
    productPrice.innerHTML = `Preço: ${normalPrice}`;
    productDesconto.innerHTML = `Preço com desconto: R$ ${precoDesconto
      .toPrecision(4)
      .toString()
      .replace(".", ",")}`;
    productDetails.style.display = "flex";
    productDetails.style.flexDirection = "column";
    productDetails.style.marginLeft = "10px";
    productDetails.style.justifyContent = "center";
    productDetails.style.alignItems = "flex-start";
    productDetails.style.width = "700px";
    productName.style.fontSize = "16px";
    productImg.style.maxWidth = "100%";
    productImg.style.height = "120px";
    productImg.src = `${productThumb}`;
    
    //Finalizar compra style
    finalizarBtn.innerHTML = `ADICIONAR À SACOLA`;
    closeBtn.innerHTML = `X`;
    closeBtn.style.backgroundColor = `white`;
    closeBtn.style.border = `none`;
    finalizarBtn.style.color = "white";
    closeBtn.style.width = "30px";
    closeBtn.style.height = "30px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "20px";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.alignSelf = "flex-start";
    finalizarBtn.style.border = "none";
    finalizarBtn.style.width = "220px";
    finalizarBtn.style.height = "50px";
    finalizarBtn.style.backgroundColor = "black";
    finalizarBtn.style.cursor = "pointer";
    finalizarBtn.style.display = "flex";
    finalizarBtn.style.alignItems = "center";
    finalizarBtn.style.justifyContent = "center";
    finalizarBtn.style.fontSize = "12px";
    finalizarBtn.className = "product__add-to-cart";
    finalizarBtn.href = "javascript:;";
    
    productContainer.appendChild(productImg);
    productContainer.appendChild(productDetails);
    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productDesconto);
    mainContainer.appendChild(productContainer);
    mainContainer.appendChild(finalizarBtn);
    mainContainer.appendChild(closeBtn);
    document.getElementsByTagName("body")[0].appendChild(mainContainer);
}
createFooter()