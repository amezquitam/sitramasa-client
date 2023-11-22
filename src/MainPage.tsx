import { AdminView } from "./admin/components/AdminView";
import { BoatmanView } from "./boatmans/components/BoatmanView";
import { PassengerView } from "./passengers/components/PassengerView";
import { SellerView } from "./sellers/components/SellerView";
import { useAppContext } from "./app/useAppContext";
import { SelectUser } from "./util/components/SelectUser";


export const MainPage = () => {
    const { role } = useAppContext()

    const roleViews = new Map<string, JSX.Element>([
        ['Administrador', <AdminView />],
        ['Vendedor', <SellerView />],
        ['Lanchero', <BoatmanView />],
        ['Pasajero', <PassengerView />],
        ['none', <SelectUser />],
    ])

    return roleViews.get(role)
}