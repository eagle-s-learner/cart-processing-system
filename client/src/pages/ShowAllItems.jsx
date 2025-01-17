export default function ShowAllItems({ items }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                    <img
                        src={item.image}
                        alt={item.item_name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">
                            {item.item_name}
                        </h2>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-lg font-bold mt-2">₹{item.price}</p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
