import styled from "styled-components";

export const FormContainer = styled.div`
  border: 2px solid green;
  ${"" /* display: flex;
  flex-direction: column; */}
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ContactForm = styled.div`
  width: 80vw;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input,
  textarea {
    border: none;
    border-bottom: 2px solid #eae8e8;
    margin: 20px 0;
  }

  input:last-of-type {
    border: none;
    background: gray;
    width: 50%;
    margin: 5px auto;
    &:hover {
      background: #20eac5;
    }
  }
`;
