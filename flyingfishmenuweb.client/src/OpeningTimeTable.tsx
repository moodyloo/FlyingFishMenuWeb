import {Table} from 'react-bootstrap';

interface OpeningPeriod {
    morning: string
    evening: string
}
interface OpeningTime {
    weekday: string
    openingPeriod: OpeningPeriod
}


const openingTimes: OpeningTime[] = [
    { weekday: "Monday", openingPeriod: { morning: "CLOSED", evening: "CLOSED" } },
    { weekday: "Tuesday", openingPeriod: { morning: "11:30am - 2:00pm", evening: "5:00pm - 10:00pm" } },
    { weekday: "Wednesday", openingPeriod: { morning: "11:30am - 2:00pm", evening: "5:00pm - 10:00pm" } },
    { weekday: "Thursday", openingPeriod: { morning: "11:30am - 2:00pm", evening: "5:00pm - 10:00pm" } },
    { weekday: "Friday", openingPeriod: { morning: "11:30am - 2:00pm", evening: "5:00pm - 10:30pm" } },
    { weekday: "Saturday", openingPeriod: { morning: "11:30am - 2:00pm", evening: "5:00pm - 10:30pm" } },
    { weekday: "Sunday", openingPeriod: { morning: "CLOSED", evening: "5:00pm - 10:00pm" } }
]
export default function OpeningTimeTable() {

    const timeTableBody = openingTimes.map(openingTime => {
        return <tr>
            <td>{openingTime.weekday}</td>
            <td>{openingTime.openingPeriod.morning}</td>
            <td>{openingTime.openingPeriod.evening}</td>
        </tr>
    })
    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <th></th>
                        <th>Morning</th>
                        <th>Evening</th>
                    </tr>
                </thead>
                <tbody>
                    {timeTableBody}
                </tbody>
            </Table>
        </>
    )
}