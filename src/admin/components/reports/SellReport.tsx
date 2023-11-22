
import { UilClipboardAlt, UilMoneyWithdrawal, UilUsdSquare } from '@iconscout/react-unicons'
import './SellReport.css'
import Card from '../../../util/components/CardChart';
import { sales } from '../../../sellers/sales';
import { docks } from '../../../docks/dockData';


const salesByDock = docks.map(dock => sales.filter(sale => sale.dock === dock.name))
salesByDock.map(sales => sales.filter(sale => sale.soldAt));


// Analytics Cards Data
const cardsData = [
    {
        title: "Ventas Diarias - Rodadero",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
            color: '#fff'
        },
        barValue: 70,
        value: "$110'260'000",
        png: UilUsdSquare,
        series: [
            {
                name: "Ventas diarias",
                data: [12_510_000, 6_300_500, 7_200_000, 18_600_000, 15_450_000, 34_000_000, 16_200_000],
            },
        ],
        time: "Últimos 7 días"
    },
    {
        title: "Ventas Semanales - Taganga",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "$520'260'000",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Ventas semanales",
                data: [92_510_000, 76_300_500, 87_200_000, 68_600_000, 75_450_000, 34_000_000, 86_200_000],
            },
        ],
        time: "Últimas 7 semanas"
    },
    {
        title: "Ventas Diarias - La Marina",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "$184'120'000",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10000000, 25120000, 15000000, 30000000, 12000000, 15000000, 20000000],
            },
        ],
        time: "Últimos 7 días"
    },
];

export const SellReport = () => {
    return (
        <div className="Cards">
            {cardsData.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                            time={card.time}
                        />
                    </div>
                );
            })}
        </div>
    );
}
