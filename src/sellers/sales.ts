import { docks } from "../docks/dockData";

export interface Sale {
    soldAt: Date
    revenue: number
    dock: string
}

const start = Date.UTC(2023, 10, 1, 0, 0, 0, 0);
const end = Date.now();

const randomDate = () => new Date(Math.random() * (end - start) + start)
const randomDock = () => docks[Math.floor(Math.random() * docks.length)].name
const randomRevenue = () => Math.floor(Math.random() * 900_000 + 70_000)

const sales: Sale[] = []

for (let i = 0; i < 500; i++) {
    sales.push({ soldAt: randomDate(), revenue: randomRevenue(), dock: randomDock() })
}

export { sales }