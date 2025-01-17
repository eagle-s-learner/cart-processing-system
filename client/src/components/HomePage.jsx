import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ShowAllItems from "../pages/ShowAllItems";

export default function HomePage() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getItems() {
            try {
                const response = await axios.get(
                    "http://localhost:3200/api/items/"
                );

                if (response.status == 200) {
                    setItems(response.data);
                    setIsLoading(true);
                }
            } catch (error) {
                console.log(error);
            }
        }

        getItems();
    }, []);

    return (
        <div>
            {!isLoading && <h1 className="text-gray-500">Loading..</h1>}
            {isLoading && (
                <div>
                    <div className="bg-gray-300 p-2">
                        <h1 className="w-fit mx-auto text-2xl font-semibold text-slate-700">
                            Cart Processing System
                        </h1>
                    </div>
                    <ShowAllItems items={items}/>
                </div>
            )}
        </div>
    );
}
