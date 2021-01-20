export function isOk(request) {
  return request.status === 200;
}

export function handleError(error, text, callback) {
  return callback? callback(error) : console.log(text, error); 
}
export async function getRequestId(callback, errorCallback) {
  try {
    const res = await fetch("https://front-test.beta.aviasales.ru/search");  
    if (isOk(res)) {
      res.json()
        .then(res => callback(res) , e => handleError(e, "getRequestId: ", errorCallback));
    }
  } catch(e) { handleError(e, "getRequestId: ", errorCallback) };
}

export async function getTickets(searchId, callback, errorCallback) {
  if (searchId) {
    try {
      const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)    
      if (isOk(res)) {
        res.json()
          .then(res => callback(res), e => handleError(e, "getTickets: ", errorCallback))
      }    
    } catch(e) { handleError(e, "getTickets: ", errorCallback) }; 
  }
}

export default getTickets