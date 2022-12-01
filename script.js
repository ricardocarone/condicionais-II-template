// const nota = 4
// const presenca = 85

// if(nota>=6){
//     alert("Você tem nota suficiente! tem presença?")
// if(presenca>=60){
//     alert("Você foi aprovado, tem presença. fé!")
// }else{
//     alert("você não tem nota")
// }}else{
//  alert("Você nao tem presença parça")
// }

// const nota = 10;
// const porcentagemPresenca = 33;

// if(nota >= 6){
// 	console.log("Nota ok");

// 	if(porcentagemPresenca >= 75){
// 		console.log("presença ok! Estudante passou!");
// 	} else{
// 		console.log("presença abaixo! Estudante reprovou!");
// 	}
// } else{
// 	console.log("Nota abaixo! Estudante reprovou!");
// }

// ## PRÁTICA GUIADA ## //
//IF ANINHADOS

// idadeDependente >= 13;
// idadeDependente <= 17;

// let idadeDependente = 18

// if (idadeDependente >= 13) {
// 	if (idadeDependente <= 17) {
// 		console.log("Pode ter o cartão de dependente")
// 	} else {
// 		console.log("O limite de idade é 17 anos")
// 	}
// } else {
// 	console.log("Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank")
// }

// //AGORA USANDO OPERADORES LÓGICOS(EX: %,&&,||)
// if (idadeDependente >= 13 && idadeDependente <= 17) {
// 	console.log("Pode ter o cartão de dependente")
// } else {
// 	console.log("Para ter o cartão, o dependente precisa ter entre 13 e 17 anos. Consulte outras possibilidades do Labank")
// }

// //TERNÁRIO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let chuva = true

// chuva ? console.log("Leve guarda-chuva!") : console.log("Não precisa levar guarda-chuva hoje!")

// idadeDependente === 13 ? console.log("Pode ter o cartão!") : console.log("Consulte outras opções!")

// //SWITCH-CASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let escolhaUsuario = +(prompt("Escolha de 1 ao 4 para selecionar seu cartão"))
// let cartao


// switch (escolhaUsuario) {
// 	case 1:
// 		cartao = "Fácil"
// 		break;
// 	case 2:
// 		cartao = "Black"
// 		break;
// 	case 3:
// 		cartao = "Platinum"
// 		break;
// 	case 4:
// 		cartao = "Master Gold"
// 		break;
// 	default:
// 		cartao = "Escolha uma das quatro opções disponiveis"
// 		break;


// }
// console.log("Cartão", cartao)


//EXERCICIO PRA GUARDAR NA CABEÇA!!!!!!!!!!!!!!!!!!!!!!!!
//1) Crie um código que receba um número por "prompt" e verifique se um número é divisível por 2 e por 3. Faça isso:

//a) Utilizando ifs aninhados

//b) Utilizando um operador lógico para unir duas oprações relaciopnais
var numero = Number(prompt("Escolha um número por favor"))

if (numero % 2 === 0 || numero % 3 === 0) {
	if (numero % 2 === 0) {
		console.log("Seu número escolhido é divisível por 2")
	}
	if (numero % 3 === 0) {
		console.log("Seu número escolhido é divisível por 3")
	}
	if (numero % 2 === 0 && numero % 3 === 0) {
		console.log("Seu número é divisível por 2 e por 3 :)")
	}
	// numero === 30
	// 	? console.log("UFA!! ACERTEI")
	// 	: console.log("Não foi dessa vez")
	switch (numero) {
		case 6:
			console.log(`você escolheu o numero 6`)
			break;
		case 12:
			console.log(`você escolheu o numero 12`)
			break;
			case 18:
				console.log(`você escolheu o numero 18`)
				break;
				case 24:
					console.log(`você escolheu o numero 24`)
					break;
					case 30:
						console.log(`UFA ACERTEI`)
						break;
						default:
							console.log("Número é maior que 30 ou menor que 6")
	}
}




//2) Dentro do if anterior, crie um if ternário que imprima um número surpresa que deve ser 30:
//-caso o número sea 30, imprima no console "UFA ACERTEI!"
//-caso não seja, imprima "não foi dessa vez"

//3) Ainda dentro do if do exercício anterior, comente o ternário, e crie uma estrutura de (switch case) que verifique se o número é 6,12,18,24 ou 30. Imprima uma mensagem diferente para cada número.

// caso não seja nenhum DataTransferItemList, imprima o "número é maior que 30 ou menor que 6"