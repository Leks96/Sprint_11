"use strict"

const callMe = (firstName, callback) => {
	setTimeout(() => {
		if (!firstName) return callback(new Error('no first name passed in!'));

		const fullName = `${firstName} Smith`;
		return callback(fullName);
		}, 1000);
	};
  callMe('Ben', console.log);
  callMe(null, console.log);

//promise type of the above callback function

  const c2promise = firstName => {
	return new promise ((resolve, reject) => 
	{
		setTimeout(() => {
			if (!firstName) reject (new Error('no first name passed in!'))

			const firstName = `${firstName} Smith`;

			resolve (fullName)
				}, 1000)
	})
  }

c2promise('Ben').then(console.log);
c2promise().catch(console.log);
