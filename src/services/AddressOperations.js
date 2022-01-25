const soap = require('soap')
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

exports.GetAddressByCEP = (args) => {
  console.log('...', args)
  return {
    CEP: 'TESTE'
  }
}