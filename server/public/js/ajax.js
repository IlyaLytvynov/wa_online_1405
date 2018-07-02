(function () {
  class Ajax {
    static get(url, successCallback, errorCallback) {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);// получение данных

      xhr.send();

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
          if(xhr.status === 200) {
            successCallback(JSON.parse(xhr.response));
          } else {
            errorCallback(xhr.error);
          }
        }
      });
    }

    static post(url, data, successCallback, errorCallback) {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', url, true);// получение данных
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.send(JSON.stringify(data));

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
          if(xhr.status === 200) {
            successCallback(JSON.parse(xhr.response));
          } else {
            errorCallback(xhr.error);
          }
        }
      });
    }

    static put(url, data, successCallback, errorCallback) {
      const xhr = new XMLHttpRequest();

      xhr.open('PUT', url, true);// получение данных
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.send(JSON.stringify(data));

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
          if(xhr.status === 200) {
            successCallback(JSON.parse(xhr.response));
          } else {
            errorCallback(xhr.error);
          }
        }
      });
    }
  }


  window.Ajax = Ajax;
})();