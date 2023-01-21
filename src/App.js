function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h1>Apps</h1>
      <button class="btn rounded-full">Button</button>
      <form action="/action_page.php">
          <label for="cars">Choose a car:</label>
          <select name="cars" id="cars" className="p-5 w-64">
            <option value="volvo" className="!p-5">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li className="list">Sidebar Item 1</li>
            <li>Sidebar Item 2</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default App;
