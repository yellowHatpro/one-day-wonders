const Navbar = () => {
  return (
    <div className={"flex bg-gray-900 text-xl font-bold text-amber-50 justify-around items-center"}>
      <div className={"flex-row pr-2 text-4xl flex"}>
        <div className={"m-2"}>💥</div>
        <div className={"text-2xl lg:hidden p-2"}>one day wonders</div>
      </div>
      <div className={"pl-64 hidden lg:block"}>
          <nav className={""}>
              <ul className={"flex p-2 m-2 text-lg"}>
                  <li className={"pr-2"}>Milestones</li>
                  <li className={"pr-2"}>Portfolios</li>
                  <li className={"pr-2"}>Services</li>
                  <li className={"pr-2"}>Work</li>
                  <li className={"pr-2"}>Testimonials</li>
              </ul>
          </nav>
      </div>
      <div>
        <button className={"bg-gray-800 rounded-[10px] p-2 hidden lg:block"}>
            Start a project?
        </button>
      </div>
    </div>
  )
}

export default Navbar
