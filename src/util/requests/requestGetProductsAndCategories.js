import { axiosI } from '../../services/axios';

async function requestGetProductsAndCategories(setProductsAndCategories) {
  axiosI
    .get(`/products`)
    .then(({ data }) => {
      setProductsAndCategories(data);
    })
    .catch(err => {
      console.error(err);
      setProductsAndCategories({
        categoriesList: [
          {
            id: 2,
            category: 'Adicionais'
          },
          {
            id: 4,
            category: 'Sabores'
          },
          {
            id: 6,
            category: 'Caldas'
          }
        ],

        productsList: [
          {
            id: 3,
            name: 'banana',
            categoryId: 4
          },
          {
            id: 4,
            name: 'granulado',
            categoryId: 2
          },
          {
            id: 12,
            name: 'chocolate',
            categoryId: 6
          }
        ]
      });
    });
}

export default requestGetProductsAndCategories;
