import { cardsData } from "../data/data";

const CardsSection = () => {
  return (
    <div className="flex flex-1 sm:justify-evenly  ">
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:space-x-10  sm:m-0 mx-24">
        {cardsData.map((card) => (
          <div
            className="card  p-4 h-[200px]  sm:w-[200px]  w-52"
            key={card.id}
          >
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className=" font-serif  font-thin text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
