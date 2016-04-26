# Instalar

Adicione a seguinte linha em seu __desafio.html__

```sh
 <link rel="stylesheet" href="css/style.css">
 <script type="text/javascript" src="js/funcoes.js"></script>
 ```
O arquivo "funcoes.js" na pasta __js__ </br>
O arquivo "style.css" na pasta __css__

# Informações 

Pasta js no arquivo __funcoes.js__

* Função Adicionar:
	
```sh	
	function Adicionar(){
		var avaliacao = $("input[type=radio]:checked").val();
		var cliente = JSON.stringify({
			Avaliação   : avaliacao,
			Mensagem    : $("#txtMensagem").val(),
		});

		tbClientes.push(cliente);

		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));

		alert("Registro adicionado.");
		return true;
	}
```

* Função Listar:

```sh
function Listar(){
		$("#tblListar").html("");
		$("#tblListar").html(
			"<thead>"+
			"	<th>Avaliação</th>"+
			"	<th>Mensagem</th>"+
			"	</tr>"+
			"</thead>"+
			"<tbody>"+
			"</tbody>"
			);

		 for(var i in tbClientes){
			var cli = JSON.parse(tbClientes[i]);
		  	$("#tblListar tbody").append("<tr>"+                
										 "	<td>"+cli.Avaliação+"</td>" + 
										 "	<td>"+cli.Mensagem+"</td>" + 
		  								 "</tr>");
		 }
	}
```
	
* Função Validação:

```sh
function validaRadio() {
 
  var texto = document.getElementById('end');
 
  if (document.form1.avaliacao[0].checked == false 
    && document.form1.avaliacao[1].checked == false) {
    alert('Por favor, selecione o avaliação.');
    texto.style.color = "#ff0000";
    return false;
  }
  return true;
}
```

Arquivo __desafio.html__


* Formulário:

```sh
<div class="section"><span>1</span>Como você avalia a qualidade dos nossos serviços?</div>
	 <div class="inner-wrap">
	   <input  type="radio"  name="avaliacao"   value="Ótimo" checked /><label>Ótimo</label> </br>
	   <input  type="radio"  name="avaliacao"   value="Bom"   /><label>Bom</label></br>
	   <input  type="radio"  name="avaliacao"   value="Regular" /><label>Regular</label></br>
	   <input  type="radio"  name="avaliacao"   value="Ruím" /><label>Ruím</label></br>
	 </div>
	<div class="section"><span>2</span>Gostaria de contribuir com alguma sugestão?</div>
	 <div class="inner-wrap">
	   <textarea placeholder="Sugestão" name="mensagem" rows="10" cols="60" id="txtMensagem" onkeyup="adjust_textarea(this)"></textarea></br></br>
	 </div>
	   <input class="botao" type="submit" value="Salvar" id="btnSalvar"/>
```

* Tabela:

```sh
 <table id="tblListar">
 </table>
```

# Test na Web
<img src="http://imgur.com/B7VHv8P.png"/>
