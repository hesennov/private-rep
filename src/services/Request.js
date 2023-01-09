function parseData(data){
  const formData = new FormData()
  for(let [key, value] of Object.entries(data)){
    formData.append(key, value)
  }
  return formData
}

const Request = (url, data = false, method = "GET", type = 'FORM_DATA') => {
  return new Promise(async (resolve, reject) => {
    const options = {
      method,
    };
    if (data && method === "POST") {
      options.body = "JSON" ?  JSON.stringify(data) : parseData(data)
    }
    const response = await fetch(url, options);
    const result = await response.json();
    if (response.ok && response.status === 200) {
      resolve(result);
    } else {
      reject(result);
    }
  });
};

export const post = (url, data) => Request(url, data, "POST");
export const postJSON = (url, data) => Request(url, data, "POST", 'JSON');
export const get = (url) => Request(url);
