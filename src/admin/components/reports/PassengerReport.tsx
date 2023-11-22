import { UilChatBubbleUser } from "@iconscout/react-unicons";
import Card from "../../../util/components/CardChart";



// Analytics Cards Data
const cardsData = [
    {
        title: "Cantidad de viajeros diarios - Playa Grande",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
            color: '#fff'
        },
        barValue: 70,
        value: "7200",
        png: UilChatBubbleUser,
        series: [
            {
                name: "Ventas diarias",
                data: [1200, 800, 480, 900, 740, 1000, 1200],
            },
        ],
        time: "Últimos 7 días"
    },
    {
        title: "Cantidad de viajeros diarios - Playa Blanca",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "11'185",
        png: UilChatBubbleUser,
        series: [
            {
                name: "Ventas semanales",
                data: [1205, 1403, 2012, 2118, 775, 306, 953],
            },
        ],
        time: "Últimos 7 días"
    },
    {
        title: "Cantidad de viajeros semanales - Taganga",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "51'234",
        png: UilChatBubbleUser,
        series: [
            {
                name: "Expenses",
                data: [8600, 7412, 5352, 6395, 8478, 9158, 6951],
            },
        ],
        time: "Últimas 7 semanas"
    },
];


export const PassengerReport = () => {
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
    )
}
