function appleProd() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./content/apple.json", true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = `
        <div class = "itemBanner">
           <img src = "https://gridcoregraphics.co.uk/wp-content/uploads/2018/08/iphone-x.jpg">
        </div>
           `;

      for (let i in produtos) {
        output += `
         <div class = "item">
               <img src = "${produtos[i].imagem}">
                  <h3>${produtos[i].titulo}</h3>
                  <span class = "preco">
                      <p>R$ ${produtos[i].preco} à vista</p>
                  </span>
                  <span class = "parcela">
                      <p>${produtos[i].parcela}</p>
                  </span>
                  
                  <button button-id="${produtos[i].id}">Comprar</button>
              </div>
              </a>
          `;
      }

      /* CAPACIDADE FILTER */
      document.addEventListener("click", (e) => {
        if (e.target.className === "32gb") {
          let memoria = produtos.filter((memoriaProd) => {
            return memoriaProd.memoria_interna === "32GB";
          });
          let output = `
           `;
          for (let i in memoria) {
            output += `
             <div class = "item">
                   <img src = "${memoria[i].imagem}">
                      <h3>${memoria[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${memoria[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${memoria[i].parcela}</p>
                      </span>
                      
                      <button button-id="${memoria[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }

        if (e.target.className === "64gb") {
          let memoria = produtos.filter((memoriaProd) => {
            return memoriaProd.memoria_interna === "64GB";
          });
          let output = `
           `;
          for (let i in memoria) {
            output += `
             <div class = "item">
                   <img src = "${memoria[i].imagem}">
                      <h3>${memoria[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${memoria[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${memoria[i].parcela}</p>
                      </span>
                      
                      <button button-id="${memoria[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }
      });

      /* MODEL FILTER */
      document.addEventListener("click", (e) => {
        if (e.target.className === "iphone5c") {
          let modelo = produtos.filter((modeloProd) => {
            return modeloProd.modelo === "iPhone 5c";
          });
          console.log(modelo);
          let output = `
           `;
          for (let i in modelo) {
            output += `
             <div class = "item">
                   <img src = "${modelo[i].imagem}">
                      <h3>${modelo[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${modelo[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${modelo[i].parcela}</p>
                      </span>
                      
                      <button button-id="${modelo[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }

        if (e.target.className === "iphone6s") {
          let modelo = produtos.filter((modeloProd) => {
            return modeloProd.modelo === "iPhone 6s";
          });
          console.log(modelo);
          let output = `
           `;
          for (let i in modelo) {
            output += `
             <div class = "item">
                   <img src = "${modelo[i].imagem}">
                      <h3>${modelo[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${modelo[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${modelo[i].parcela}</p>
                      </span>
                      
                      <button button-id="${modelo[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }

        if (e.target.className === "iphoneX") {
          let modelo = produtos.filter((modeloProd) => {
            return modeloProd.modelo === "iPhone X";
          });
          console.log(modelo);
          let output = `
           `;
          for (let i in modelo) {
            output += `
             <div class = "item">
                   <img src = "${modelo[i].imagem}">
                      <h3>${modelo[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${modelo[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${modelo[i].parcela}</p>
                      </span>
                      
                      <button button-id="${modelo[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }

        if (e.target.className === "iphone7") {
          let modelo = produtos.filter((modeloProd) => {
            return modeloProd.modelo === "iPhone 7";
          });
          console.log(modelo);
          let output = `
           `;
          for (let i in modelo) {
            output += `
             <div class = "item">
                   <img src = "${modelo[i].imagem}">
                      <h3>${modelo[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${modelo[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${modelo[i].parcela}</p>
                      </span>
                      
                      <button button-id="${modelo[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }

        if (e.target.className === "iphone5s") {
          let modelo = produtos.filter((modeloProd) => {
            return modeloProd.modelo === "iPhone 5s";
          });
          console.log(modelo);
          let output = `
           `;
          for (let i in modelo) {
            output += `
             <div class = "item">
                   <img src = "${modelo[i].imagem}">
                      <h3>${modelo[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${modelo[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${modelo[i].parcela}</p>
                      </span>
                      
                      <button button-id="${modelo[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }

        if (e.target.className === "iphoneSE") {
          let modelo = produtos.filter((modeloProd) => {
            return modeloProd.modelo === "iPhone SE";
          });
          console.log(modelo);
          let output = `
           `;
          for (let i in modelo) {
            output += `
             <div class = "item">
                   <img src = "${modelo[i].imagem}">
                      <h3>${modelo[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${modelo[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${modelo[i].parcela}</p>
                      </span>
                      
                      <button button-id="${modelo[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }
      });

      /** COLORS FILTER  **/
      document.addEventListener("click", (e) => {
        if (e.target.className === "branco") {
          let cores = produtos.filter((coresBranco) => {
            return coresBranco.cor === "Branco";
          });
          let output = `
           `;
          for (let i in cores) {
            output += `
             <div class = "item">
               <img src = "${cores[i].imagem}">
                  <h3>${cores[i].titulo}</h3>
                  <span class = "preco">
                     <p>R$ ${cores[i].preco} à vista</p>
                  </span>
                  <span class = "parcela">
                      <p>${cores[i].parcela}</p>
                  </span>
                  
                  <button button-id="${cores[i].id}">Comprar</button>
              </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        } else if (e.target.className === "dourado") {
          let cores = produtos.filter((coresDourado) => {
            return coresDourado.cor === "Dourado";
          });
          let output = `
           `;
          for (let i in cores) {
            output += `
             <div class = "item">
                   <img src = "${cores[i].imagem}">
                      <h3>${cores[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${cores[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${cores[i].parcela}</p>
                      </span>
                      
                      <button button-id="${cores[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        } else if (e.target.className === "preto") {
          let cores = produtos.filter((coresPreto) => {
            return coresPreto.cor === "Preto";
          });
          let output = `
            `;
          for (let i in cores) {
            output += `
              <div class = "item">
                    <img src = "${cores[i].imagem}">
                       <h3>${cores[i].titulo}</h3>
                       <span class = "preco">
                           <p>R$ ${cores[i].preco} à vista</p>
                       </span>
                       <span class = "parcela">
                           <p>${cores[i].parcela}</p>
                       </span>
                       
                       <button button-id="${cores[i].id}">Comprar</button>
                   </div>
               `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        } else if (e.target.className === "cinza") {
          let cores = produtos.filter((coresCinza) => {
            return coresCinza.cor === "Cinza";
          });
          let output = `
           `;
          for (let i in cores) {
            output += `
             <div class = "item">
                   <img src = "${cores[i].imagem}">
                      <h3>${cores[i].titulo}</h3>
                      <span class = "preco">
                          <p>R$ ${cores[i].preco} à vista</p>
                      </span>
                      <span class = "parcela">
                          <p>${cores[i].parcela}</p>
                      </span>
                      
                      <button button-id="${cores[i].id}">Comprar</button>
                  </div>
              `;
          }
          document.getElementById("destaquesApple").innerHTML = output;
        }
      });

      //Product details
      document.addEventListener("click", (e) => {
        var target = e.target;
        if (target.tagName == "BUTTON") {
          var btnId = target.getAttribute("button-id");
          appleProd(btnId);
        }
        for (var j = 0; j < produtos.length; j++) {
          if (produtos[j].id == btnId) {
            menuDiv.style.display = "none";
            compraDiv.style.display = "block";
            let saida = `
              <div class = "container">
                <a   href  = "apple.html">Voltar</a>        
                <div class = "opcoes">
                  <div>
                    <img id = "img-container" src = "${produtos[j].imagem}">
                      <div class = "card-nav">
                         <img onclick = "changeImg(this)" src = "${produtos[j].imagem}">
                         <img onclick = "changeImg(this)" src = "${produtos[j].lado}">
                         <img onclick = "changeImg(this)" src = "${produtos[j].traseira}">
                      </div>
                      </div>
                  <div class = "detalhes-pag">
                    <h1>${produtos[j].tituloDetalhe}</h1>
                    <div class = "precodet">
                        <p>vendido e entregue por
                            Blues.com
                        </p>
                        <h2>R$ ${produtos[j].preco}</h2>
                        <p>à vista no cartão</p>
                        <div class = "buttonsPag">
                           <button><i class="fas fa-check"></i> Comprar</button>
                        </div>
                    </div>
                   
                    <br>
                    <br>
                    <p><i class="fas fa-barcode"></i> R$ ${produtos[j].preco} no boleto bancário</p>
                    <p><i class="far fa-credit-card"></i> R$ ${produtos[j].preco} no cartão de crédito em até 10x de R$ 220,99 s/ juros</p>
                    <p><i class="fas fa-credit-card"></i> R$ ${produtos[j].preco} no cartão Blues.com em até 12x de R$ 49,60 s/ juros</p>
                    <div class = "frete">
                        <p>Calcular o frete: </p>
                        <input type = "text">
                        <button>OK</button>
                    </div>
                </div>
            </div>   
    
            <div class = "fichaTec">
            <table>
              <tr>
               <th>Ficha técnica</th>
              </tr>
              <tr>
                <td>Marca:</td>
                <td>${produtos[j].marca}</td>
              </tr>
              <tr>
                <td>Modelo:</td>
                <td>${produtos[j].modelo}</td>
              </tr>
              <tr>
                <td>Cor:</td>
                <td>${produtos[j].cor}</td>
              </tr>
              <tr>
                <td>Chip:</td>
                <td>${produtos[j].chip}</td>
              </tr>
              <tr>
                <td>Quantidades Chip: </td>
                <td>${produtos[j].qtd_chip}</td>
              </tr>
              <tr>
                <td>Memória:</td>
                <td>${produtos[j].memoria_interna}</td>
              </tr>
              <tr>
                <td>RAM:</td>
                <td>${produtos[j].memoria_ram}</td>
              </tr>
              <tr>
                <td>Processador:</td>
                <td>${produtos[j].processador}</td>
              </tr>
              <tr>
                <td>Sistema:</td>
                <td>${produtos[j].sistema}</td>
              </tr>
              <tr>
                <td>Versão:</td>
                <td>${produtos[j].versao}</td>
              </tr>
              <tr>
                <td>Tela:</td>
                <td>${produtos[j].tipo_tela}</td>
              </tr>
              <tr>
                <td>Tamanho:</td>
                <td>${produtos[j].tamanho_display}</td>
              </tr>
              <tr>
                <td>Resolução:</td>
                <td>${produtos[j].resolucao}</td>
              </tr>
              <tr>
                <td>Camera Traseira:</td>
                <td>${produtos[j].camera_traseira}</td>
              </tr>
              <tr>
                <td>Camera Frontal:</td>
                <td>${produtos[j].camera_frontal}</td>
              </tr>
            </table>
           </div>
          </div>
                `;
            document.getElementById("finalizarCompra").innerHTML = saida;
          }
        }
        const imgContainer = document.getElementById("img-container");
        window.changeImg = (image) => {
          imgContainer.src = image.src;
        };
      });

      document.getElementById("destaquesApple").innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById("destaquesApple").innerHTML =
        "Produto não encontrado";
    }
  };
  xhr.send();
}
appleProd();
