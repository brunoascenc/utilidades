function samsungProd() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './content/samsung.json', true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const produtos = JSON.parse(xhr.responseText);
      let output = `
      <div class = "itemBanner">
        <img src = "https://soundmachine.com.mt/wp-content/uploads/2019/02/SM_Jan_Small_Banners_Mob.jpg">
      </div>
        `;

        for(let i in produtos){
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
      document.addEventListener('click', e => {
        if (e.target.className === '32gb'){
          let memoria = produtos.filter(memoriaProd => {
            return memoriaProd.memoria_interna === '32GB'
          })
          let output = `
         `;
          for(let i in memoria){
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
          document.getElementById('destaquesSam').innerHTML = output;
        }

        if (e.target.className === '64gb'){
          let memoria = produtos.filter(memoriaProd => {
            return memoriaProd.memoria_interna === '64GB'
          })
          let output = `
         `;
          for(let i in memoria){
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
          document.getElementById('destaquesSam').innerHTML = output;
        }
      })

       /* MODEL FILTER */
       document.addEventListener('click', e =>{
        if (e.target.className === 'galaxys'){
          let modelo = produtos.filter(modeloProd => {
            return modeloProd.series === 'Galaxy S'
          })
          console.log(modelo)
          let output = `
         `;
          for(let i in modelo){
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
          document.getElementById('destaquesSam').innerHTML = output;
        }

        if (e.target.className === 'galaxya'){
          let modelo = produtos.filter(modeloProd => {
            return modeloProd.series === 'Galaxy A'
          })
          console.log(modelo)
          let output = `
         `;
          for(let i in modelo){
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
          document.getElementById('destaquesSam').innerHTML = output;
        }

        if (e.target.className === 'galaxyj'){
          let modelo = produtos.filter(modeloProd => {
            return modeloProd.series === 'Galaxy J'
          })
          console.log(modelo)
          let output = `
         `;
          for(let i in modelo){
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
          document.getElementById('destaquesSam').innerHTML = output;
        }
      })

      

      /* Cores Filter */
      document.addEventListener('click', e => {
        if (e.target.className === 'preto'){
          let cores = produtos.filter(coresPreto => {
            return coresPreto.cor === 'Preto'
          })
          let output = `
          `;
           for(let i in cores){
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
                 </a>
             `;
           }
           document.getElementById('destaquesSam').innerHTML = output;
        }

        else if (e.target.className === 'azul'){
          let cores = produtos.filter(coresAzul => {
            return coresAzul.cor === 'Azul'
          })
          let output = `
          `;
           for(let i in cores){
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
                 </a>
             `;
           }
           document.getElementById('destaquesSam').innerHTML = output;
        }

        else if (e.target.className === 'branco'){
          let cores = produtos.filter(coresBranco => {
            return coresBranco.cor === 'Branco'
          })
          let output = `
          `;
           for(let i in cores){
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
                 </a>
             `;
           }
           document.getElementById('destaquesSam').innerHTML = output;
        }

        else if (e.target.className === 'dourado'){
          let cores = produtos.filter(coresDourado => {
            return coresDourado.cor === 'Dourado'
          })
          let output = `
          `;
           for(let i in cores){
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
                 </a>
             `;
           }
           document.getElementById('destaquesSam').innerHTML = output;
        }
      });

      //Product details
      document.addEventListener('click', e => {
        var target = e.target;
          if(target.tagName == 'BUTTON'){
            var btnId = target.getAttribute('button-id');
            samsungProd(btnId)
          }
          for(var j = 0; j < produtos.length; j++){
            if (produtos[j].id == btnId) {
              menuDiv.style.display = 'none';
              compraDiv.style.display = 'block';
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
                           <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                    </div>
                   
                    <br>
                    <p><i class="fas fa-barcode"></i> R$ ${produtos[j].preco} no boleto bancário</p>
                    <p><i class="far fa-credit-card"></i> R$ ${produtos[j].preco} no cartão de crédito em até 10x de R$ 220,99 s/ juros</p>
                    <p><i class="fas fa-credit-card"></i> R$ 1899,90 no cartão Blues.com em até 12x de R$ 49,60 s/ juros</p>
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
            document.getElementById('finalizarCompra').innerHTML = saida;
            }
          }
          
        if (
          e.target.className == 'samsungBtn0' ||
          e.target.className == 'galaxyJ5'
        ) {
          menuDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
                    <a   href  = "samsung.html">Voltar</a>
                    <div class = "opcoes">
                    <div>
                    <img id = "img-container" src = "${produtos[0].imagem}">
                     <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[0].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-j5-2016-metal-dourado-3.jpg">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-j5-2016-metal-dourado-2.jpg">
                     </div>
                    </div>
                    <div class = "detalhes-pag">
                        <h1>${produtos[0].tituloDetalhe}</h1>
                        <div class = "precodet">
                            <p>vendido e entregue por
                                Blues.com
                            </p>
                            <h2>R$ ${produtos[0].preco}</h2>
                            <p>à vista no cartão</p>
                        
                        <div class = "buttonsPag">
                            <button><i class="fas fa-check"></i> Comprar</button>
                            <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                        </div>
                        <br>
                        <p><i class="fas fa-barcode"></i> R$ ${produtos[0].preco} no boleto bancário</p>
                        <p><i class="far fa-credit-card"></i> R$ ${produtos[0].preco} no cartão de crédito em até 10x de R$ 69,99 s/ juros</p>
                        <p><i class="fas fa-credit-card"></i> R$ 710,95 no cartão Blues.com em até 12x de R$ 38,92 s/ juros</p>
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
              <td>${produtos[0].marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>${produtos[0].modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>${produtos[0].cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>${produtos[0].chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>${produtos[0].qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>${produtos[0].memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>${produtos[0].memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>${produtos[0].processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>${produtos[0].sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>${produtos[0].versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>${produtos[0].tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>${produtos[0].tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>${produtos[0].resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>${produtos[0].camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>${produtos[0].camera_frontal}</td>
            </tr>
          </table>
        </div>
        </div>
                    `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn1') {
          menuDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
                    <a href  = "samsung.html">Voltar</a>
                    <div class = "opcoes">
                    <div>
                    <img id = "img-container" src = "${produtos[1].imagem}">
                     <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[1].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-s8-preto-2.jpg">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-s8-preto-3.jpg">
                     </div>
                    </div>
                    <div class = "detalhes-pag">
                        <h1>${produtos[1].tituloDetalhe}</h1>
                        <div class = "precodet">
                            <p>vendido e entregue por
                                Blues.com
                            </p>
                            <h2>R$ ${produtos[1].preco}</h2>
                            <p>à vista no cartão</p>
                        
                        <div class = "buttonsPag">
                            <button><i class="fas fa-check"></i> Comprar</button>
                            <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                        </div>
                        <br>
                        <p><i class="fas fa-barcode"></i> R$ ${produtos[1].preco} no boleto bancário</p>
                        <p><i class="far fa-credit-card"></i> R$ ${produtos[1].preco} no cartão de crédito em até 10x de R$ 130,90 s/ juros</p>
                        <p><i class="fas fa-credit-card"></i> R$ 1780,99 no cartão Blues.com em até 12x de R$ 50,90 s/ juros</p>
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
              <td>${produtos[1].marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>${produtos[1].modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>${produtos[1].cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>${produtos[1].chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>${produtos[1].qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>${produtos[1].memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>${produtos[1].memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>${produtos[1].processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>${produtos[1].sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>${produtos[1].versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>${produtos[1].tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>${produtos[1].tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>${produtos[1].resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>${produtos[1].camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>${produtos[1].camera_frontal}</td>
            </tr>
          </table>
        </div>
        </div>
                `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'samsungBtn2' ||
          e.target.className == 'galaxys6edge'
        ) {
          menuDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
                    <a   href  = "samsung.html">Voltar</a>
                    <div class = "opcoes">
                    <div>
                    <img id = "img-container" src = "${produtos[2].imagem}">
                     <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[2].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58593d7f-galaxys6edgepretolateral.png">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58593d80-galaxys6edgepretotraseira.png">
                     </div>
                    </div>
                    <div class = "detalhes-pag">
                        <h1>${produtos[2].tituloDetalhe}</h1>
                        <div class = "precodet">
                            <p>vendido e entregue por
                                Blues.com
                            </p>
                            <h2>R$ ${produtos[2].preco}</h2>
                            <p>à vista no cartão</p>
                        
                        <div class = "buttonsPag">
                            <button><i class="fas fa-check"></i> Comprar</button>
                            <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                        </div>
                        <br>
                        <p><i class="fas fa-barcode"></i> R$ ${produtos[2].preco} no boleto bancário</p>
                        <p><i class="far fa-credit-card"></i> R$ ${produtos[2].preco} no cartão de crédito em até 10x de R$ 120,99 s/ juros</p>
                        <p><i class="fas fa-credit-card"></i> R$ 1290,99 no cartão Blues.com em até 12x de R$ 45,99 s/ juros</p>
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
                    <td>${produtos[2].marca}</td>
                  </tr>
                  <tr>
                    <td>Modelo:</td>
                    <td>${produtos[2].modelo}</td>
                  </tr>
                  <tr>
                    <td>Cor:</td>
                    <td>${produtos[2].cor}</td>
                  </tr>
                  <tr>
                    <td>Chip:</td>
                    <td>${produtos[2].chip}</td>
                  </tr>
                  <tr>
                    <td>Quantidades Chip: </td>
                    <td>${produtos[2].qtd_chip}</td>
                  </tr>
                  <tr>
                    <td>Memória:</td>
                    <td>${produtos[2].memoria_interna}</td>
                  </tr>
                  <tr>
                    <td>RAM:</td>
                    <td>${produtos[2].memoria_ram}</td>
                  </tr>
                  <tr>
                    <td>Processador:</td>
                    <td>${produtos[2].processador}</td>
                  </tr>
                  <tr>
                    <td>Sistema:</td>
                    <td>${produtos[2].sistema}</td>
                  </tr>
                  <tr>
                    <td>Versão:</td>
                    <td>${produtos[2].versao}</td>
                  </tr>
                  <tr>
                    <td>Tela:</td>
                    <td>${produtos[2].tipo_tela}</td>
                  </tr>
                  <tr>
                    <td>Tamanho:</td>
                    <td>${produtos[2].tamanho_display}</td>
                  </tr>
                  <tr>
                    <td>Resolução:</td>
                    <td>${produtos[2].resolucao}</td>
                  </tr>
                  <tr>
                    <td>Camera Traseira:</td>
                    <td>${produtos[2].camera_traseira}</td>
                  </tr>
                  <tr>
                    <td>Camera Frontal:</td>
                    <td>${produtos[2].camera_frontal}</td>
                  </tr>
                </table>
              </div>
              </div>
                `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn3') {
          menuDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
                    <a   href  = "samsung.html">Voltar</a>
                    <div class = "opcoes">
                    <div>
                    <img id = "img-container" src = "${produtos[3].imagem}">
                     <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[3].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-s7-edge-dourado-3.png">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-s7-edge-dourado-4.png">
                     </div>
                    </div>
                    <div class = "detalhes-pag">
                        <h1>${produtos[3].tituloDetalhe}</h1>
                        <div class = "precodet">
                            <p>vendido e entregue por
                                Blues.com
                            </p>
                            <h2>R$ ${produtos[3].preco}</h2>
                            <p>à vista no cartão</p>
                        
                        <div class = "buttonsPag">
                            <button><i class="fas fa-check"></i> Comprar</button>
                            <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                        </div>
                        <br>
                        <p><i class="fas fa-barcode"></i> R$ ${produtos[3].preco} no boleto bancário</p>
                        <p><i class="far fa-credit-card"></i> R$ ${produtos[3].preco} no cartão de crédito em até 10x de R$ 120,99 s/ juros</p>
                        <p><i class="fas fa-credit-card"></i> R$ 1599,90 no cartão Blues.com em até 12x de R$ 65,60 s/ juros</p>
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
              <td>${produtos[3].marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>${produtos[3].modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>${produtos[3].cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>${produtos[3].chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>${produtos[3].qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>${produtos[3].memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>${produtos[3].memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>${produtos[3].processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>${produtos[3].sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>${produtos[3].versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>${produtos[3].tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>${produtos[3].tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>${produtos[3].resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>${produtos[3].camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>${produtos[3].camera_frontal}</td>
            </tr>
          </table>
        </div>
        </div>
                `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'samsungBtn4' ||
          e.target.className == 'galaxyA7'
        ) {
          menuDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
                    <a   href  = "samsung.html">Voltar</a>
                    <div class = "opcoes">
                    <div>
                    <img id = "img-container" src = "${produtos[4].imagem}">
                     <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[4].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58ff99e7-a5-2017-dourado-2.jpg">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-58ff99e8-a5-2017-dourado-3.jpg">
                     </div>
                    </div>
                    <div class = "detalhes-pag">
                        <h1>${produtos[4].tituloDetalhe}</h1>
                        <div class = "precodet">
                            <p>vendido e entregue por
                                Blues.com
                            </p>
                            <h2>R$ ${produtos[4].preco}</h2>
                            <p>à vista no cartão</p>
                        <div class = "buttonsPag">
                            <button><i class="fas fa-check"></i> Comprar</button>
                            <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                        </div>
                        <br>
                        <p><i class="fas fa-barcode"></i> R$ ${produtos[4].preco} no boleto bancário</p>
                        <p><i class="far fa-credit-card"></i> R$ ${produtos[4].preco} no cartão de crédito em até 10x de R$ 136,99 s/ juros</p>
                        <p><i class="fas fa-credit-card"></i> R$ 1299,90 no cartão Blues.com em até 12x de R$ 45,99 s/ juros</p>
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
              <td>${produtos[4].marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>${produtos[4].modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>${produtos[4].cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>${produtos[4].chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>${produtos[4].qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>${produtos[4].memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>${produtos[4].memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>${produtos[4].processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>${produtos[4].sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>${produtos[4].versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>${produtos[4].tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>${produtos[4].tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>${produtos[4].resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>${produtos[4].camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>${produtos[4].camera_frontal}</td>
            </tr>
          </table>
        </div>
        </div>
                `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'samsungBtn5' ||
          e.target.className == 'galaxyA5'
        ) {
          menuDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
                    <a   href  = "samsung.html">Voltar</a>
                    <div class = "opcoes">
                    <div>
                    <img id = "img-container" src = "${produtos[5].imagem}">
                     <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[5].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-a5-a500m-dour-2.jpg">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-585aa4fe-dt-traseiraa5dourado.png">
                     </div>
                    </div>
                    <div class = "detalhes-pag">
                        <h1>${produtos[5].tituloDetalhe}</h1>
                        <div class = "precodet">
                            <p>vendido e entregue por
                                Blues.com
                            </p>
                            <h2>R$ ${produtos[5].preco}</h2>
                            <p>à vista no cartão</p>
                        
                        <div class = "buttonsPag">
                            <button><i class="fas fa-check"></i> Comprar</button>
                            <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                        </div>
                        <br>
                        <p><i class="fas fa-barcode"></i> R$ ${produtos[5].preco} no boleto bancário</p>
                        <p><i class="far fa-credit-card"></i> R$ ${produtos[5].preco} no cartão de crédito em até 10x de R$ 89,99 s/ juros</p>
                        <p><i class="fas fa-credit-card"></i> R$ 689,90 no cartão Blues.com em até 12x de R$ 50,68 s/ juros</p>
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
              <td>${produtos[5].marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>${produtos[5].modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>${produtos[5].cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>${produtos[5].chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>${produtos[5].qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>${produtos[5].memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>${produtos[5].memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>${produtos[5].processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>${produtos[5].sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>${produtos[5].versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>${produtos[5].tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>${produtos[5].tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>${produtos[5].resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>${produtos[5].camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>${produtos[5].camera_frontal}</td>
            </tr>
          </table>
        </div>
        </div>
                `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (
          e.target.className == 'samsungBtn6' ||
          e.target.className == 'galaxys9'
        ) {
          menuDiv.style.display = 'none';
          compraDiv.style.display = 'block';

          let saida = `
          <div class = "container">
                    <a   href  = "samsung.html">Voltar</a>
                    <div class = "opcoes">
                    <div>
                    <img id = "img-container" src = "${produtos[6].imagem}">
                     <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[6].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-galaxy-s9-azul-perfil.png">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-galaxy-s9-azul-traseira.png">
                     </div>
                    </div>
                    <div class = "detalhes-pag">
                        <h1>${produtos[6].tituloDetalhe}</h1>
                        <div class = "precodet">
                            <p>vendido e entregue por
                                Blues.com
                            </p>
                            <h2>R$ ${produtos[6].preco}</h2>
                            <p>à vista no cartão</p>
                       
                        <div class = "buttonsPag">
                            <button><i class="fas fa-check"></i> Comprar</button>
                            <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                        </div>
                        <br>
                        <p><i class="fas fa-barcode"></i> R$ ${produtos[6].preco} no boleto bancário</p>
                        <p><i class="far fa-credit-card"></i> R$ ${produtos[6].preco} no cartão de crédito em até 10x de R$ 169,99 s/ juros</p>
                        <p><i class="fas fa-credit-card"></i> R$ 2020,90 no cartão em Blues.com até 12x de R$ 129,08 s/ juros</p>
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
              <td>${produtos[6].marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>${produtos[6].modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>${produtos[6].cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>${produtos[6].chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>${produtos[6].qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>${produtos[6].memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>${produtos[6].memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>${produtos[6].processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>${produtos[6].sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>${produtos[6].versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>${produtos[6].tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>${produtos[6].tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>${produtos[6].resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>${produtos[6].camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>${produtos[6].camera_frontal}</td>
            </tr>
          </table>
        </div>
        </div>
                `;
          document.getElementById('finalizarCompra').innerHTML = saida;
        } else if (e.target.className == 'samsungBtn7') {
          menuDiv.style.display = 'none';
          compraDiv.style.display = 'block';
  
          let saida = `
          <div class = "container">
                    <a   href  = "samsung.html">Voltar</a>
                    <div class = "opcoes">
                    <div>
                    <img id = "img-container" src = "${produtos[7].imagem}">
                     <div class = "card-nav">
                       <img onclick = "changeImg(this)" src = "${produtos[7].imagem}">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-galaxy-s6-flat-bran-2.png">
                       <img onclick = "changeImg(this)" src = "https://imagens.trocafone.com/images/phones/dt-galaxy-s6-flat-bran-3.png">
                     </div>
                    </div>
                    <div class = "detalhes-pag">
                        <h1>${produtos[7].tituloDetalhe}</h1>
                        <div class = "precodet">
                            <p>vendido e entregue por
                                Blues.com
                            </p>
                            <h2>R$ ${produtos[7].preco}</h2>
                            <p>à vista no cartão</p>
                        
                        <div class = "buttonsPag">
                            <button><i class="fas fa-check"></i> Comprar</button>
                            <button><i class="fas fa-shopping-cart"></i> Adicionar ao carrinho</button>
                        </div>
                        </div>
                        <br>
                        <p><i class="fas fa-barcode"></i> R$ ${produtos[7].preco} no boleto bancário</p>
                        <p><i class="far fa-credit-card"></i> R$ ${produtos[7].preco} no cartão de crédito em até 10x de R$ 59,90 s/ juros</p>
                        <p><i class="fas fa-credit-card"></i> R$ 589,90 no cartão Blues.com em até 12x de R$ 25,90 s/ juros</p>
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
              <td>${produtos[7].marca}</td>
            </tr>
            <tr>
              <td>Modelo:</td>
              <td>${produtos[7].modelo}</td>
            </tr>
            <tr>
              <td>Cor:</td>
              <td>${produtos[7].cor}</td>
            </tr>
            <tr>
              <td>Chip:</td>
              <td>${produtos[7].chip}</td>
            </tr>
            <tr>
              <td>Quantidades Chip: </td>
              <td>${produtos[7].qtd_chip}</td>
            </tr>
            <tr>
              <td>Memória:</td>
              <td>${produtos[7].memoria_interna}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>${produtos[7].memoria_ram}</td>
            </tr>
            <tr>
              <td>Processador:</td>
              <td>${produtos[7].processador}</td>
            </tr>
            <tr>
              <td>Sistema:</td>
              <td>${produtos[7].sistema}</td>
            </tr>
            <tr>
              <td>Versão:</td>
              <td>${produtos[7].versao}</td>
            </tr>
            <tr>
              <td>Tela:</td>
              <td>${produtos[7].tipo_tela}</td>
            </tr>
            <tr>
              <td>Tamanho:</td>
              <td>${produtos[7].tamanho_display}</td>
            </tr>
            <tr>
              <td>Resolução:</td>
              <td>${produtos[7].resolucao}</td>
            </tr>
            <tr>
              <td>Camera Traseira:</td>
              <td>${produtos[7].camera_traseira}</td>
            </tr>
            <tr>
              <td>Camera Frontal:</td>
              <td>${produtos[7].camera_frontal}</td>
            </tr>
          </table>
        </div>
        </div>
        `
            ;
          document.getElementById('finalizarCompra').innerHTML = saida;
        }
        const imgContainer = document.getElementById('img-container')
        window.changeImg = (image) => {
           imgContainer.src = image.src
        }
      });

      document.getElementById('destaquesSam').innerHTML = output;
    } else if (xhr.status === 404) {
      document.getElementById('destaquesSam').innerHTML =
        'Produto não encontrado';
    }
  };
  xhr.send();
}
samsungProd();
