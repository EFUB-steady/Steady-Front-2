import { useRecoilState } from "recoil";
import { StudyNameState } from "./StudyNameState";

//Name만 불러오는 hook(정확한지는 모르겠음...)
export const useStudyName = () => {
  const [studyName, setStudyName] = useRecoilState(StudyNameState);

  const setName = (name) => {
    setStudyName((input) => ({
      ...input,
      name: name,
    }));
  };
  return {
    setName,
    studyName,
    setStudyName,
  };
};
