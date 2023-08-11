import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Dat from './Dat';

export const cont = createContext();
function App() {
  const [bol, setBol] = useState(false);
  const [up, setUp] = useState(null);
  const [count, setCount] = useState(0);
  let [data, setData] = useState([]);
  const [del, setDel] = useState(false);
  const [sam, setSam] = useState(false);

  const handleSubmit = (e) => {
    if (sam === true) {
      e.preventDefault();
      console.log("Hi");
      setData(data.map(r => {
        if (r.id === count) {
          return { ...r, name: e.target[1].value, email: e.target[2].value };
        }
        return r;
      }))
      console.log(del);
      console.log(data);
      setSam(false);
    }
    else {
      e.preventDefault();
      const o = {
        id: e.target[0].value,
        name: e.target[1].value,
        email: e.target[2].value
      }
      // setObj(o);
      // data.push(obj);
      setData([...data, o])


      if (del == false) {
        setDel(true)
      }
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setCount(Number(count) + 1);
      console.log("rmn");
    }
  }
  const handleClick = () => {
    setData([]);
    setDel(false);
    setCount(0);
    console.log("Chu");
  }

  const handleClick2 = () => {
    if (!bol) {
      setBol(true)
    }
    else {
      setBol(false);
    }
  }
  const getCallback = (e) => {
    setCount(e);
    setSam(true);

  }
  console.log(count);
  return (
    <>
      <div className='d'>
        <div className='d0'>
          To Do App
        </div>
        <div className='d1'>
          <button onClick={handleClick2} style={{ marginRight: "10px" }}>Add</button>
          <button onClick={handleClick}> Delete All</button>
        </div>

        {bol && <div className='d2'>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Id' value={count} />
            <input type='text' placeholder='Name' required />
            <input type='email' placeholder='E-mail' required />
            <button>Submit</button>
          </form>
        </div>}
        <cont.Provider value={{ data, del }}>
          <Dat get={getCallback} />
        </cont.Provider>
      </div>

    </>
  )
}

export default App
