export default function Orderlist() {
  return (
    <div className="fixed bottom-0 inset-x-2 pl-6 pb-4 sm:px-0 sm:flex sm:items-center z-20 ">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="indicator ">
            <span className="indicator-item badge badge-secondary">99+</span>
            <label
              htmlFor="my-drawer"
              className="btn drawer-button btn-primary"
            >
              Orderan Anda
            </label>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
