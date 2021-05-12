import {
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAIL,
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAIL
	// USER_LOGOUT,
} from "./types"
import axios from "axios";
import Cookie from "js-cookie";


//USER SIGNIN ACTION PAYLOAD
export const signin = (identifier, password) => async (dispatch) => {
	dispatch({ type: USER_SIGNIN_REQUEST, payload: { identifier, password } });
	try {
		const { data } = await axios.post(
			"https://server.wakafoods.com/api/chef/auth/login/default",
			{
				identifier,
				password
			}
		);
		const token = data.token;
		if (token) {
			dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
			Cookie.set("user", JSON.stringify(token));

		} else {

			dispatch({ type: USER_SIGNIN_FAIL, payload: data.errors });
		}
	} catch (error) {
			dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data });	
	}
};

//USER SIGNUP ACTION PAYLOAD
export const signup = (
	name, place, phone, email, password, dispatcher_code
) => async (dispatch) => {
	dispatch({
		type: USER_SIGNUP_REQUEST,
		payload: { name, place, phone, email, password, dispatcher_code }
	});
	try {
		const { data } = await axios.post(
			"https://server.wakafoods.com/api/chef/auth/register/default",
			{
				name, place, phone, email, password, dispatcher_code
			}
		);
		const token = data.token;
		if (token) {
			dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
			Cookie.set("user", JSON.stringify(data));
		} else {

			dispatch({ type: USER_SIGNUP_FAIL, payload: data.message });
		}
	} catch (error) {
		dispatch({ type: USER_SIGNUP_FAIL, payload: error.response.data });
	}
};


// //LOGOUT USER ACTION PAYLOAD
// export const logout = (dispatch) => {
// 	Cookie.remove("user");
// 	dispatch({ type: USER_LOGOUT });
// };
