
        const formulario = document.getElementById('formulario');
        const produtosLista = document.getElementById('produtosLista');
        const produtos = [];
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value;
            const descricao = document.getElementById('descricao').value;
            const preco = parseFloat(document.getElementById('preco').value);
            const disponivel = document.getElementById('disponivel').value;
            
            const produto = {
                nome: nome,
                descricao: descricao,
                preco: preco,
                disponivel: disponivel === 'sim' ? 'Sim' : 'Não'
            };
           
            produtos.push(produto);
            
            formulario.reset();
            
            updateprodutosLista();
        });

        function updateprodutosLista() {
             produtos.sort((a, b) => a.preco - b.preco);
            
             produtosLista.innerHTML = '';
            
             produtos.forEach((produto) => {
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${produto.nome}</td>
                    <td>${produto.preco.toFixed(2)}</td>
                `;
                produtosLista.appendChild(row);
                       });
        }
        updateprodutosLista();
