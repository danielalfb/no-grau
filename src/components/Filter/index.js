import React, { useEffect, useState } from 'react';
import MainGrid from '../MainGrid';
import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
} from '@material-ui/core';
import { Box, BoxFilter, BoxResult } from './style';

export default function Filter() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://no-grau2347.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const [checked, setChecked] = useState();

  const handleSelect = (e) => {};

  return (
    <>
      <MainGrid>
        <Box>
          <BoxFilter>
            <h1>Filtro</h1>
            <FormControl>
              <FormLabel className="form-label">Material</FormLabel>
              <RadioGroup aria-label="filtro" row>
                <FormControlLabel
                  value="1"
                  label="Acetato"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="2"
                  label="Metálico"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
              </RadioGroup>
              <FormLabel className="form-label">Formato</FormLabel>
              <RadioGroup aria-label="filtro" column>
                <FormControlLabel
                  value="1"
                  label="Redondo"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="2"
                  label="Oval"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="3"
                  label="Aviador"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="4"
                  label="Quadrado"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
              </RadioGroup>
              <FormLabel className="form-label">Cores</FormLabel>
              <RadioGroup aria-label="filtro" row>
                <FormControlLabel
                  className="option-label"
                  value="1"
                  label="Preto"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="2"
                  label="Transparente"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="3"
                  label="Tartaruga"
                  control={
                    <Radio onChange={(e) => handleSelect(e.target.value)} />
                  }
                  labelPlacement="end"
                />
              </RadioGroup>
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
}
