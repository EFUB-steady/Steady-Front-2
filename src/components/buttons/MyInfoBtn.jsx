import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes";
export default function MyInfoBtn() {
  let navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(routes.MYINFO);
      }}
    >
      My Info
    </Button>
  );
}

const Button = styled.button`
  width: 102px;
  height: 36px;
  background: white;
  border: white;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 400;
`;
