const soap = require('soap');

soap.createClient('http://localhost:3000/SOAP/address?wsdl', function (err, client) {
  if (err)
    console.log(err);
  else
    console.log(client.describe()
      .GetAddressByCEPService.GetAddressByCEPServiceSoapPort.GetAddressByCEP
    );

  client.GetAddressByCEP({ CEP: '' }, (err, result) => {
    if (err)
      console.log(err);
    else
      console.log(result);
  })
})

soap.createClient('http://localhost:3000/SOAP/user?wsdl', function (err, client) {
  if (err)
    console.log(err);
  else
    console.log(client.describe());

  client.UserService.UserServiceSoapPort.CreateUser({ name: '', email: '' }, (err, result) => {
    if (err)
      console.log(err);
    else
      console.log(result);
  })
})