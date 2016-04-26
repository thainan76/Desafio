$(function(){

	var operacao = "A";

	var indice_selecionado = -1;

	var tbClientes = localStorage.getItem("tbClientes");

	tbClientes = JSON.parse(tbClientes); 

	if(tbClientes == null) 
		tbClientes = [];

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

	function Excluir(){
		indice_selecionado = parseInt($(this).attr("alt"));
		tbClientes.splice(indice_selecionado, 1);
		localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
		alert("Registro excluído.");
	}
	
	function GetCliente(propriedade, valor){
		var cli = null;
        for (var item in tbClientes) {
            var i = JSON.parse(tbClientes[item]);
            if (i[propriedade] == valor)
                cli = i;
        }
        return cli;
	}

	Listar();

	$("#frmCadastro").on("submit",function(){
		if(operacao == "A")
			return Adicionar();
		else
			return Editar();		
	});
     
	$("#tblListar").on("click", ".btnExcluir",function(){ indice_selecionado = parseInt($(this).attr("alt")); 
	Excluir(); 
	Listar();
	});

});

function adjust_textarea(h) {
    h.style.height = "100px";
    h.style.height = (h.scrollHeight)+"px";
}