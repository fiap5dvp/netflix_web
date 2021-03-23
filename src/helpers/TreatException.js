const treatException = (err) => {
  let { message } = err;

  console.log("ERROR", err);

  if (err.response) {
    if (err.response.status === 404) {
      message = `Não foi possível localizar o endereço ${err.response.config.url}`;
    } else {
      if (typeof err.response.data === "object") {
        if (err.response.data.name) {
          if (err.response.data.name === "ValidationError") {
            message = "Verifique os erros e tente novamente";
          } else
            message =
              err.response.data.message || err.response.data.error || message;
        } else
          message =
            err.response.data.message || err.response.data.error || message;
      } else if (err.response.data.indexOf("<html>") === -1)
        message = err.response.data || err.response.data.error || message;
    }
  }

  if (typeof message === "string") {
    if (message.indexOf("timeout") >= 0)
      message = "Servidor excedeu o tempo de resposta";

    if (message.indexOf("Internal server error") >= 0)
      message = "Erro interno no servidor";

    if (message.indexOf("Network Error") >= 0)
      message = "Servidor não encontrado";

    if (message === "Request failed with status code 404")
      message = "Não foi possível encontrar o recurso no servidor";

    if (message.indexOf("Fail to get DB Credentials from SLD.") >= 0)
      message = "Usuário ou senha inválido";
  } else {
    if (message.originalError) {
      message = message.originalError.info.message;
    }
  }

  alert(message);
  // return message;
};

export default treatException;
