function asusProd() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './content/asus.json', true);
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        const produtosAsus = JSON.parse(xhr.responseText);
        let output = `
        `;
  
        output += `
        <div class = "itemBanner">
          <img src = "https://www.celulardireto.com.br/wp-content/uploads/2019/04/Asus-ZenFone-5Z.jpg">
        </div>
        <div class = "item">
        <img src   = "${produtosAsus[0].imagem}">
        <h3>${produtosAsus[0].titulo}</h3>
        <span class = "preco">
            <p>R$ ${produtosAsus[0].preco} à vista</p>
        </span>
        <span class = "parcela">
            <p>${produtosAsus[0].parcela}</p>
          </span>
           <a class = "asusBtn0" href = "#">Comprar</a>
        </div>
  
        <div class = "item">
        <img src   = "${produtosAsus[1].imagem}">
        <h3>${produtosAsus[1].titulo}</h3>
        <span class = "preco">
            <p>R$ ${produtosAsus[1].preco} à vista</p>
        </span>
        <span class = "parcela">
            <p>${produtosAsus[1].parcela}</p>
          </span>
           <a class = "asusBtn1" href = "#">Comprar</a>
        </div>
  
        <div class = "item">
        <img src   = "${produtosAsus[2].imagem}">
        <h3>${produtosAsus[2].titulo}</h3>
        <span class = "preco">
            <p>R$ ${produtosAsus[2].preco} à vista</p>
        </span>
        <span class = "parcela">
            <p>${produtosAsus[2].parcela}</p>
          </span>
           <a class = "asusBtn2" href = "#">Comprar</a>
        </div>
  
        <div class = "item">
        <img src   = "${produtosAsus[3].imagem}">
        <h3>${produtosAsus[3].titulo}</h3>
        <span class = "preco">
            <p>R$ ${produtosAsus[3].preco} à vista</p>
        </span>
        <span class = "parcela">
            <p>${produtosAsus[3].parcela}</p>
        </span>
        <a class = "asusBtn3" href = "#">Comprar</a>
        </div>
     `;
        
     document.addEventListener('click', e => {
        if (e.target.className === 'vermelho'){
        let cores = produtosAsus.filter(coresBranco => {
          return coresBranco.cor === 'Vermelho'
        })
        let saida = ``
         saida += `
         <div class = "orderBy item">
           <img src   = "${cores[0].imagem}">
           <h3>${cores[0].titulo}</h3>
             <span class = "preco">
               <p>R$ ${cores[0].preco} à vista</p>
             </span>
             <span class = "parcela">
               <p>${cores[0].parcela}</p>
             </span>
           <a class = "asusBtn1" href = "#">Comprar</a>
         </div>
         `

        
        document.getElementById('destaquesAsus').innerHTML = saida;
      }

      else if (e.target.className === 'verde'){
        let cores = produtosAsus.filter(coresBranco => {
          return coresBranco.cor === 'Verde'
        })
        let saida = ``
         saida += `
         <div class = "orderBy item">
           <img src = "${cores[0].imagem}">
           <h3>${cores[0].titulo}</h3>
             <span class = "preco">
               <p>R$ ${cores[0].preco} à vista</p>
             </span>
             <span class = "parcela">
               <p>${cores[0].parcela}</p>
             </span>
           <a class = "asusBtn0" href = "#">Comprar</a>
         </div>
          `
        document.getElementById('destaquesAsus').innerHTML = saida;
      }

      else if (e.target.className === 'preto'){
        let cores = produtosAsus.filter(coresBranco => {
          return coresBranco.cor === 'Preto'
        })
        let saida = ``
         saida += `
         <div class = "orderBy item">
           <img src = "${cores[0].imagem}">
           <h3>${cores[0].titulo}</h3>
             <span class = "preco">
               <p>R$ ${cores[0].preco} à vista</p>
             </span>
             <span class = "parcela">
               <p>${cores[0].parcela}</p>
             </span>
           <a class = "asusBtn2" href = "#">Comprar</a>
         </div>

         <div class = "orderBy item">
           <img src = "${cores[1].imagem}">
           <h3>${cores[1].titulo}</h3>
             <span class = "preco">
               <p>R$ ${cores[1].preco} à vista</p>
             </span>
             <span class = "parcela">
               <p>${cores[1].parcela}</p>
             </span>
           <a class = "asusBtn3" href = "#">Comprar</a>
         </div>
          `
        document.getElementById('destaquesAsus').innerHTML = saida;
      }
    })

        //Product details
        document.addEventListener('click', e => {
          if (
            e.target.className == 'asusBtn0' ||
            e.target.className == 'zenfone4'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
            <div class = "container">
            <a   href  = "asus.html">Voltar</a>
            <div class = "opcoes">
            <div>
            <img id = "img-container" src = "${produtosAsus[0].imagem}">
             <div class = "card-nav">
               <img onclick = "changeImg(this)" src = "${produtosAsus[0].imagem}">
               <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5b3134b4-zenfone-4-verde-perfil.png">
               <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5b3134b5-zenfone-4-verde-traseira.png">
             </div>
            </div>
            <div class = "detalhes-pag">
                <h1>${produtosAsus[0].tituloDetalhe}</h1>
                <div class = "precodet">
                    <p>vendido e entregue por
                        Blues.com
                    </p>
                    <h2>R$ ${produtosAsus[0].preco}</h2>
                    <p>à vista no cartão</p>
                
                <div class = "buttonsPag">
                    <button><i class="fas fa-check"></i> Comprar</button>
                    <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                </div>
                </div>
                <br>
                <p><i class="fas fa-barcode"></i> R$ ${produtosAsus[0].preco} no boleto bancário</p>
                <p><i class="far fa-credit-card"></i> R$ ${produtosAsus[0].preco} no cartão de crédito em até 10x de R$ 85,99 s/ juros</p>
                <p><i class="fas fa-credit-card"></i> R$ 1520,50 no cartão Blues.com em até 12x de R$ 49,90 s/ juros</p>
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
            <td>${produtosAsus[0].marca}</td>
          </tr>
          <tr>
            <td>Modelo:</td>
            <td>${produtosAsus[0].modelo}</td>
          </tr>
          <tr>
            <td>Cor:</td>
            <td>${produtosAsus[0].cor}</td>
          </tr>
          <tr>
            <td>Chip:</td>
            <td>${produtosAsus[0].chip}</td>
          </tr>
          <tr>
            <td>Quantidades Chip: </td>
            <td>${produtosAsus[0].qtd_chip}</td>
          </tr>
          <tr>
            <td>Memória:</td>
            <td>${produtosAsus[0].memoria_interna}</td>
          </tr>
          <tr>
            <td>RAM:</td>
            <td>${produtosAsus[0].memoria_ram}</td>
          </tr>
          <tr>
            <td>Processador:</td>
            <td>${produtosAsus[0].processador}</td>
          </tr>
          <tr>
            <td>Sistema:</td>
            <td>${produtosAsus[0].sistema}</td>
          </tr>
          <tr>
            <td>Versão:</td>
            <td>${produtosAsus[0].versao}</td>
          </tr>
          <tr>
            <td>Tela:</td>
            <td>${produtosAsus[0].tipo_tela}</td>
          </tr>
          <tr>
            <td>Tamanho:</td>
            <td>${produtosAsus[0].tamanho_display}</td>
          </tr>
          <tr>
            <td>Resolução:</td>
            <td>${produtosAsus[0].resolucao}</td>
          </tr>
          <tr>
            <td>Camera Traseira:</td>
            <td>${produtosAsus[0].camera_traseira}</td>
          </tr>
          <tr>
            <td>Camera Frontal:</td>
            <td>${produtosAsus[0].camera_frontal}</td>
          </tr>
        </table>
      </div>
      </div>
          `;
  
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (
            e.target.className == 'asusBtn1' ||
            e.target.className == 'zenfone4pro'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
          <div class = "container">
          <a   href  = "asus.html">Voltar</a>
          <div class = "opcoes">
          <div>
          <img id = "img-container" src = "${produtosAsus[1].imagem}">
            <div class = "card-nav">
              <img onclick = "changeImg(this)" src = "${produtosAsus[1].imagem}">
              <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-zenfone-4-selfie-pro-vermelho-perfil.png">
              <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-zenfone-4-selfie-pro-vermelho-traseira.png">
            </div>
          </div>
          <div class = "detalhes-pag">
              <h1>${produtosAsus[1].tituloDetalhe}</h1>
              <div class = "precodet">
                  <p>vendido e entregue por
                      Blues.com
                  </p>
                  <h2>R$ ${produtosAsus[1].preco}</h2>
                  <p>à vista no cartão</p>
              
              <div class = "buttonsPag">
                  <button><i class="fas fa-check"></i> Comprar</button>
                  <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
              </div>
              </div>
              <br>
              <p><i class="fas fa-barcode"></i> R$ ${produtosAsus[1].preco} no boleto bancário</p>
              <p><i class="far fa-credit-card"></i> R$ ${produtosAsus[1].preco} no cartão de crédito em até 10x de R$ 102,90 s/ juros</p>
              <p><i class="fas fa-credit-card"></i> R$ 1520,00 no cartão Blues.com em até 12x de R$ 69,99 s/ juros</p>
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
          <td>${produtosAsus[1].marca}</td>
        </tr>
        <tr>
          <td>Modelo:</td>
          <td>${produtosAsus[1].modelo}</td>
        </tr>
        <tr>
          <td>Cor:</td>
          <td>${produtosAsus[1].cor}</td>
        </tr>
        <tr>
          <td>Chip:</td>
          <td>${produtosAsus[1].chip}</td>
        </tr>
        <tr>
          <td>Quantidades Chip: </td>
          <td>${produtosAsus[1].qtd_chip}</td>
        </tr>
        <tr>
          <td>Memória:</td>
          <td>${produtosAsus[1].memoria_interna}</td>
        </tr>
        <tr>
          <td>RAM:</td>
          <td>${produtosAsus[1].memoria_ram}</td>
        </tr>
        <tr>
          <td>Processador:</td>
          <td>${produtosAsus[1].processador}</td>
        </tr>
        <tr>
          <td>Sistema:</td>
          <td>${produtosAsus[1].sistema}</td>
        </tr>
        <tr>
          <td>Versão:</td>
          <td>${produtosAsus[1].versao}</td>
        </tr>
        <tr>
          <td>Tela:</td>
          <td>${produtosAsus[1].tipo_tela}</td>
        </tr>
        <tr>
          <td>Tamanho:</td>
          <td>${produtosAsus[1].tamanho_display}</td>
        </tr>
        <tr>
          <td>Resolução:</td>
          <td>${produtosAsus[1].resolucao}</td>
        </tr>
        <tr>
          <td>Camera Traseira:</td>
          <td>${produtosAsus[1].camera_traseira}</td>
        </tr>
        <tr>
          <td>Camera Frontal:</td>
          <td>${produtosAsus[1].camera_frontal}</td>
        </tr>
      </table>
    </div>
    </div>
      `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (
            e.target.className == 'asusBtn2' ||
            e.target.className == 'zenfone3'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
          <div class = "container">
          <a   href  = "asus.html">Voltar</a>
          <div class = "opcoes">
          <div>
            <img id = "img-container" src = "${produtosAsus[2].imagem}">
              <div class = "card-nav">
                <img onclick = "changeImg(this)" src = "${produtosAsus[2].imagem}">
                <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5aa96fd9-zenfone-3-preto-2.jpg">
                <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5aa96fd9-zenfone-3-preto-3.jpg">
              </div>
          </div>
          <div class = "detalhes-pag">
              <h1>${produtosAsus[2].tituloDetalhe}</h1>
              <div class = "precodet">
                  <p>vendido e entregue por
                      Blues.com
                  </p>
                  <h2>R$ ${produtosAsus[2].preco}</h2>
                  <p>à vista no cartão</p>
              
              <div class = "buttonsPag">
                 <button><i class="fas fa-check"></i> Comprar</button>
                 <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
              </div>
              </div>
              <br>
              <p><i class="fas fa-barcode"></i> R$ ${produtosAsus[2].preco} no boleto bancário</p>
              <p><i class="far fa-credit-card"></i> R$ ${produtosAsus[2].preco} no cartão de crédito em até 10x de R$ 110,90 s/ juros</p>
              <p><i class="fas fa-credit-card"></i> R$ 899,90 no cartão Blues.com em até 12x de R$ 45,60 s/ juros</p>
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
          <td>${produtosAsus[2].marca}</td>
        </tr>
        <tr>
          <td>Modelo:</td>
          <td>${produtosAsus[2].modelo}</td>
        </tr>
        <tr>
          <td>Cor:</td>
          <td>${produtosAsus[2].cor}</td>
        </tr>
        <tr>
          <td>Chip:</td>
          <td>${produtosAsus[2].chip}</td>
        </tr>
        <tr>
          <td>Quantidades Chip: </td>
          <td>${produtosAsus[2].qtd_chip}</td>
        </tr>
        <tr>
          <td>Memória:</td>
          <td>${produtosAsus[2].memoria_interna}</td>
        </tr>
        <tr>
          <td>RAM:</td>
          <td>${produtosAsus[2].memoria_ram}</td>
        </tr>
        <tr>
          <td>Processador:</td>
          <td>${produtosAsus[2].processador}</td>
        </tr>
        <tr>
          <td>Sistema:</td>
          <td>${produtosAsus[2].sistema}</td>
        </tr>
        <tr>
          <td>Versão:</td>
          <td>${produtosAsus[2].versao}</td>
        </tr>
        <tr>
          <td>Tela:</td>
          <td>${produtosAsus[2].tipo_tela}</td>
        </tr>
        <tr>
          <td>Tamanho:</td>
          <td>${produtosAsus[2].tamanho_display}</td>
        </tr>
        <tr>
          <td>Resolução:</td>
          <td>${produtosAsus[2].resolucao}</td>
        </tr>
        <tr>
          <td>Camera Traseira:</td>
          <td>${produtosAsus[2].camera_traseira}</td>
        </tr>
        <tr>
          <td>Camera Frontal:</td>
          <td>${produtosAsus[2].camera_frontal}</td>
        </tr>
      </table>
    </div>
    </div>
      `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          } else if (
            e.target.className == 'asusBtn3' ||
            e.target.className == 'zenfone4max'
          ) {
            menuDiv.style.display = 'none';
            compraDiv.style.display = 'block';
  
            let saida = `
          <div class = "container">
          <a   href  = "asus.html">Voltar</a>
          <div class = "opcoes">
          <div>
          <img id = "img-container" src = "${produtosAsus[3].imagem}">
           <div class = "card-nav">
             <img onclick = "changeImg(this)" src = "${produtosAsus[3].imagem}">
             <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5c23a991-zenfone-4-max-preto-perfil.png">
             <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-5c23a991-zenfone-4-max-preto-traseira.png">
           </div>
          </div>
          <div class = "detalhes-pag">
              <h1>${produtosAsus[3].tituloDetalhe}</h1>
              <div class = "precodet">
                  <p>vendido e entregue por
                      Blues.com
                  </p>
                  <h2>R$ ${produtosAsus[3].preco}</h2>
                  <p>à vista no cartão</p>
             
              <div class = "buttonsPag">
                 <button><i class="fas fa-check"></i> Comprar</button>
                 <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
              </div>
              </div>
              <br>
              <p><i class="fas fa-barcode"></i> R$ ${produtosAsus[3].preco} no boleto bancário</p>
              <p><i class="far fa-credit-card"></i> R$ ${produtosAsus[3].preco} no cartão de crédito em até 10x de R$ 132,90 s/ juros</p>
              <p><i class="fas fa-credit-card"></i> R$ 1750,99 no cartão Blues.com em até 12x de R$ 89,90 s/ juros</p>
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
          <td>${produtosAsus[3].marca}</td>
        </tr>
        <tr>
          <td>Modelo:</td>
          <td>${produtosAsus[3].modelo}</td>
        </tr>
        <tr>
          <td>Cor:</td>
          <td>${produtosAsus[3].cor}</td>
        </tr>
        <tr>
          <td>Chip:</td>
          <td>${produtosAsus[3].chip}</td>
        </tr>
        <tr>
          <td>Quantidades Chip: </td>
          <td>${produtosAsus[3].qtd_chip}</td>
        </tr>
        <tr>
          <td>Memória:</td>
          <td>${produtosAsus[3].memoria_interna}</td>
        </tr>
        <tr>
          <td>RAM:</td>
          <td>${produtosAsus[3].memoria_ram}</td>
        </tr>
        <tr>
          <td>Processador:</td>
          <td>${produtosAsus[3].processador}</td>
        </tr>
        <tr>
          <td>Sistema:</td>
          <td>${produtosAsus[3].sistema}</td>
        </tr>
        <tr>
          <td>Versão:</td>
          <td>${produtosAsus[3].versao}</td>
        </tr>
        <tr>
          <td>Tela:</td>
          <td>${produtosAsus[3].tipo_tela}</td>
        </tr>
        <tr>
          <td>Tamanho:</td>
          <td>${produtosAsus[3].tamanho_display}</td>
        </tr>
        <tr>
          <td>Resolução:</td>
          <td>${produtosAsus[3].resolucao}</td>
        </tr>
        <tr>
          <td>Camera Traseira:</td>
          <td>${produtosAsus[3].camera_traseira}</td>
        </tr>
        <tr>
          <td>Camera Frontal:</td>
          <td>${produtosAsus[3].camera_frontal}</td>
        </tr>
      </table>
    </div>
    </div>
      `;
            document.getElementById('finalizarCompra').innerHTML = saida;
          }
          const imgContainer = document.getElementById('img-container')
          window.changeImg = (image) => {
             imgContainer.src = image.src
          }
        });
  
        document.getElementById('destaquesAsus').innerHTML = output;
      } else if (xhr.status === 404) {
        document.getElementById('destaquesAsus').innerHTML =
          'Produto não encontrado';
      }
    };
    xhr.send();
  }
  asusProd();
  