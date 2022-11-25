import { useEffect } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  Card,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BillCalculator = ({
  inputFare,
  setInputFare,
  inputCommission,
  setInputCommission,
  inputLabour,
  setInputLabour,
  //
  fare,
  setFare,
  commission,
  setCommission,
  labour,
  setLabour,
  clerkFee,
  setClerkFee,
  marketFee,
  setMarketFee,
  totalExpense,
  setTotalExpense,
  setBasketWeightList,
  basketWeightList,
  totalBaskets,
  setTotalBaskets,
  currentWeight,
  setCurrentWeight,
  totalWeight,
  setTotalWeight,
  bidPrice,
  setBidPrice,
  //
  grossPayment,
  setGrossPayment,
  netPayment,
  setNetPayment,
  //
  loading,
  setLoading,
  success,
  setSuccess,
  error,
  setError,
  //
  name,
  setName,
  setSubject,
  setMessage,
}) => {
  const navigate = useNavigate();

  const addInputField = (e) => {
    // var aa = repeat({basketWeight: ""}, 3);
    // setBasketWeightList([...basketWeightList, ...aa]);
    setBasketWeightList([...basketWeightList, { basketWeight: "" }]);
  };

  const removeInputField = (index) => {
    const list = [...basketWeightList];
    list.splice(index, 1);
    setBasketWeightList(list);
  };

  // function repeat(item, times) {
  //   let rslt = [];
  //   for (let i = 0; i < times; i++) {
  //     rslt.push(item);
  //   }
  //   return rslt;
  // }

  const handleBaskets = (e, i) => {
    const { name, value } = e.target;

    const list = [...basketWeightList];
    list[i][name] = value;

    setBasketWeightList(list);
  };

  const calculateBill = (e) => {
    e.preventDefault();

    const list = [...basketWeightList];
    const notNumber = (obj) =>
      obj.basketWeight === "" ||
      obj.basketWeight <= 0 ||
      obj.basketWeight === isNaN();

    if (list.some(notNumber)) {
      return setError("Type a number value or remove the input field");
    }

    const getTotalWeight = list.reduce(
      (accum, item) =>
        accum + parseFloat(item && item.basketWeight && item.basketWeight),
      0
    );

    const getGrossPayment =
      getTotalWeight && getTotalWeight * parseInt(bidPrice);

    const commissionResult = Math.round(
      (parseInt(inputCommission && inputCommission) / 100) * getGrossPayment
    );

    const fareResult = list && list.length && list.length * Number(inputFare);

    const labourResult = list && list.length * parseInt(inputLabour);

    const expenseResult =
      commissionResult +
      fareResult +
      labourResult +
      parseInt(clerkFee ? clerkFee : 0) +
      parseInt(marketFee ? marketFee : 0);

    const totalPayment = getGrossPayment - expenseResult;

    setTotalWeight(getTotalWeight);

    setFare(fareResult);
    setCommission(commissionResult);
    setLabour(labourResult);
    setTotalExpense(expenseResult);
    setGrossPayment(getGrossPayment);
    setNetPayment(totalPayment);

    navigate("/result");
  };

  const getTotal = () => {
    const list = [...basketWeightList];
    const currentWeightVar = list.reduce(
      (accum, item) =>
        accum + parseFloat(item && item.basketWeight ? item.basketWeight : 0),
      0
    );
    setCurrentWeight(currentWeightVar);
  };

  const getTotalBasketCount = () => {
    const list = [...basketWeightList];
    setTotalBaskets(list && list.length);
  };

  useEffect(() => {
    getTotal();
    getTotalBasketCount();
  }, [basketWeightList]);

  useEffect(() => {
    let timeout;

    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <div className='container-fluid'>
      {/* {JSON.stringify(bidPrice)} */}
      {/* {JSON.stringify(totalWeight)} */}
      <div className='d-flex justify-content-center'>
        <h3
          className='border-success'
          style={{ color: "forestgreen", fontWeight: "bold" }}
        >
          Market Bill Calculator
        </h3>
      </div>
      <form onSubmit={calculateBill} className='mt-4'>
        <Row className='my-2'>
          <Form.Group as={Col} md={3}>
            <Form.Label>Vendor Name</Form.Label>
            <Form.Control
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Bid Price (₨)</Form.Label>
            <Form.Control
              type='number'
              value={bidPrice}
              required
              onChange={(e) => setBidPrice(parseInt(e.target.value))}
            />
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Commission (%)</Form.Label>
            <Form.Control
              type='number'
              value={inputCommission}
              required
              onChange={(e) => setInputCommission(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className='my-2'>
          <Form.Group as={Col} md={3}>
            <Form.Label>Fare (₨ Per Nagh)</Form.Label>
            <Form.Control
              type='number'
              value={inputFare}
              onChange={(e) => setInputFare(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} md={3}>
            <Form.Label>Labour (₨ Per Nagh)</Form.Label>
            <Form.Control
              type='number'
              value={inputLabour}
              onChange={(e) => setInputLabour(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} md={3}>
            <Form.Label>Clerk Fee (₨)</Form.Label>
            <Form.Control
              type='number'
              value={clerkFee}
              onChange={(e) => setClerkFee(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} md={3}>
            <Form.Label>Market Fee (₨)</Form.Label>
            <Form.Control
              type='number'
              value={marketFee}
              onChange={(e) => setMarketFee(e.target.value)}
            />
          </Form.Group>
        </Row>

        <hr style={{ color: "green" }} />

        {/* {JSON.stringify(basketWeightList)} */}

        <Row className='my-2 justify-content-center'>
          <Card as={Col} md={3} bg='success' text='dark' className='m-1'>
            <Card.Body className='px-1 py-1 d-flex justify-content-center align-items-center flex-column'>
              <Card.Text>Total weight (kg)</Card.Text>
              <Card.Title style={{ fontSize: "40px" }}>
                {currentWeight ? currentWeight : 0}
              </Card.Title>
            </Card.Body>
          </Card>

          <Card as={Col} md={3} bg='info' text='dark' className='m-1'>
            <Card.Body className='px-1 py-1 d-flex justify-content-center align-items-center flex-column'>
              <Card.Text>Total nagh</Card.Text>
              <Card.Title style={{ fontSize: "40px" }}>
                {totalBaskets ? totalBaskets : 0}
              </Card.Title>
            </Card.Body>
          </Card>

          {error && loading === false ? (
            <Alert className='mt-2' variant='danger'>
              {error}
            </Alert>
          ) : (
            ""
          )}
        </Row>

        <Row className='my-2'>
          <h5 className=' text-center'>Weight (Per Nagh)</h5>

          {basketWeightList.map((item, i) => {
            return (
              <ListGroup key={i} as={Col} md={2} className='my-1'>
                <ListGroup.Item>
                  <div className='d-flex justify-content-between position-relative'>
                    <Form.Label>( {i + 1} )</Form.Label>
                    <span
                      className='badge bg-danger'
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "3px",
                        // background: "rgb(232, 27, 27)",
                        color: "white",
                        paddingLeft: "3.5px",
                        paddingRight: "3.5px",
                        cursor: "pointer",
                      }}
                      onClick={() => removeInputField(i)}
                    >
                      <i className='bx bx-x'></i>
                    </span>
                  </div>
                  <Form.Control
                    type='number'
                    name='basketWeight'
                    value={item.basketWeight}
                    onChange={(e) => handleBaskets(e, i)}
                  />
                </ListGroup.Item>
              </ListGroup>
            );
          })}
          <Form.Group as={Col} md={2}>
            <div className='my-3 d-flex justify-content-center align-items-center'>
              <Button
                variant='primary'
                className='mx-2'
                onClick={addInputField}
              >
                <i className='bx bx-plus'></i>
              </Button>
              <Button variant='success' className='mx-2' type='submit'>
                Done
              </Button>
            </div>
          </Form.Group>
        </Row>
      </form>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        {/* <div className='my-2'>Monthly Payment</div> */}
        {/* <h2>{parseInt(monthlyPayment)}</h2> */}
      </div>
    </div>
  );
};

export default BillCalculator;
