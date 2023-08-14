import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Dat from './Dat';

export const cont = createContext();
function App() {
  const [bol, setBol] = useState(false);
  const [up, setUp] = useState(false);
  const [count, setCount] = useState(1);
  var [data, setData] = useState([]);
  const [del, setDel] = useState(false);
  const [sam, setSam] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
      setCount(data.length+1);
      setName("");
      setEmail("");
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
      setName("");
      setEmail("");
      setCount(Number(count) + 1);
      console.log("rmn");
    }
  }
  const handleClick = () => {
    setData([]);
    setDel(false);
    setCount(1);
    console.log("Chu");
    setName("");
    setEmail("");
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
    const cc=data.filter(z=>{
      if(z.id===e){
        return z;
      }
      return null;
    })
   setName(cc.map(e=>{return e.name}))
   setEmail(cc.map(e=>{return e.email}));

  }
  console.log(count);

  const handleChange1 = (e) => {
    setName(e.target.value);
  }

  const handleChange2 = (e) => {
    setEmail(e.target.value);
  }
  const getCheck=(e)=>{
      if(e){
        setName("");
        setEmail("");
        console.log(data.length);
      }
  }
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
            <input type='text' placeholder='Name' value={name} onChange={handleChange1} required />
            <input type='email' placeholder='E-mail' value={email} onChange={handleChange2} required />
            <button>Submit</button>
          </form>
        </div>}
        <cont.Provider value={{ data, del }}>
          <Dat get={getCallback}  check={getCheck}/>
        </cont.Provider>
      </div>

    </>
  )
}

export default App
