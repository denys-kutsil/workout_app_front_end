import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {IRootState} from "@/redux/reducers";

const useWorkoutView = () => {
	const history = useHistory();
	const { data } = useSelector((state: IRootState) => state.workouts);
	const { duration: statusDuration } = useSelector(
		(state: IRootState) => state.status
	);
	const minutes = Math.floor(statusDuration / 60);
	const seconds =
		statusDuration > 60 ? statusDuration - minutes * 60 : statusDuration;
	return {
		seconds,
		history,
		minutes,
		data
	}
};

export default useWorkoutView;