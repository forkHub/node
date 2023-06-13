import express from "express";


export function session(req: express.Request): ISessionData {
	// console.log(req.session);

	let s: ISessionData = req.session as ISessionData;

	s.pesan = s.pesan || '';
	s.error = s.error || false;

	if (!s.login) {
		s.login = {
			stateHal: 'baru',
			// pesan: ''
		}
	}

	if (!s.baru) {
		s.baru = {
			feld: {
				password: {
					pesan: ''
				},
				username: {
					pesan: ''
				}
			},
			// pesan: '',
			stateHal: 'baru'
		}
	}

	return req.session as ISessionData;
}