// Copyright 2018 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';
import app from './app.reducer';
import projects from './projects.reducer';
import auth from './auth.reducer';
import toast from './toast.reducer';
import user from './user.reducer';
import organization from './organization.reducer';
import { AnyAction } from 'redux';



const rehydrated = (state = false, action: AnyAction) => {
    switch (action.type) {
        case 'persist/REHYDRATE':
            return true;
        default:
            return state;
    }
};

export default {
    loadingBar,
    rehydrated,
    app,
    projects,
    auth,
    toast,
    user,
    organization
};