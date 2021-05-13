import {
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAIL,

	// USER_LOGOUT,
} from "./types"
import axios from "axios";
import Cookie from "js-cookie";
import url from "../url"


//USER SIGNIN ACTION PAYLOAD
export const signin = (identifier, password) => async (dispatch) => {
	dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
	try {
		const { data } = await axios.post(
			`${url}/api/admin/login`,
			{
				email,
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



