# Cadastro de Endereço (Projeto Aula Prática 2)

## Descrição
Este projeto consiste em um **formulário web** que permite preencher automaticamente os campos de endereço a partir do **CEP** informado, utilizando a **API dos Correios**.  
O formulário é construído com **HTML5**, **CSS3**, **JavaScript** e estilizado com **Bootstrap 5**.

## Funcionalidades
- Inserir CEP e obter automaticamente:  
  - Rua  
  - Bairro  
  - Cidade  
  - Estado  
- Campos adicionais opcionais:  
  - Número  
  - Complemento  
- Validação de CEP e tratamento de erros.

## Tecnologias Utilizadas
- **HTML5** – estrutura da página.  
- **CSS3** – estilo e layout do formulário.  
- **Bootstrap 5** – framework de estilo para responsividade e design moderno.  
- **JavaScript** – consumo da API e lógica de preenchimento automático.  
- **NetBeans IDE** – ambiente de desenvolvimento.

## Pré-requisitos
- Computador com **NetBeans IDE** e **Java JDK** instalado.  
- Navegador **Google Chrome** (recomendado) com extensão **NetBeans** ativada para testes.

## Estrutura de Arquivos
```
cadastroEndereco/
├── index.html       # Página principal com formulário
├── style.css        # Estilos CSS personalizados
└── controller.js    # Script JavaScript para consumo da API
```

## Como Executar
1. Abra o **NetBeans IDE** e crie um projeto **HTML5/JS Application** chamado `cadastroEndereco`.  
2. Coloque os arquivos `index.html`, `style.css` e `controller.js` no diretório principal do projeto.  
3. Abra o `index.html` no navegador Google Chrome.  
4. Digite um CEP válido no formulário e clique em **Buscar Endereço**.  
5. Os campos Rua, Bairro, Cidade e Estado serão preenchidos automaticamente.  

## Checklist Concluído
- Ambiente NetBeans com JDK instalado ✅  
- Projeto web HTML5/JS criado ✅  
- Arquivos CSS e JS vinculados ✅  
- Formulário com campos de endereço implementado ✅  
- Consumo da API dos Correios funcionando ✅  
- Testes realizados com sucesso no navegador ✅  

## Autor
- **Rerisson Henrique Rodrigues da Silva**
