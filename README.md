# SOAP Calculator Service

_[Versão em Português](#versão-em-português) | [Portuguese Version](#versão-em-português)_

A SOAP web service developed in Node.js to perform basic arithmetic operations (addition, subtraction, multiplication, and division).

## 🎯 About the Project

This project implements a web service using the SOAP protocol that allows performing the four basic arithmetic operations:

- **Addition**: Sum of two numbers
- **Subtraction**: Difference between two numbers
- **Multiplication**: Product of two numbers
- **Division**: Quotient of two numbers (with division by zero handling)

The service exposes a WSDL file that describes all available operations and enables communication via XML.

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime environment
- **soap** - Library for creating SOAP services in Node.js
- **express** - Web framework for Node.js
- **body-parser** - Middleware for parsing requests

## 📦 Prerequisites

Before starting, make sure you have installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- SoapUI (for testing via graphical interface) - [Download here](https://www.soapui.org/downloads/soapui/)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/AbelFDias/soap-calculator-service.git
cd soap-calculator-service
```

2. Install dependencies:
```bash
npm install
```

## ▶️ Running the Service

1. Start the SOAP server:
```bash
node server.js
```

2. The service will be available at:
   - **Service URL**: `http://localhost:8000/calculator`
   - **WSDL URL**: `http://localhost:8000/calculator?wsdl`

3. You will see the message in the console:
```
SOAP Calculator Service running on http://localhost:8000
WSDL available at http://localhost:8000/calculator?wsdl
```

## 📁 Project Structure

```
soap-calculator-service/
├── server.js           # Main SOAP server
├── client.js           # Node.js test client
├── calculator.wsdl     # Service WSDL definition
├── package.json        # Project dependencies
├── README.md          # Documentation
└── examples/          # Request examples
    └── requests.xml
```

## 🔢 Available Operations

### 1. Addition (add)
Adds two numbers.
- **Parameters**: `a` (number), `b` (number)
- **Return**: `result` (number)

### 2. Subtraction (subtract)
Subtracts the second number from the first.
- **Parameters**: `a` (number), `b` (number)
- **Return**: `result` (number)

### 3. Multiplication (multiply)
Multiplies two numbers.
- **Parameters**: `a` (number), `b` (number)
- **Return**: `result` (number)

### 4. Division (divide)
Divides the first number by the second.
- **Parameters**: `a` (number), `b` (number)
- **Return**: `result` (number)
- **Error**: Returns error message if `b = 0`

## 🧪 Testing with Node.js Client

Run the included test client:

```bash
node client.js
```

The client will automatically execute all operations and display the results in the console.

## 🔍 Testing with SoapUI

### Step 1: Install SoapUI

1. Access the official website: https://www.soapui.org/downloads/soapui/
2. Download the **SoapUI Open Source** version (free)
3. Install following the instructions for your operating system
4. Run SoapUI

### Step 2: Create a New SOAP Project

1. **Open SoapUI**

2. **Create a new SOAP project**:
   - Click on **File** → **New SOAP Project**
   - Or click on the **SOAP** icon in the toolbar

3. **Configure the project**:
   - **Project Name**: Enter `CalculatorService` (or any name you prefer)
   - **Initial WSDL**: Paste the WSDL URL: `http://localhost:8000/calculator?wsdl`
   - Check the **Create Requests** option
   - Click **OK**

4. **Wait for loading**:
   - SoapUI will analyze the WSDL and automatically create requests for each operation

### Step 3: Project Structure in SoapUI

After creating the project, you will see the following structure in the tree on the left:

```
CalculatorService
└── CalculatorServiceSoapBinding
    ├── add
    │   └── Request 1
    ├── subtract
    │   └── Request 1
    ├── multiply
    │   └── Request 1
    └── divide
        └── Request 1
```

### Step 4: Test the Addition Operation

1. **Expand the tree**: `CalculatorService` → `CalculatorServiceSoapBinding` → `add`

2. **Open the request**: Double-click on **Request 1**

3. **You will see the request XML**:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:add>
         <tns:a>?</tns:a>
         <tns:b>?</tns:b>
      </tns:add>
   </soapenv:Body>
</soapenv:Envelope>
```

4. **Replace the values**:
   - Change `?` to real numbers, for example:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:add>
         <tns:a>15</tns:a>
         <tns:b>7</tns:b>
      </tns:add>
   </soapenv:Body>
</soapenv:Envelope>
```

5. **Execute the request**:
   - Click the green **Play** button (▶️) in the top left corner
   - Or press **Alt + Enter**

6. **View the response** (right panel):
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <tns:addResponse xmlns:tns="http://localhost:8000/calculator">
         <tns:result>22</tns:result>
      </tns:addResponse>
   </soap:Body>
</soap:Envelope>
```

### Step 5: Test the Other Operations

#### **Subtraction (subtract)**

1. Expand `subtract` → Double-click on **Request 1**
2. Edit the XML:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:subtract>
         <tns:a>20</tns:a>
         <tns:b>8</tns:b>
      </tns:subtract>
   </soapenv:Body>
</soapenv:Envelope>
```
3. Click **Play** (▶️)
4. Expected result: `12`

#### **Multiplication (multiply)**

1. Expand `multiply` → Double-click on **Request 1**
2. Edit the XML:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:multiply>
         <tns:a>6</tns:a>
         <tns:b>7</tns:b>
      </tns:multiply>
   </soapenv:Body>
</soapenv:Envelope>
```
3. Click **Play** (▶️)
4. Expected result: `42`

#### **Division (divide)**

1. Expand `divide` → Double-click on **Request 1**
2. Edit the XML:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:divide>
         <tns:a>100</tns:a>
         <tns:b>4</tns:b>
      </tns:divide>
   </soapenv:Body>
</soapenv:Envelope>
```
3. Click **Play** (▶️)
4. Expected result: `25`

### Step 6: Test Division by Zero

1. In the `divide` request, change the value of `b` to `0`:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:divide>
         <tns:a>100</tns:a>
         <tns:b>0</tns:b>
      </tns:divide>
   </soapenv:Body>
</soapenv:Envelope>
```

2. Execute the request

3. **Expected response (SOAP Fault)**:
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <soap:Fault>
         <faultcode>soap:Server</faultcode>
         <faultstring>Division by zero is not allowed</faultstring>
      </soap:Fault>
   </soap:Body>
</soap:Envelope>
```

### Step 7: Useful SoapUI Features

#### **View the WSDL**
- Right-click on the project name → **Show WSDL Viewer**
- Or access directly: **WSDL Content** (bottom tab)

#### **Create Multiple Requests**
- Right-click on an operation (e.g., `add`)
- Select **New Request**
- Name the request (e.g., "Large Numbers Test")
- Configure and save different test scenarios

#### **Validate Responses**
- **Assertions** tab in the bottom panel
- Click the green **+** button to add validations
- Examples:
  - **Contains**: Check if the response contains a specific value
  - **XPath Match**: Validate XML structure
  - **Response SLA**: Check response time

#### **View Request Log**
- Menu **View** → **Show HTTP Log**
- Shows all HTTP/SOAP traffic in real-time

#### **Save the Project**
- **File** → **Save Project**
- Save the project `.xml` file for future reuse

## ⚠️ Error Handling

The service implements validations for:

1. **Type Validation**: All parameters must be valid numbers
2. **Division by Zero**: Returns SOAP Fault with appropriate message
3. **Missing Parameters**: Returns error if required parameters are not provided

### SOAP Error Codes

- `soap:Client` - Client request error (invalid parameters)
- `soap:Server` - Server error (division by zero, internal error)

## 📚 References

- [Node.js SOAP Library](https://www.npmjs.com/package/soap)
- [SOAP Protocol Specification](https://www.w3.org/TR/soap/)
- [SoapUI Documentation](https://www.soapui.org/docs/)
- [WSDL Specification](https://www.w3.org/TR/wsdl/)

## 👤 Authors

**Abel Dias**
- GitHub: [@AbelFDias](https://github.com/AbelFDias)

**Simão Marcos**
- GitHub: [@simarc0s](https://github.com/simarc0s)

- Repository: [soap-calculator-service](https://github.com/AbelFDias/soap-calculator-service)

## 📄 License

This project is under the MIT license. See the LICENSE file for more details.

---

**Developed as an academic project for the Web Application Development course - LESTI, Ualg** 🎓

---
---

# Versão em Português

# SOAP Calculator Service

Serviço web SOAP desenvolvido em Node.js para realizar operações aritméticas básicas (adição, subtração, multiplicação e divisão).

## 🎯 Sobre o Projeto

Este projeto implementa um serviço web utilizando o protocolo SOAP que permite realizar as quatro operações aritméticas básicas:

- **Adição**: Soma de dois números
- **Subtração**: Diferença entre dois números
- **Multiplicação**: Produto de dois números
- **Divisão**: Quociente de dois números (com tratamento de divisão por zero)

O serviço expõe um arquivo WSDL que descreve todas as operações disponíveis e permite comunicação via XML.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **soap** - Biblioteca para criar serviços SOAP em Node.js
- **express** - Framework web para Node.js
- **body-parser** - Middleware para parsing de requisições

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 14 ou superior)
- npm (Node Package Manager)
- SoapUI (para testes via interface gráfica) - [Download aqui](https://www.soapui.org/downloads/soapui/)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AbelFDias/soap-calculator-service.git
cd soap-calculator-service
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Executando o Serviço

1. Inicie o servidor SOAP:
```bash
node server.js
```

2. O serviço estará disponível em:
   - **URL do Serviço**: `http://localhost:8000/calculator`
   - **URL do WSDL**: `http://localhost:8000/calculator?wsdl`

3. Você verá a mensagem no console:
```
SOAP Calculator Service running on http://localhost:8000
WSDL available at http://localhost:8000/calculator?wsdl
```

## 📁 Estrutura do Projeto

```
soap-calculator-service/
├── server.js           # Servidor SOAP principal
├── client.js           # Cliente de teste Node.js
├── calculator.wsdl     # Definição WSDL do serviço
├── package.json        # Dependências do projeto
├── README.md          # Documentação
└── examples/          # Exemplos de requisições
    └── requests.xml
```

## 🔢 Operações Disponíveis

### 1. Adição (add)
Soma dois números.
- **Parâmetros**: `a` (number), `b` (number)
- **Retorno**: `result` (number)

### 2. Subtração (subtract)
Subtrai o segundo número do primeiro.
- **Parâmetros**: `a` (number), `b` (number)
- **Retorno**: `result` (number)

### 3. Multiplicação (multiply)
Multiplica dois números.
- **Parâmetros**: `a` (number), `b` (number)
- **Retorno**: `result` (number)

### 4. Divisão (divide)
Divide o primeiro número pelo segundo.
- **Parâmetros**: `a` (number), `b` (number)
- **Retorno**: `result` (number)
- **Erro**: Retorna mensagem de erro se `b = 0`

## 🧪 Testando com Cliente Node.js

Execute o cliente de teste incluído:

```bash
node client.js
```

O cliente irá executar automaticamente todas as operações e exibir os resultados no console.

## 🔍 Testando com SoapUI

### Passo 1: Instalar o SoapUI

1. Acesse o site oficial: https://www.soapui.org/downloads/soapui/
2. Baixe a versão **SoapUI Open Source** (gratuita)
3. Instale seguindo as instruções para seu sistema operacional
4. Execute o SoapUI

### Passo 2: Criar um Novo Projeto SOAP

1. **Abra o SoapUI**

2. **Crie um novo projeto SOAP**:
   - Clique em **File** → **New SOAP Project**
   - Ou clique no ícone **SOAP** na barra de ferramentas

3. **Configure o projeto**:
   - **Project Name**: Digite `CalculatorService` (ou qualquer nome de sua preferência)
   - **Initial WSDL**: Cole a URL do WSDL: `http://localhost:8000/calculator?wsdl`
   - Marque a opção **Create Requests**
   - Clique em **OK**

4. **Aguarde o carregamento**:
   - O SoapUI irá analisar o WSDL e criar automaticamente as requisições para cada operação

### Passo 3: Estrutura do Projeto no SoapUI

Após criar o projeto, você verá a seguinte estrutura na árvore à esquerda:

```
CalculatorService
└── CalculatorServiceSoapBinding
    ├── add
    │   └── Request 1
    ├── subtract
    │   └── Request 1
    ├── multiply
    │   └── Request 1
    └── divide
        └── Request 1
```

### Passo 4: Testar a Operação de Adição

1. **Expanda a árvore**: `CalculatorService` → `CalculatorServiceSoapBinding` → `add`

2. **Abra a requisição**: Duplo clique em **Request 1**

3. **Você verá o XML da requisição**:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:add>
         <tns:a>?</tns:a>
         <tns:b>?</tns:b>
      </tns:add>
   </soapenv:Body>
</soapenv:Envelope>
```

4. **Substitua os valores**:
   - Troque `?` por números reais, por exemplo:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:add>
         <tns:a>15</tns:a>
         <tns:b>7</tns:b>
      </tns:add>
   </soapenv:Body>
</soapenv:Envelope>
```

5. **Execute a requisição**:
   - Clique no botão verde **Play** (▶️) no canto superior esquerdo
   - Ou pressione **Alt + Enter**

6. **Visualize a resposta** (painel direito):
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <tns:addResponse xmlns:tns="http://localhost:8000/calculator">
         <tns:result>22</tns:result>
      </tns:addResponse>
   </soap:Body>
</soap:Envelope>
```

### Passo 5: Testar as Outras Operações

#### **Subtração (subtract)**

1. Expanda `subtract` → Duplo clique em **Request 1**
2. Edite o XML:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:subtract>
         <tns:a>20</tns:a>
         <tns:b>8</tns:b>
      </tns:subtract>
   </soapenv:Body>
</soapenv:Envelope>
```
3. Clique em **Play** (▶️)
4. Resultado esperado: `12`

#### **Multiplicação (multiply)**

1. Expanda `multiply` → Duplo clique em **Request 1**
2. Edite o XML:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:multiply>
         <tns:a>6</tns:a>
         <tns:b>7</tns:b>
      </tns:multiply>
   </soapenv:Body>
</soapenv:Envelope>
```
3. Clique em **Play** (▶️)
4. Resultado esperado: `42`

#### **Divisão (divide)**

1. Expanda `divide` → Duplo clique em **Request 1**
2. Edite o XML:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:divide>
         <tns:a>100</tns:a>
         <tns:b>4</tns:b>
      </tns:divide>
   </soapenv:Body>
</soapenv:Envelope>
```
3. Clique em **Play** (▶️)
4. Resultado esperado: `25`

### Passo 6: Testar Divisão por Zero

1. Na requisição `divide`, altere o valor de `b` para `0`:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://localhost:8000/calculator">
   <soapenv:Header/>
   <soapenv:Body>
      <tns:divide>
         <tns:a>100</tns:a>
         <tns:b>0</tns:b>
      </tns:divide>
   </soapenv:Body>
</soapenv:Envelope>
```

2. Execute a requisição

3. **Resposta esperada (SOAP Fault)**:
```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
   <soap:Body>
      <soap:Fault>
         <faultcode>soap:Server</faultcode>
         <faultstring>Division by zero is not allowed</faultstring>
      </soap:Fault>
   </soap:Body>
</soap:Envelope>
```

### Passo 7: Funcionalidades Úteis do SoapUI

#### **Visualizar o WSDL**
- Clique com botão direito no nome do projeto → **Show WSDL Viewer**
- Ou acesse diretamente: **WSDL Content** (aba inferior)

#### **Criar Múltiplas Requisições**
- Clique com botão direito em uma operação (ex: `add`)
- Selecione **New Request**
- Nomeie a requisição (ex: "Teste Números Grandes")
- Configure e salve diferentes cenários de teste

#### **Validar Respostas**
- Aba **Assertions** no painel inferior
- Clique no botão verde **+** para adicionar validações
- Exemplos:
  - **Contains**: Verificar se a resposta contém um valor específico
  - **XPath Match**: Validar estrutura XML
  - **Response SLA**: Verificar tempo de resposta

#### **Ver o Log de Requisições**
- Menu **View** → **Show HTTP Log**
- Mostra todo o tráfego HTTP/SOAP em tempo real

#### **Salvar o Projeto**
- **File** → **Save Project**
- Salve o arquivo `.xml` do projeto para reutilização futura

## ⚠️ Tratamento de Erros

O serviço implementa validações para:

1. **Validação de Tipos**: Todos os parâmetros devem ser números válidos
2. **Divisão por Zero**: Retorna SOAP Fault com mensagem apropriada
3. **Parâmetros Ausentes**: Retorna erro se parâmetros obrigatórios não forem fornecidos

### Códigos de Erro SOAP

- `soap:Client` - Erro na requisição do cliente (parâmetros inválidos)
- `soap:Server` - Erro no servidor (divisão por zero, erro interno)

## 📚 Referências

- [Node.js SOAP Library](https://www.npmjs.com/package/soap)
- [SOAP Protocol Specification](https://www.w3.org/TR/soap/)
- [SoapUI Documentation](https://www.soapui.org/docs/)
- [WSDL Specification](https://www.w3.org/TR/wsdl/)

## 👤 Autor

**Abel Dias**
- GitHub: [@AbelFDias](https://github.com/AbelFDias)

**Simão Marcos**
- GitHub: [@simarc0s](https://github.com/simarc0s)

- Repository: [soap-calculator-service](https://github.com/AbelFDias/soap-calculator-service)

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

**Desenvolvido como projeto académico para a cadeira de Desenvolvimento de Aplicações Web - LESTI, Ualg** 🎓
