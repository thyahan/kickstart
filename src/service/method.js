const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const fetchWithResponse = (url, options) => {
  return new Promise((resolve, reject) => {
    fetch(url, { headers, ...options })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const GET = (url) => {
  return fetchWithResponse(url);
};

const POST = (url, body) => {
  return fetchWithResponse(url, { method: 'POST', body: JSON.stringify(body) });
};

const PUT = (url, body) => {
  return fetchWithResponse(url, { method: 'PUT', body: JSON.stringify(body) });
};

const DELETE = (url) => {
  return fetchWithResponse(url, { method: 'DELETE' });
};

export { fetchWithResponse, GET, POST, PUT, DELETE };
