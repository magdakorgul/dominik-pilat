import "../App.css";


const LargeGrid = ({items}) => {

    return(

        <div className="large-grid grid grid-cols-4 p-8 gap-x-0 gap-5">
            {items.map(item => (
                <div key={item.id} className="item">
                    <img src={item.imageUrl} alt={item.title} className="image w-72 h-72 mb-3" />
                    <div className="flex justify-between w-72">
                    <p className="title text-left text-xl">{item.title}</p>
                    <p className="text-base text-right">
                            {item.price} 
                            {item.price !== "sold" && (
                                <>
                                    €
                                </>
                            )}
                            </p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default LargeGrid;