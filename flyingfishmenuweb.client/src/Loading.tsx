import { Spinner } from 'react-bootstrap';

export default function Loading() {
    return (
        <>
            <Spinner style={spinnerStyle} animation="border" />
        </>
    )
}

const spinnerStyle = {
    margin: 'auto'
} as const
