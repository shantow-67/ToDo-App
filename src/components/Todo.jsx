import  { useState } from 'react';

const Todo = () => {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const AddTolist = () => {
        setList([...list, item]);
        setItem('');
    };

    const RemoveItem = (index) => {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
    };

    return (
        <div className="container ">
            <div className=' p-5'>
                
                <h1 className="display-4 text-center ">Todo List</h1>
                <div className='d-flex'>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="add item"
                    value={item}
                />
                <button className="btn btn-primary " onClick={AddTolist}>Add</button>
                </div>
                <div>
                    <table className="table">
                        <tbody className="table-striped">
                            {list.length !== 0 ? list.map((element, index) => (
                                <tr key={index} className="table-info">
                                    <td>{element}</td>
                                    <td className="text-right">
                                        <button className="btn btn-danger" onClick={() => RemoveItem(index)}>Remove</button>
                                    </td>
                                </tr>
                            )) : (<tr></tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Todo;