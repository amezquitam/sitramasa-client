
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'

import * as RR from 'react-router-dom'
import { PassengerView } from './passengers/components/PassengerView'
import { BoatmanView } from './boatmans/components/BoatmanView.tsx'
import { AdminView } from './admin/components/AdminView.tsx'
import { SellerView } from './sellers/components/SellerView.tsx'
import { UserManager } from './admin/components/UserManager.tsx'
import { SellReport } from './admin/components/reports/SellReport.tsx'
import { DockReport } from './admin/components/reports/DockReport.tsx'
import { PassengerReport } from './admin/components/reports/PassengerReport.tsx'
import { TripReport } from './admin/components/reports/TripReport.tsx'
import { AnomaliesReport } from './admin/components/reports/AnomaliesReport.tsx'

const router = RR.createBrowserRouter([
  {
    id: 'root',
    path: '/sitramasa-client/',
    element: <App />,
    children: [
      {
        path: '/sitramasa-client/pasajero/',
        element: <PassengerView />,
      },
      {
        path: '/sitramasa-client/lanchero/',
        element: <BoatmanView />,
      },
      {
        path: '/sitramasa-client/administrador/',
        element: <AdminView />,
        children: [
          {
            path: '/sitramasa-client/administrador/',
            element: <UserManager />,
          },
          {
            path: '/sitramasa-client/administrador/reporte/ventas',
            element: <SellReport />,
          },
          {
            path: '/sitramasa-client/administrador/reporte/muelles',
            element: <DockReport />,
          },
          {
            path: '/sitramasa-client/administrador/reporte/pasajeros',
            element: <PassengerReport />,
          },
          {
            path: '/sitramasa-client/administrador/reporte/viajes',
            element: <TripReport />,
          },
          {
            path: '/sitramasa-client/administrador/reporte/anomalias',
            element: <AnomaliesReport />,
          },
        ]
      },
      {
        path: '/sitramasa-client/vendedor/',
        element: <SellerView />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RR.RouterProvider router={router} />
)
