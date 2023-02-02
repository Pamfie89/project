const noop = () => {};
const NO_PARAMS = {};
const NO_HEADERS = {};
const OK_200 = [200];

function request({
  method = "GET",
  url,
  params = NO_PARAMS,
  headers = NO_HEADERS,
  body,
  requestType = "json",
  responseType = "json",
  okResponse = OK_200,
  checkStatusInResponse = false,
  onSuccess = noop,
  onError = noop,
}) {
  const req = new XMLHttpRequest();

  const urlParams = new URLSearchParams(params);
  const queryString = urlParams.toString();

  req.open(method, url + (queryString ? `?${queryString}` : ""));

  Object.keys(headers).forEach((key) => {
    req.setRequestHeader(key, headers[key]);
  });

  req.responseType = responseType;

  req.onload = function (event) {
    const target = event.target;

    if (!okResponse.includes(target.status)) {
      onError(target.statusText);
      return;
    }
    if (checkStatusInResponse && target.response.status !== "ok") {
      onError(target.statusText);
      return;
    }

    onSuccess(target.response);
  };

  req.onerror = function () {
    onError();
  };

  let dataBody = body;

  if (requestType === "urlencoded") {
    req.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    const bodyParams = new URLSearchParams(body);
    dataBody = bodyParams.toString();
  }

  if (requestType === "json") {
    req.setRequestHeader("content-type", "application/json");
    dataBody = JSON.stringify(body);
  }

  req.send(dataBody);
}
