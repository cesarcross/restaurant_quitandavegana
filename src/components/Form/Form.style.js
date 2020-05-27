import styled from "styled-components";

export const FormContainer = styled.div`
  border: 2px solid green;
  margin: 10px auto;

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

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  textarea {
    resize: none;
    height: 200px;
  }

  input,
  textarea {
    border: none;
    border-bottom: 2px solid #eae8e8;
    margin: 20px 0;

    &:focus {
      outline: 0;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.7rem;
    }
  }

  input:last-of-type {
    border: none;
    background: gray;
    width: 40%;
    margin: 5px auto;
    height: 40px;
    border-radius: 2px;
    font-size: 1.2rem;

    &:hover {
      background: #20eac5;
    }
    @media screen and (min-width: 768px) {
      width: 30%;
    }
  }
`;
