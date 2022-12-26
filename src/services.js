class apiService {
	apiUrl = 'http://localhost:4000';
	async login(user) {
		return await fetch(`${this.apiUrl}/login`, {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
	async register(newUser) {
		return await fetch(`${this.apiUrl}/register`, {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
	async getCourses() {
		return await fetch(`${this.apiUrl}/courses/all`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
	async getAuthors() {
		return await fetch(`${this.apiUrl}/authors/all`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}

export const service = new apiService();
