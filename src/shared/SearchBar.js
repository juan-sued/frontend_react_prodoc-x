import { useState } from 'react';
import { useEffect } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import styled from 'styled-components';
import requestGetProducts from '../../util/requests/requestGetProducts';
export default function SearchBar({ setResponseSearch }) {
  const [searchProduct, setSearchProduct] = useState({
    searchBar: ''
  });
  const handleChangeText = e => {
    setSearchProduct({ ...searchProduct, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    requestGetProducts(searchProduct, setResponseSearch);

    return () => {
      requestGetProducts([]);
    };
  }, [searchProduct.searchBar]);

  return (
    <SearchBarStyle>
      <input
        id="top-nav-search-input"
        aria-autocomplete="list"
        type="text"
        className="search-input-field"
        name="searchBar"
        placeholder="ex: Açaí de banana"
        required
        value={searchProduct.searchBar}
        onChange={handleChangeText}
      ></input>
      <button className="buttonSubmitSearch">
        <MdOutlineSearch color="#686868" size="25px" />
      </button>
    </SearchBarStyle>
  );
}

const SearchBarStyle = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-left: 50px;

  .search-input-field {
    border: none;
    font-size: 17px;
    background-color: transparent;
    height: 100%;
    border-radius: 5px;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    padding-left: 10px;
    padding-right: 5px;
    min-width: 320px;
    width: 100%;
    border-right: none;
    max-width: 800px;
    margin-right: 10px;
    padding-right: 9%;
  }
  button {
    position: relative;
    right: 61.5px;
    height: 85%;
    background-color: transparent;
    border: none;

    border-radius: 5px;
    width: 50px;
    background-color: #eeedf4;
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
`;
