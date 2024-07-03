export default {
	logout: () => {
		storeValue('token', null); // Clear the stored token
		navigateTo('Login', {}); // Redirect to the login page
		showAlert('Logged out successfully', 'success'); // Show a success message
	}
}