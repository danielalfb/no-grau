import React, { useEffect, useState } from 'react';
import MainGrid from '../MainGrid';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import { Box, BoxFilter, BoxResult } from './style';

function HandleFilter() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://no-grau2347.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  products.filter();
}

const Filter = () => {
  return (
    <>
      <MainGrid>
        <Box>
          <BoxFilter>
            <h1>Filtro</h1>
            <FormControl>
              <FormLabel className="form-label">Material</FormLabel>
              <FormGroup aria-label="filtro" row>
                <FormControlLabel
                  value="acetato"
                  label="Acetato"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="metalico"
                  label="Metálico"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
              </FormGroup>
              <FormLabel className="form-label">Formato</FormLabel>
              <FormGroup aria-label="filtro" column>
                <FormControlLabel
                  value="redondo"
                  label="Redondo"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="oval"
                  label="Oval"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="aviador"
                  label="Aviador"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="quadrado"
                  label="Quadrado"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
              </FormGroup>
              <FormLabel className="form-label">Cores</FormLabel>
              <FormGroup aria-label="filtro" row>
                <FormControlLabel
                  className="option-label"
                  value="preto"
                  label="Preto"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="transparente"
                  label="Transparente"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="tartaruga"
                  label="Tartaruga"
                  control={<Checkbox />}
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </BoxFilter>

          <BoxResult>
            <h1>Results here</h1>
            <div id="render"></div>
          </BoxResult>
        </Box>
      </MainGrid>
    </>
  );
};

export default Filter;
