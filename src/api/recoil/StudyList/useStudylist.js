import { useRecoilState } from "recoil";
import { StudylistState } from "./StudylistState";

export const useStudylist = () => {
  const [studylist, setStudylist] = useRecoilState(StudylistState);

  return {
    studylist,
    setStudylist,
  };
};
