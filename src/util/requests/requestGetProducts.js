import { axiosI } from '../../services/axios';

async function requestGetProducts(searchProduct, setResponseSearch) {
  axiosI
    .get(`/products/product?name=${searchProduct.searchBar}`)
    .then(({ data }) => {
      setResponseSearch(data);
    })
    .catch(err => {
      console.error(err);
      setResponseSearch([
        {
          image: 'https://soleneve.com.br/site/uploads/produtos_img/107/15493667925.png',
          name: 'Acaí com banana'
        },
        {
          image: 'https://soleneve.com.br/site/uploads/produtos_img/107/15493667925.png',
          name: 'Acaí com banana'
        }
      ]);
    });
}

export default requestGetProducts;
