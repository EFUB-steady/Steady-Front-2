import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";

export default function MakeStudyBtn() {
  let navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate(routes.MAKESTUDY);
      }}
    >
      Make Study
    </Button>
  );
}

const Button = styled.button`
  width: 119px;
  height: 36px;
  background: white;
  border: white;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 400;
`;
