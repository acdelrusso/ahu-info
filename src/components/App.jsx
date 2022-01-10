import React, {useState} from 'react';
import Searchbar from './Searchbar';
import Displaycard from './Displaycard';
import data from './data';
import Carousel from 'react-elastic-carousel';

function App() {
  const [search, setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
    };

  return (
    <>
    <Searchbar onChange={handleChange} value={search} />
    <Carousel>
    {
      // eslint-disable-next-line array-callback-return
      data.filter((val) => {
        if (search === "") {
          return val
        } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }).map((handler, index) =>  
        <Displaycard key={index} name={handler.name} equipmentNumber={handler.equipmentNumber} department={handler.department} rooms={handler.rooms} />
      )
    }
    </Carousel>
    </>
  );
}

export default App;
