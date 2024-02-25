import { CarsListItem } from 'components/CarsListItem/CarsListItem';

import { List } from './CarsList.styled';

export const CarsList = ({ cars }) => {
  return (
    <List>
      {cars.map(car => (
        <CarsListItem key={car.id} car={car} />
      ))}
    </List>
  );
};
