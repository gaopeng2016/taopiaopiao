const baseUrl = 'https://www.easy-mock.com/mock/5a964cffdd997801d1e291fe/movie';
export default async function (path, opt) {
    const url = baseUrl + path;
    const options = Object.assign({method: 'GET'},opt);

    try {
        const response = await fetch(url, options);
        const {status, data} = await response.json();

        if(status === 0) {
            return data;
        } else {
            
        }
    } catch(e) {

    }

}