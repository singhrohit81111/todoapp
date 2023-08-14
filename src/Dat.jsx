import { useState, useContext, useEffect } from 'react';
import { cont } from './App';

export default function Dat({ get,check}) {
    const { data, del } = useContext(cont);
    const [proto, setProto] = useState([]);

    useEffect(() => {
        setProto(data);
    }, [data, del])
    const handleClick3 = (e) => {
        get(e);
    }
    const handleClick4 = (e) => {
        const anotherData = proto.filter((r) => {
            return r.id != e;
        })
        setProto(anotherData);
        check(true);
    }
    console.log(del);
    return (
        <div className='dt'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {del && proto.map(e => {
                        return <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td className='em'>{e.email}</td>
                            <td>
                                <button onClick={() => { handleClick3(e.id) }} className='bt1'>Edit</button>
                                <button onClick={() => { handleClick4(e.id) }}>Delete</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
            {!del && <div className='dg'>No Data Entry</div>}
        </div>
    )
}