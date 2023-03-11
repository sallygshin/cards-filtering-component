import Tours from './Tours';

const RenderCards = ({ removeItem, tours }) => {
  return (
    <section className="container">
      <div className="title">
        <h2>Odyssey Travels</h2>
      </div>
      <div className="cards-container">
        {tours.map((tour) => {
          return <Tours key={tour.id} {...tour} removeItem={removeItem} />;
        })}
      </div>
    </section>
  );
};
export default RenderCards;
