import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
  };
  
  const date = new Date().getFullYear();
  
  export const Contact = ({ message, senderEmail }: ContactFormEmailProps) => (
    <Html>
      <Head />
      <Preview>New message from your portfolio website</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Hr style={styles.hr} />
          <Section style={styles.message}>
            <Img
              src="https://devadil.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogodark.d12e5c20.png&w=3840&q=75"
              width="66"
              height="66"
              alt="AP"
              style={styles.img}
            />
            <Heading style={styles.heading}>Portfolio Contact Form</Heading>
            <Text style={styles.text}>
              You received a new message from {senderEmail}
            </Text>
            <Text style={{ ...styles.text, marginTop: "24px" }}>{message}</Text>
          </Section>
          <Hr style={{ ...styles.hr, marginTop: "12px" }} />
          <Section style={styles.paddingY}>
            <Row>
              <Text
                style={{
                  ...styles.footerText,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                You can reply to this email directly
              </Text>
            </Row>
            <Row>
              <Text style={styles.footerText}>
                © {date} Adil Patel All Rights Reserved.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default Contact;
  
  // Styling
  const commonPadding: React.CSSProperties = {
    paddingLeft: "40px",
    paddingRight: "40px",
  };
  
  const styles: Record<string, React.CSSProperties> = {
    main: {
      backgroundColor: "#ffffff",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    },
    container: {
      margin: "10px auto",
      width: "600px",
      maxWidth: "100%",
      border: "1px solid #E5E5E5",
      padding: "20px", // Padding inside the container
    },
    hr: {
      borderColor: "#E5E5E5",
      margin: "0",
    },
    message: {
      ...commonPadding,
      paddingTop: "40px",
      paddingBottom: "40px",
      textAlign: "center",
    },
    heading: {
      fontSize: "32px",
      lineHeight: "1.3",
      fontWeight: 700,
      textAlign: "center",
      letterSpacing: "-1px",
      marginBottom: "16px",
    },
    text: {
      color: "#505050",
      fontWeight: 500,
      lineHeight: "1.6",
      margin: "0",
    },
    img: {
      margin: "auto",
    },
    paddingY: {
      paddingTop: "22px",
      paddingBottom: "22px",
    },
    footerText: {
      margin: "0",
      color: "#AFAFAF",
      fontSize: "13px",
      textAlign: "center",
    },
  };
  