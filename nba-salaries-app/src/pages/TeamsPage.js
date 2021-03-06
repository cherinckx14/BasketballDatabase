import React from 'react';
import TeamForm from '../components/forms/TeamForm';
import TeamTable from '../components/TeamTable';
import teams from "../data/teams.js";
function TeamsPage() {
    return (
        <>
            <h1>TeamsPage</h1>
            <TeamTable teams = {teams}/>
            <TeamForm/>
        </>
    );
}

export default TeamsPage;