function asusProd() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./content/asus.json", true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtosAsus = JSON.parse(xhr.responseText);
      let output = `
        <div class = "itemBanner">
          <img src = "https://www.celulardireto.com.br/wp-content/uploads/2019/04/Asus-ZenFone-5Z.jpg">
        </div>
        `;

      for (let i in produtosAsus) {
        output += `
         <div class = "item">
               <img src = "${produtosAsus[i].imagem}">
                  <h3>${produtosAsus[i].titulo}</h3>
                  <span class = "preco">
                      <p>R$ ${produtosAsus[i].preco} à vista</p>
                  </span>
                  <span class = "parcela">
                      <p>${produtosAsus[i].parcela}</p>
                  </span>
                  
                  <button button-id="${produtosAsus[i].id}">Comprar</button>
              </div>
          `;
      }

      /* Capacidade Filter */

      document.addEventListener("click", (e) => {
        if (e.target.className === "32gb") {
          let memoria = produtosAsus.filter((memoriaProd) => {
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
          document.getElementById("destaquesAsus").innerHTML = output;
        }
        if (e.target.className === "16gb") {
          let memoria = produtosAsus.filter((memoriaProd) => {
            return memoriaProd.memoria_interna === "16GB";
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
          document.getElementById("destaquesAsus").innerHTML = output;
        }

        if (e.target.className === "8gb") {
          let memoria = produtosAsus.filter((memoriaProd) => {
            return memoriaProd.memoria_interna === "8GB";
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
          document.getElementById("destaquesAsus").innerHTML = output;
        }
      });

      /* MODEL FILTER */
      document.addEventListener("click", (e) => {
        if (e.target.className === "zenfone4") {
          let modelo = produtosAsus.filter((modeloProd) => {
            return modeloProd.modelo === "Zenfone 4";
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
          document.getElementById("destaquesAsus").innerHTML = output;
        }

        if (e.target.className === "zenfone3") {
          let modelo = produtosAsus.filter((modeloProd) => {
            return modeloProd.modelo === "Zenfone 3";
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
          document.getElementById("destaquesAsus").innerHTML = output;
        }
      });

      /* Cores Filter */
      document.addEventListener("click", (e) => {
        if (e.target.className === "vermelho") {
          let cores = produtosAsus.filter((coresVermelho) => {
            return coresVermelho.cor === "Vermelho";
          });
          let output = ``;
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
          document.getElementById("destaquesAsus").innerHTML = output;
        } else if (e.target.className === "verde") {
          let cores = produtosAsus.filter((coresBranco) => {
            return coresBranco.cor === "Verde";
          });
          let output = ``;
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
          document.getElementById("destaquesAsus").innerHTML = output;
        } else if (e.target.className === "preto") {
          let cores = produtosAsus.filter((coresBranco) => {
            return coresBranco.cor === "Preto";
          });
          let output = ``;
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
          document.getElementById("destaquesAsus").innerHTML = output;
        }
      });

      //Product details
      document.addEventListener("click", (e) => {
        var target = e.target;
        if (target.tagName == "BUTTON") {
          var btnId = target.getAttribute("button-id");
          asusProd(btnId);
        }
        for (var j = 0; j < produtosAsus.length; j++) {
          if (produtosAsus[j].id == btnId) {
            menuDiv.style.display = "none";
            compraDiv.style.display = "block";
            let saida = `
              <div class = "container">
                <a   href  = "apple.html">Voltar</a>
             
                <div class = "opcoes">
                  <div>
                    <img id = "img-container" src = "${produtosAsus[j].imagem}">
                      <div class = "card-nav">
                         <img onclick = "changeImg(this)" src = "${produtosAsus[j].imagem}">
                         <img onclick = "changeImg(this)" src = "${produtosAsus[j].lado}">
                         <img onclick = "changeImg(this)" src = "${produtosAsus[j].traseira}">
                      </div>
                      </div>
                  <div class = "detalhes-pag">
                    <h1>${produtosAsus[j].tituloDetalhe}</h1>
                    <div class = "precodet">
                        <p>vendido e entregue por
                            Blues.com
                        </p>
                        <h2>R$ ${produtosAsus[j].preco}</h2>
                        <p>à vista no cartão</p>
                        <div class = "buttonsPag">
                           <button><i class="fas fa-check"></i> Comprar</button>
                        </div>
                    </div>
                   
                    <br>
                    <br>
                    <p><i class="fas fa-barcode"></i> R$ ${produtosAsus[j].preco} no boleto bancário</p>
                    <p><i class="far fa-credit-card"></i> R$ ${produtosAsus[j].preco} no cartão de crédito em até 10x de R$ 220,99 s/ juros</p>
                    <p><i class="fas fa-credit-card"></i> R$ ${produtosAsus[j].preco} no cartão Blues.com em até 12x de R$ 49,60 s/ juros</p>
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
                <td>${produtosAsus[j].marca}</td>
              </tr>
              <tr>
                <td>Modelo:</td>
                <td>${produtosAsus[j].modelo}</td>
              </tr>
              <tr>
                <td>Cor:</td>
                <td>${produtosAsus[j].cor}</td>
              </tr>
              <tr>
                <td>Chip:</td>
                <td>${produtosAsus[j].chip}</td>
              </tr>
              <tr>
                <td>Quantidades Chip: </td>
                <td>${produtosAsus[j].qtd_chip}</td>
              </tr>
              <tr>
                <td>Memória:</td>
                <td>${produtosAsus[j].memoria_interna}</td>
              </tr>
              <tr>
                <td>RAM:</td>
                <td>${produtosAsus[j].memoria_ram}</td>
              </tr>
              <tr>
                <td>Processador:</td>
                <td>${produtosAsus[j].processador}</td>
              </tr>
              <tr>
                <td>Sistema:</td>
                <td>${produtosAsus[j].sistema}</td>
              </tr>
              <tr>
                <td>Versão:</td>
                <td>${produtosAsus[j].versao}</td>
              </tr>
              <tr>
                <td>Tela:</td>
                <td>${produtosAsus[j].tipo_tela}</td>
              </tr>
              <tr>
                <td>Tamanho:</td>
                <td>${produtosAsus[j].tamanho_display}</td>
              </tr>
              <tr>
                <td>Resolução:</td>
                <td>${produtosAsus[j].resolucao}</td>
              </tr>
              <tr>
                <td>Camera Traseira:</td>
                <td>${produtosAsus[j].camera_traseira}</td>
              </tr>
              <tr>
                <td>Camera Frontal:</td>
                <td>${produtosAsus[j].camera_frontal}</td>
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

      document.getElementById("destaquesAsus").innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById("destaquesAsus").innerHTML =
        "Produto não encontrado";
    }
  };
  xhr.send();
}
asusProd();
