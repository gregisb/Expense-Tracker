import React, { useState, useEffect } from 'react';

import * as C from './App.styles';

import {Item} from './types/Item';
import {Category} from './types/Category';

import { items } from './data/items';
import { categories } from './data/categories';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {
  const LOCAL_STORAGE_KEY = 'expenses list'

  
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  useEffect(() => {
    let expenseCount = 0;
    let incomeCount = 0

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;

      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

 
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList)
  };

  //LOCALSTORAGE - AQUI?

  // useEffect(() => {
  //   const retrieveList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retrieveList) {
  //     setList(retrieveList);
  //      }
  //   }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
  // }, [list]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Gerenciador de Finanças</C.HeaderText>
      </C.Header>
      <C.Body>
          <InfoArea 
                currentMonth={currentMonth}
                onMonthChange={handleMonthChange}
                income={income}
                expense={expense}
          />

          <InputArea onAdd={handleAddItem}/>

          <TableArea list={filteredList}/>
        </C.Body>
    </C.Container>
  );
}

export default App;