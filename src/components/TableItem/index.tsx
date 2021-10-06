import * as C from './styles';
import { Item } from '../../types/Item';

import { categories } from '../../data/categories'
 
import { formatDate } from '../../helpers/dateFilter'

type Props = {
    item: Item
}


export const TableItem = ({item}: Props) => {
    return (
        <C.TableLine>
            <C.TableCollumn>{formatDate(item.date)}</C.TableCollumn>
            <C.TableCollumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableCollumn>
            <C.TableCollumn>{item.title}</C.TableCollumn>
            <C.TableCollumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableCollumn>
        </C.TableLine>
    );
}