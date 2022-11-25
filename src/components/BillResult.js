import {
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  Card,
  Table,
  Alert,
} from "react-bootstrap";

const BillResult = ({
  fare,
  commission,
  labour,
  clerkFee,
  marketFee,
  totalExpense,
  grossPayment,
  netPayment,
  //
  name,
  //
  totalBaskets,
  bidPrice,
  totalWeight,
}) => {
  return (
    <div className='container-fluid'>
      <h4 className='my-1 text-center'>
        {name ? `${name}'s Bill Summary` : "Bill Summary"}
      </h4>
      <Card className='my-2'>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>Total Fare</th>
              <td>{fare && fare}</td>
            </tr>
            <tr>
              <th>Commission</th>
              <td>{commission && commission}</td>
            </tr>
            <tr>
              <th>Labour</th>
              <td>{labour && labour}</td>
            </tr>
            <tr>
              <th>Clerk Fee</th>
              <td>{clerkFee && clerkFee}</td>
            </tr>
            <tr>
              <th>Market Fee</th>
              <td>{marketFee && marketFee}</td>
            </tr>
            <tr
              style={{
                backgroundColor: "#0064ff91",
                borderTop: "2px #005080 solid",
                borderBottom: "2px #005080 solid",
              }}
            >
              <th>Total Expense</th>
              <td style={{ fontWeight: "bold" }}>
                {totalExpense && totalExpense}
              </td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Total Gross Price</th>
              <th>Total Expense</th>
              <th>Total Net Price</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                fontSize: "14px",
              }}
            >
              <td colSpan={3}>
                &darr;<sup>prc</sup> {bidPrice} x {totalWeight}{" "}
                <sup>wt</sup>
              </td>
            </tr>
            <tr
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: "#0064ff91",
              }}
            >
              <td>{grossPayment && grossPayment}</td>
              <td> - {totalExpense && totalExpense}</td>
              <td> = {netPayment && netPayment}</td>
            </tr>
          </tbody>
        </Table>
        {/* {JSON.stringify(bidPrice)}
        {JSON.stringify(typeof totalWeight)} */}
      </Card>
    </div>
  );
};

export default BillResult;
