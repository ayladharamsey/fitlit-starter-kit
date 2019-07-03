if (typeof module !== 'undefined') {
	Hydration = require('./Hydration')
	hydrationData = require('../data/hydration-test-data')
	userData = require('../data/users-test-data')
	user = require('./User')
}

class HydrationRepo{
	constructor(id){
		this.data = hydrationData;
		this.userData = new Hydration(id);
		this.specificUser = [];
	};

	findHydrationData(id){
		let filteredHydrationData = this.data.filter(hydration => hydration.userID === id); 
		filteredHydrationData.forEach(user => this.specificUser.push(user));
	};

	findDailyConsumption(dateOf){
		return this.specificUser.find(day=> day.date === dateOf).numOunces;
	};
};


module.exports = HydrationRepo;