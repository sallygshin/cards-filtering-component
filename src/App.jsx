import { useState, useEffect, useRef } from 'react';
import Filter from './components/Filter';
import RenderCards from './components/RenderCards';
import { tours as data } from './utils/data';

function App() {
  const [tours, setTours] = useState(data);
  const [filteredTours, setFilteredTours] = useState([]);
  const initialMount = useRef(true);
  const allTours = [...data];

  const removeItem = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const updateTours = (search) => {
    if (search === '') {
      setTours(allTours);
      return;
    }
    const newToursList = allTours.filter((tour) => tour.location.startsWith(search) || tour.continent.includes(search) || tour.tags.includes(search));
    if (newToursList.length === 0) {
      setTours([]);
      return;
    } else {
      setTours(newToursList);
    }
  };

  const handleFilter = (e) => {
    console.log('clicked');
    // if (e.target.checked && e.target.name === 'all') {
    //   console.log(e.target.name);
    //   setTours(allTours);
    //   setFilteredTours([]);
    //   return;
    // }
    if (e.target.checked && e.target.name !== 'all') {
      console.log(e.target.checked);
      const newList = allTours.filter((tour) => tour.continent === e.target.name);
      setFilteredTours([...filteredTours, ...newList]);
    } else if (!e.target.checked) {
      console.log(e.target.checked);
      const newList = filteredTours.filter((tour) => tour.continent !== e.target.name);
      setFilteredTours(newList);
    }
  };

  useEffect(() => {
    if (initialMount.current) {
      setTours(data);
    }
    if (!initialMount.current && filteredTours.length === 0) {
      setTours([]);
    }
    if (filteredTours.length > 0) {
      setTours(filteredTours);
      initialMount.current = false;
    }
  }, [filteredTours]);

  if (tours.length === 0) {
    return (
      <main>
        <Filter />
        <section className="empty-tours">
          <div>
            <h3 className="no-more-text">No offered tours.</h3>
            <button type="button" className="btn return-btn" onClick={() => setTours(data)}>
              Return to all tours
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Filter updateTours={updateTours} handleFilter={handleFilter} setTours={setTours} />
      <RenderCards tours={tours} removeItem={removeItem} />
    </main>
  );
}

export default App;
