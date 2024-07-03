import "../App.css";


const LargeGrid = ({items}) => {

    return(

        <div className="large-grid grid grid-cols-4 p-8 gap-x-0 gap-y-4">
            {items.map(item => (
                <div key={item.id} className="item">
                    <img src={item.imageUrl} alt={item.title} className="image w-72 h-80 mb-3" />
                    <p className="title text-left text-xl">{item.title}</p>
                </div>
            ))}

        </div>
    );
};

export default LargeGrid;