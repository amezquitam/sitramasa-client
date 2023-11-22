import { Outlet } from "react-router-dom"
import { SelectUser } from "./util/components/SelectUser"


function App() {
  return (
    <>
      <SelectUser />
      <Outlet />
    </>
  )
}

export default App
