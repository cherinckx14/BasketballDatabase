import React from 'react';
import TeamRow from './TeamRow';


function TeamTable({ teams }) {
    return (
        <table class="styled-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team, i) => <TeamRow team={team} key={i} />)}
            </tbody>
        </table>
    );
}

export default TeamTable;