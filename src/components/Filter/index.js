import React, { useEffect, useState } from 'react';
import MainGrid from '../MainGrid';

import {
  Button,
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

  const [material, setMaterial] = useState([]);
  const [format, setFormat] = useState([]);
  const [color, setColor] = useState([]);

  const resultBox = document.getElementById('render-result');

  const handleSelect = (e) => {
    //setando os valores dos três grupos de radio
    if (e.target.name === 'material') {
      setMaterial(e.target.value);
    } else if (e.target.name === 'format') {
      setFormat(e.target.value);
    } else if (e.target.name === 'color') {
      setColor(e.target.value);
    } else {
      console.log('Nada selecionado.');
    }
  };

  const handleSubmit = () => {
    console.log('material value:', material); //conferindo quando marcamos
    console.log('format value:', format);
    console.log('color value:', color);
    FilterRules(); //executando o filtro
  };

  function FilterRules() {
    //filtro

    for (var i = 0; i < products.length; i++) {
      const { materialId, formatId, colorId, name, imageUrl, description } =
        products[i];

      if (
        JSON.stringify(colorId) === color &&
        JSON.stringify(formatId) === format &&
        JSON.stringify(materialId) === material
      ) {
        resultBox.innerHTML = `<img src=${imageUrl}> <h1>${name}</h1> <p>${description}</p>`;
        break;
      } else {
        resultBox.innerHTML = `<p>Não há produtos com as características selecionadas.</p>`;
      }
    }
  }

  return (
    <>
      <MainGrid>
        <Box>
          <BoxFilter>
            <h1>Filtro</h1>

            <FormControl>
              {' '}
              <FormLabel className="form-label">Material</FormLabel>
              <RadioGroup aria-label="material" row>
                <FormControlLabel
                  value="1"
                  label="Acetato"
                  name="material"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="2"
                  label="Metálico"
                  name="material"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
              </RadioGroup>
              <FormLabel className="form-label">Format</FormLabel>
              <RadioGroup aria-label="format" column>
                <FormControlLabel
                  value="1"
                  label="Redondo"
                  name="format"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="2"
                  label="Quadrado"
                  name="format"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="3"
                  label="Aviador"
                  name="format"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="4"
                  label="Retangular"
                  name="format"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="5"
                  label="Oval"
                  name="format"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
              </RadioGroup>
              <FormLabel className="form-label">Cores</FormLabel>
              <RadioGroup aria-label="color" row>
                <FormControlLabel
                  className="option-label"
                  value="1"
                  label="Tartaruga"
                  name="color"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="2"
                  label="Transparente"
                  name="color"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="3"
                  label="Preto"
                  name="color"
                  control={<Radio onChange={(e) => handleSelect(e)} />}
                  labelPlacement="end"
                />
              </RadioGroup>
              <br />
              <Button
                className="submit-button"
                type="submit"
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                Criar a sua armação
              </Button>
            </FormControl>
          </BoxFilter>

          <BoxResult>
            <div id="render-result">
              <p>
                Selecione <strong>3</strong> características.
              </p>
            </div>
          </BoxResult>
        </Box>
      </MainGrid>
    </>
  );
}
