import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  const [data, setData] = useState();
  useEffect(()=> {
    axios.get('https://fakestoreapi.com/products').then(res => setData(res.data))
  }, [])

  const Navigation = useNavigate();

  const user = localStorage.getItem('user');

  return (
    <>{user == 'true' ? (<>
      <div className="">
        <div className="navbar fixed z-10 max-w-[1580px] bg-base-100 border-b">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="dropdown">
              <div tabIndex={0} role="button"  className="btn">
                Theme
                <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
                <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
              </ul>
            </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 skeleton rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="navbar flex justify-end pr-[30px] mt-[67px] text-neutral-content">
            <div className="join">
              <div>
                <div>
                  <input className="input input-bordered join-item" placeholder="Search"/>
                </div>
              </div>
              <select className="select select-bordered join-item">
                <option value={null} >Filter</option>
                <option value={"men's clothing"} >Erkaklar kiyimlari</option>
                <option value={"jewelery"}>Ayollar kiyimlari</option>
                <option value={"electronics"}>Electronika</option>
                <option value="women's clothing">birbima</option>
              </select>
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">new</span> 
                <button className="btn join-item">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-[20px] flex flex-wrap gap-[50px]">
          {data == null ? 
          <div className='mt-[120px] items-center m-auto'>
            <span className="loading loading-dots w-[60px]"></span>
          </div>
          :
          data?.map(({category, description, id, image, price, rating: rate, title})=> (
            <div key={id} className="card w-96 bg-base-100 m-auto shadow-xl">
              <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p>{description}</p>
                    <div className="card-actions items-center justify-between">
                      <p>{price}$</p>
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        ))
          }
        </div>
        {/* <span className="loading loading-dots loading-lg"></span> */}
      </div>
      </>) : (Navigation('/logup'))
      }
    </>
  )
}

export default App
