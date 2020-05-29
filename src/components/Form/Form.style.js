import styled from "styled-components";

export const FormContainer = styled.div`
  /* border: 2px solid green; */
  margin: 10px auto;
  display: flex;
  max-width: 1300px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ContactImg = styled.div`
  width: min-content;
  display: none;

  img {
    width: 500px;
  }

  @media screen and (min-width: 1200px) {
    display: block;
    padding: 50px 20px;
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

    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
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
      /* outline: thin dotted; */
    }

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 1rem;
    }
  }

  input:last-of-type {
    border: none;
    /* background: #51a15d; */
    background: #b8d94f;
    width: 40%;
    margin: 5px auto;
    height: 40px;
    border-radius: 2px;
    font-size: 1.2rem;

    &:hover {
      /* background: #eec432; */
      background: #fed34a;
      transition: all 0.3s ease;
    }
    @media screen and (min-width: 768px) {
      width: 30%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1200px) {
    margin: 40px;
  }
`;
