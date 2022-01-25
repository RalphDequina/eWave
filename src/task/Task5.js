/* Task 5:
Display a list of products from the "products.json" file as a table. The data in this table should have the ability to be filtered and sorted.
Displaying:
The "Options" button should be displayed. Below "Options" button the list of all products should be displayed as a table, which will contain the following columns: "#" (row number in the table), "Category", "Price", "Manufacturer" and "Production date". Above the table of products should also be displayed: total quantity, total cost, average price of displayed products, the most expensive product and it's price, as well as the cheapest product and it's price.
Filtering:
By clicking on the "Options" button, the side panel should open. Side panel should contain various filtering settings and the control buttons such as "Apply" and "Reset". By clicking on the "Apply" button, the filtering and sorting settings should be applied, the side panel should be closed and the data in the table should change accordingly to the applied settings. By clicking on the "Reset" button, all the previously selected settings should be reset and the panel should be closed.
 ● Filter by category:
A list of checkboxes with unique categories should be displayed in the side panel. This list
 
could be extracted from the list of all products. There can be multiple selected categories. Additionally, there should be an "All except" option. If it is active, the list of products should be filtered by all categories except those that were selected.
● Filter by price:
Two input fields should be displayed in the side panel. One of them is responsible for the lowest price, the other one is the highest price.
● Filter by manufacturer:
Same functionality as for category.
  
Sorting:
By clicking on the heading cell in the table, sorting should be performed. Sorting can be ascending and descending. */

import productData from "./product";


export default function App() {

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.description}</td>
                                <td>{val.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};