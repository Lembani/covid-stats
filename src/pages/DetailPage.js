import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from '../redux/covid/Api';
import { fetchStats } from '../redux/covid/reducer';

const DetailPage = () => {
  const countryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { name } = useParams();
  const findCountry = countryStore.find((country) => country.country === name);

  useEffect(() => {
    if (countryStore.length === 0) {
      fetchData().then((response) => dispatch(fetchStats(response)));
    }
  });

  return (
    <div className="container-fluid">
      <div className="continent">
        <h1>{name}</h1>
        <img
          src={findCountry.country_flag}
          alt="national-flag"
          className="national-flag1"
        />
      </div>
      <div>
        <ul className="today">
          <h3> Today&apos;s update:</h3>
          <li>
            <h4>New cases:</h4>
            {' '}
            {findCountry.todays_cases.toLocaleString()}
          </li>
          <li>
            <h4>Confirmed deaths:</h4>
            {' '}
            {findCountry.todays_deaths.toLocaleString()}
          </li>
          <li>
            <h4>New Recoveries:</h4>
            {' '}
            {findCountry.todays_recovered.toLocaleString()}
          </li>
        </ul>
        <ul className="total">
          <h3>Total:</h3>
          <li>
            <h4>Confirmed cases:</h4>
            {' '}
            {findCountry.total_cases.toLocaleString()}
          </li>
          <li>
            <h4>Recovered:</h4>
            {' '}
            {findCountry.total_recovered.toLocaleString()}
          </li>
          <li>
            <h4>Active Cases:</h4>
            {' '}
            {findCountry.total_active.toLocaleString()}
          </li>
          <li>
            <h4>Total Tests:</h4>
            {' '}
            {findCountry.total_tests.toLocaleString()}
          </li>
          <li>
            <h4>Deaths:</h4>
            {' '}
            {findCountry.total_deaths.toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailPage;
