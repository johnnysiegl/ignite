import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashoard(){
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}