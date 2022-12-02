import { useRecoilState } from "recoil";
import { StudyListState } from "./StudylistState";

//스터디 리스트 hook 필요시
export const useStudyList = () => {
  const [studyList, setStudyList] = useRecoilState(StudyListState);

  return {
    studyList,
    setStudyList,
  };
};
