import { useState } from "react";
import { Button, Typography } from "antd";
import { FullPage, Loader } from "Components/";
import styled, { css } from "styled-components";
import "./styles.css";

const razaorPayresponse = {
  status: true,
  name: "Vital",
  image: "https://healthfront-kyc-docs.s3.ap-south-1.amazonaws.com/vital.png",
  key: "rzp_test_X2I3948B0yBS7o",
  order_id: "order_MdTCSO9s1sAicp",
  theme: {
    color: "#436AB2",
  },
  "theme.hide_topbar": "true",
  amount: 1113600,
  description: "Insurance Premium",
  prefill: {
    name: "Shivam Yadav",
    email: "shivam@getvital.s",
    contact: "7985144863",
  },
  vital_subscription_id: "subs_34c4b4ab08b09c",
};

const handleMakePayment = () => {
  const rzp1 = new window.Razorpay(razaorPayresponse);
  rzp1.open();
};

export const Payment = () => {
  return (
    <FullPage>
      <Body>
        <Loader />
        <PaymentWrapper>
          <Typography.Text className="payment-text">
            You have a payment pending of $200.00
          </Typography.Text>
          <Button onClick={handleMakePayment} type="primary">
            Make Payment
          </Button>
        </PaymentWrapper>
      </Body>
    </FullPage>
  );
};

const Body = styled.div`
  display: flex;
  padding: 48px;
`;

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border: 1.5px solid grey;
  border-radius: 12px;
`;
