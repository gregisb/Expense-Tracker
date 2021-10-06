import React, { useState, useEffect } from 'react';

import * as C from './App.styles';

import {Item} from './types/Item';
import {Category} from './types/Category';

import { items } from './data/items';
import { categories } from './data/categories';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

const App = () => {
  const [list, setLists] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMotnh] = useState(getCurrentMonth());

  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sitemas Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
          {/* Area de informaçoes */}

          {/* Area de inserção das informções  */}

          {/* Tabela de itens  */}
        </C.Body>
    </C.Container>
  );
}

export default App;