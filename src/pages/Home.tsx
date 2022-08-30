import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import qs from 'qs';
import { useNavigate, Link } from 'react-router-dom';

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
  selectFilter,
} from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort/Sort';
import PizzaBlock from '../Components/PizzaBlock';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import Pagination from '../Components/Pagination';
import { sortList } from '../Components/Sort/Sort';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  const onClickCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      //@ts-ignore
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage,
      }),
    );
  };

  //Якщо змінили параметри і був перший рендер то..
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  //Якщо був перий рендер то перевіряємо URL параметри і зберіаємо в редаксі
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  //Якщо був перший рендер то робимо запит піцц
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  const pizzas = items
    // .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    //пошук по статичному масиву без бекенду
    .map((item: any) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => onClickCategory(id)} />
        <Sort />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>На жаль не вдалося завантажити піцци, спробуйте пізніше.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
